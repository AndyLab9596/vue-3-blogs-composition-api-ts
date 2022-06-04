<template>
  <div class="form-wrap">
    <form class="register" @submit.prevent="register">
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
        <div v-show="isError" class="error">
          {{ errorMsg }}
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

import firebase from "firebase/app";
import "firebase/auth";
import db from "../../firebase/firebaseinit";

import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref<string>("");
const password = ref<string>("");
const firstName = ref<string>("");
const lastName = ref<string>("");
const username = ref<string>("");
const isError = ref<boolean>(false);
const errorMsg = ref<string>("");

const register = async () => {
  try {
    if (
      email.value === "" &&
      password.value === "" &&
      firstName.value === "" &&
      lastName.value === "" &&
      username.value === ""
    ) {
      isError.value = true;
      errorMsg.value = "Please fill out all the fields";
      return;
    }
    isError.value = false;
    const firebaseAuth = await firebase.auth();
    const createUser = await firebaseAuth.createUserWithEmailAndPassword(
      email.value,
      password.value
    );
    const result = await createUser;
    const dataBase = db.collection("users").doc(result?.user?.uid);
    await dataBase.set({
      firstName: firstName.value,
      lastName: lastName.value,
      username: username.value,
      email: email.value,
    });

    router.push({ name: "Home" });
  } catch (error) {
    if (error instanceof Error) {
      isError.value = true;
      errorMsg.value = error.message;
    }
  }
};
</script>

<style scoped lang="scss">
.register {
  h2 {
    max-width: 350px;
  }
}
</style>
