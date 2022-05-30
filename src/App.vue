<template>
  <div class="app-wrapper">
    <div class="app">
      <NavigationBar />
      <router-view />
      <FooterSection />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import NavigationBar from './components/Layout/NavigationBar.vue';
import FooterSection from './components/Layout/FooterSection.vue';

interface ISamplePost {
  title: string;
  blogHTML: string;
  blogCoverPhoto: string;
}

const welcomeScreen = reactive({
  title: 'Welcome',
  blogPost: 'Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!',
  welcomeScreen: true,
  photo: 'coding'
})

const sampleBlogPost = ref<ISamplePost[]>([
  {
    title: 'This is a Filter Title',
    blogHTML: 'This is a filter blog post title',
    blogCoverPhoto: 'beautiful-stories'
  },
  {
    title: 'This is a Filter Title',
    blogHTML: 'This is a filter blog post title',
    blogCoverPhoto: 'designed-for-everyone'
  }
])

</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}
</style>