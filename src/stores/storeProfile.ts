import { defineStore } from "pinia";
import firebase from 'firebase/app';
import 'firebase/auth';
import db from '../../firebase/firebaseinit';

interface StoreProfileState {
    user: boolean,
    profileEmail: string | null;
    profileFirstName: string | null;
    profileLastName: string | null;
    profileUsername: string | null;
    profileId: string | null;
    profileInitials: string | null;
}

export const useStoreProfile = defineStore('storeProfile', {
    state: () => {
        return {
            user: false,
            profileEmail: null,
            profileFirstName: null,
            profileLastName: null,
            profileUsername: null,
            profileId: null,
            profileInitials: null

        } as StoreProfileState
    },

    actions: {
        async getCurrentUser() {
            const dataBase = await db.collection('users').doc(firebase.auth()?.currentUser?.uid);
            const dbResults = await dataBase.get();
            this.profileId = dbResults.id;
            this.profileEmail = dbResults.data()?.email;
            this.profileFirstName = dbResults.data()?.firstName;
            this.profileLastName = dbResults.data()?.lastName;
            this.profileUsername = dbResults.data()?.username;
            this.profileInitials = dbResults.data()?.firstName.match(/(\b\S)?/g).join("") + dbResults.data()?.lastName.match(/(\b\S)?/g).join("");
        },

        async updateUser(payload: boolean) {
            this.user = payload;
        },

        changeFirstName(payload: string) {
            this.profileFirstName = payload;
        },

        changeLastName(payload: string) {
            this.profileLastName = payload;
        },

        changeUsername(payload: string) {
            this.profileUsername = payload;
        },

        changeEmail(payload: string) {
            this.profileEmail = payload;
        },

        async updateUserSettings() {
            const dataBase = await db.collection('users').doc(this.profileId as string);
            await dataBase.update({
                firstName: this.profileFirstName,
                lastName: this.profileLastName,
                username: this.profileUsername,
            })
            const dbResults = await dataBase.get();
            this.profileInitials = dbResults.data()?.firstName.match(/(\b\S)?/g).join("") + dbResults.data()?.lastName.match(/(\b\S)?/g).join("");

        }

    },

    getters: {},
})