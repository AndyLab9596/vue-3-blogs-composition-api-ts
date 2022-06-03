import { defineStore } from 'pinia';

interface IBlogCard {
    blogTitle: string;
    blogCoverPhoto: string;
    blogDate: string;
}

interface StoreState {
    sampleBlogCards: IBlogCard[];
    editPost: boolean;
}

export const useStorePosts = defineStore('storePosts', {
    state: () => {
        return {
            sampleBlogCards: [
                { blogTitle: "Blog Card #1", blogCoverPhoto: "stock-1", blogDate: "May 1, 2021" },
                { blogTitle: "Blog Card #2", blogCoverPhoto: "stock-2", blogDate: "May 1, 2021" },
                { blogTitle: "Blog Card #3", blogCoverPhoto: "stock-3", blogDate: "May 1, 2021" },
                { blogTitle: "Blog Card #4", blogCoverPhoto: "stock-4", blogDate: "May 1, 2021" },
            ],

            editPost: false,
        } as StoreState
    },

    actions: {
        toggleEditPost(payload: boolean) {
            this.editPost = payload
        }
    },

    getters: {},
})