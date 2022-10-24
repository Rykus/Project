import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    // arrow function recommended for full type inference
    state: () => {
        return {

            isAuth: false,
            id: undefined
        }
    },
    actions: {
        login() {
            this.id = id;
            this.isAuth = true;
        },

        logout(){
            this.id = "";
            this.isAuth = false;
        }
    }
})