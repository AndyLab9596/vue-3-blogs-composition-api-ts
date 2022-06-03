<template>
    <header>
        <nav class="container">
            <div class="branding">
                <RouterLink class="header" :to="{ name: 'Home' }">
                    FireBlogs
                </RouterLink>
            </div>
            <div class="nav-links">
                <ul class="" v-show="!mobile">
                    <RouterLink class="link" :to="{ name: 'Home' }">
                        Home
                    </RouterLink>
                    <RouterLink class="link" :to="{ name: 'Blogs' }">
                        Blogs
                    </RouterLink>
                    <RouterLink class="link" :to="{ name: 'Home' }">
                        Create Post
                    </RouterLink>
                    <RouterLink class="link" :to="{ name: 'Login' }">
                        Login/Register
                    </RouterLink>
                </ul>
            </div>
        </nav>
        <menuIcon class="menu-icon" @click="toggleMobileNav" v-show="mobile" />
        <transition name="mobile-nav" mode="out-in">
            <ul class="mobile-nav" v-show="mobileNav">
                <RouterLink class="link" :to="{ name: 'Home' }">
                    Home
                </RouterLink>
                <RouterLink class="link" :to="{ name: 'Blogs' }">
                    Blogs
                </RouterLink>
                <RouterLink class="link" :to="{ name: 'Home' }">
                    Create Post
                </RouterLink>
                <RouterLink class="link" :to="{ name: 'Login' }">
                    Login/Register
                </RouterLink>
            </ul>
        </transition>
    </header>
</template>

<script setup lang="ts">
import menuIcon from '@/assets/Icons/bars-regular.svg';
import { onMounted, ref } from 'vue';

const mobile = ref<boolean>(false);
const mobileNav = ref<boolean>(false);
const windowWidth = ref<number>(window.innerWidth);

const toggleMobileNav = () => {
    mobileNav.value = !mobileNav.value
};

const checkScreen = () => {
    windowWidth.value = window.innerWidth
    if (windowWidth.value < 750) {
        mobile.value = true;
        return
    }
    mobile.value = false;
    mobileNav.value = false;
};

onMounted(() => {
    window.addEventListener('resize', checkScreen);
    checkScreen();
})



</script>

<style scoped lang="scss">
header {
    background-color: #fff;
    padding: 0 25px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
    z-index: 99;

    .link {
        font-weight: 500;
        padding: 0 8px;
        transition: 0.3s color ease;

        &:hover {
            color: #1eb8b8;
        }
    }

    nav {
        display: flex;
        padding: 25px 0;
        max-width: 1440px;
        margin: 0 auto;

        .branding {
            display: flex;
            align-items: center;

            .header {
                font-size: 24px;
                color: #000;
                text-decoration: none;
                font-weight: 600;
            }
        }

        .nav-links {
            position: relative;
            flex: 1;
            display: flex;
            justify-content: flex-end;
            align-items: center;

            ul {
                margin-right: 32px;

                .link {
                    margin-right: 32px;
                }

                .link:last-child {
                    margin-right: 0;
                }
            }
        }
    }

    .menu-icon {
        position: absolute;
        cursor: pointer;
        width: auto;
        right: 25px;
        top: 32px;
        height: 25px;
    }

    .mobile-nav {
        padding: 20px;
        width: 70%;
        max-width: 250px;
        display: flex;
        flex-direction: column;
        position: fixed;
        height: 100%;
        background-color: #303030;
        top: 0;
        left: 0;

        .link {
            padding: 15px 0;
            color: #fff;
        }
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
        transition: all 0.1s ease
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
        transform: translateX(-250px);
        opacity: 0;
    }

    .mobile-nav-enter-to,
    .mobile-nav-leave-from {
        transform: translateX(0px);
        opacity: 1;
    }

}
</style>