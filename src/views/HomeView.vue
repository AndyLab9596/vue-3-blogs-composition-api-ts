<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
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
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import BlogPost from "@/components/UI/BlogPost.vue";
import BlogCard from "@/components/UI/BlogCard.vue";

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

const sampleBlogCards: IBlogCard[] = [
  { blogTitle: "Blog Card #1", blogCoverPhoto: "stock-1", blogDate: "May 1, 2021" },
  { blogTitle: "Blog Card #2", blogCoverPhoto: "stock-2", blogDate: "May 1, 2021" },
  { blogTitle: "Blog Card #3", blogCoverPhoto: "stock-3", blogDate: "May 1, 2021" },
  { blogTitle: "Blog Card #4", blogCoverPhoto: "stock-4", blogDate: "May 1, 2021" },
];
</script>

<style scoped lang="scss">
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
</style>
