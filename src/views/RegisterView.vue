<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-register">
        Already have an account
        <RouterLink class="router-link" :to="{ name: 'Login' }">Login</RouterLink>
      </p>
      <h2>Create your FireBlog Account</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="First Name" v-model="firstName" />
          <UserIcon class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="Last Name" v-model="lastName" />
          <UserIcon class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="Username" v-model="username" />
          <UserIcon class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="Email" v-model="email" />
          <EmailIcon class="icon" />
        </div>
        <div class="input">
          <input type="password" placeholder="Password" v-model="password" />
          <PasswordIcon class="icon" />
        </div>
      </div>
      <button>Sign Up</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script setup lang="ts">
import EmailIcon from "@/assets/Icons/envelope-regular.svg";
import PasswordIcon from "@/assets/Icons/lock-alt-solid.svg";
import UserIcon from "@/assets/Icons/user-alt-light.svg";

import { ref } from "vue";

const email = ref<string>("");
const password = ref<string>("");
const firstName = ref<string>("");
const lastName = ref<string>("");
const username = ref<string>("");
</script>

<style scoped lang="scss">
.register {
  h2 {
    max-width: 350px;
  }
}
</style>
