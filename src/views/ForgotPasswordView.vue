<template>
  <div class="reset-password">
    <ModalVue
      v-if="isModalActive"
      @close-modal="closeModal"
      :modal-message="modalMessage"
    />
    <LoadingVue v-if="isLoading" />
    <div class="form-wrap">
      <form class="reset" @submit.prevent="resetPassword">
        <p class="login-register">
          Back to
          <RouterLink class="router-link" :to="{ name: 'Login' }">Login</RouterLink>
        </p>
        <h2>Reset Password</h2>
        <p>Forgot your password? Enter your email to reset it</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <EmailIcon class="icon" />
          </div>
        </div>
        <button>Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import EmailIcon from "@/assets/Icons/envelope-regular.svg";

import { ref } from "vue";
import ModalVue from "@/components/UI/ModalVue.vue";
import LoadingVue from "@/components/UI/LoadingVue.vue";

import firebase from "firebase/app";
import "firebase/auth";

const email = ref<string>("");
const isModalActive = ref<boolean>(false);
const isLoading = ref<boolean>(false);
const modalMessage = ref<string>("");

const closeModal = () => {
  isModalActive.value = false;
};

const resetPassword = async () => {
  isLoading.value = true;
  try {
    await firebase.auth().sendPasswordResetEmail(email.value);
    modalMessage.value = "If your account exist, you will receive a email";
    isLoading.value = false;
    isModalActive.value = true;
  } catch (error) {
    modalMessage.value = error.message;
    isLoading.value = false;
    isModalActive.value = true;
  }
};
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>
