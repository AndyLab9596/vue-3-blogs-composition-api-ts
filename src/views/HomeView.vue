<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" v-if="!user" />
    <BlogPost v-for="(post, index) in sampleBlogPost" :key="index" :post="post" />
  </div>
  <div class="blog-card-wrap">
    <div class="container">
      <h3>View More Recent Blogs</h3>
      <div class="blog-cards">
        <BlogCard v-for="(post, index) in sampleBlogCards" :key="index" :post="post" />
      </div>
    </div>
  </div>
  <div class="updates" v-if="!user">
    <div class="container">
      <h2>never miss a post, Register for your free account today!</h2>
      <RouterLink class="router-button" to="#">
        Register for FireBlogs
        <Arrow class="arrow arrow-light" />
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import BlogPost from "@/components/UI/BlogPost.vue";
import BlogCard from "@/components/UI/BlogCard.vue";
import Arrow from "@/assets/Icons/arrow-right-light.svg";
import { useStorePosts } from "@/stores/storePosts";
import { useStoreProfile } from "@/stores/storeProfile";

export interface ISamplePost {
  title: string;
  blogPost: string;
  welcomeScreen?: boolean;
  photo?: string;
  blogCoverPhoto?: string;
}

export interface IBlogCard {
  blogTitle: string;
  blogCoverPhoto: string;
  blogDate: string;
}

const storeProfile = useStoreProfile();
const user = computed(() => storeProfile.user);

const welcomeScreen = reactive({
  title: "Welcome",
  blogPost:
    "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
  welcomeScreen: true,
  photo: "coding",
} as ISamplePost);

const sampleBlogPost = ref<ISamplePost[]>([
  {
    title: "This is a Filter Title",
    blogPost: "This is a filter blog post title",
    blogCoverPhoto: "beautiful-stories",
  },
  {
    title: "This is a Filter Title",
    blogPost: "This is a filter blog post title",
    blogCoverPhoto: "designed-for-everyone",
  },
]);

const storePosts = useStorePosts();

const sampleBlogCards = computed(() => {
  return storePosts.sampleBlogCards;
})

</script>

<style scoped lang="scss">
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}

.updates {
  .container {
    padding: 100px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;

      @media (min-width: 800px) {
        margin-left: auto;
      }
    }

    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;

      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>
