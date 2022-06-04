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
                    <RouterLink class="link" :to="{ name: 'Login' }" v-if="!user">
                        Login/Register
                    </RouterLink>
                </ul>
                <div @click="toggleIsDropdownProfile" class="profile" ref="profile" v-if="user">
                    <span>{{ storeProfile.profileInitials }}</span>
                    <div v-show="isShowDropdownProfile" class="profile-menu">
                        <div class="info">
                            <p class="initials">
                                {{ storeProfile.profileInitials }}
                            </p>
                            <div class="right">
                                <p>{{ storeProfile.profileFirstName }} {{ storeProfile.profileLastName }}</p>
                                <p>
                                    {{ storeProfile.profileUsername }}
                                </p>
                                <p>
                                    {{ storeProfile.profileEmail }}
                                </p>
                            </div>
                        </div>
                        <div class="options">
                            <div class="option">
                                <RouterLink to="#" class="option">
                                    <UserIcon class="icon" />
                                    <p>Profile</p>
                                </RouterLink>
                            </div>
                            <div class="option">
                                <RouterLink to="#" class="option">
                                    <AdminIcon class="icon" />
                                    <p>Admin</p>
                                </RouterLink>
                            </div>
                            <div class="option" @click="signOut">
                                <SignOutIcon class="icon" />
                                <p>Sign Out</p>
                            </div>
                        </div>
                    </div>
                </div>
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
                <RouterLink class="link" :to="{ name: 'Login' }" v-if="!user">
                    Login/Register
                </RouterLink>
            </ul>
        </transition>
    </header>
</template>

<script setup lang="ts">
import menuIcon from '@/assets/Icons/bars-regular.svg';
import UserIcon from "@/assets/Icons/user-alt-light.svg";
import AdminIcon from '@/assets/Icons/user-alt-light.svg';
import SignOutIcon from '@/assets/Icons/sign-out-alt-regular.svg';

import { useStoreProfile } from '@/stores/storeProfile';
import { computed, onMounted, ref } from 'vue';

import firebase from 'firebase/app';
import 'firebase/auth';

const storeProfile = useStoreProfile();

const mobile = ref<boolean>(false);
const mobileNav = ref<boolean>(false);
const windowWidth = ref<number>(window.innerWidth);
const isShowDropdownProfile = ref<boolean>(false);
const profile = ref(null);

const toggleIsDropdownProfile = (e: Event) => {
    if (e.target === profile.value) {
        isShowDropdownProfile.value = !isShowDropdownProfile.value;
    }
}

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

const signOut = () => {
    firebase.auth().signOut();
    window.location.reload();
}

const user = computed(() => storeProfile.user);

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

            .profile {
                position: relative;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                color: #fff;
                background-color: #303030;

                span {
                    pointer-events: none;
                }

                .profile-menu {
                    position: absolute;
                    top: 60px;
                    right: 0;
                    width: 250px;
                    background-color: #303030;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

                    .info {
                        display: flex;
                        align-items: center;
                        padding: 15px;
                        border-bottom: 1px solid #fff;

                        .initials {
                            position: initial;
                            width: 40px;
                            height: 40px;
                            background-color: #fff;
                            color: #303030;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border-radius: 50%;
                        }

                        .right {
                            flex: 1;
                            margin-left: 24px;

                            p:nth-child(1) {
                                font-size: 14px;
                            }

                            p:nth-child(2),
                            p:nth-child(3) {
                                font-size: 12px;
                            }
                        }
                    }

                    .options {
                        padding: 15px;

                        .option {
                            text-decoration: none;
                            color: #fff;
                            display: flex;
                            align-items: center;
                            margin-bottom: 12px;

                            .icon {
                                width: 18px;
                                height: auto;
                            }

                            p {
                                font-size: 14px;
                                margin-left: 12px;
                            }

                            &:last-child {
                                margin-bottom: 0px;
                            }
                        }
                    }
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