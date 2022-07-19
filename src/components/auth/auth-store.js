import { defineStore } from 'pinia'
import snapshot from "@/snapshot/snapshot.js"
import { rdb_auth } from "@/snapshot/firebase/firebase.js"
import { ref, get, onValue, query, orderByChild, equalTo } from "firebase/database"

export const userStore = defineStore('userStore', {

  state: () => ({
    user: null,
    isAuth: false,
  }),
  actions: {
    setUserID(userID) {
      let self = this
      let useRef = ref(rdb_auth, "/users_bases/geral/users/"+userID)
      onValue(useRef,(snap) => {
        let user = snap.val()
        //console.log("user",user);
        if(user) {
          self.user = user
        } else {
          self.user = null
        }
        //console.log("user",self.user);
      })
    },

    setAuth(value) {
      this.isAuth = value
    }
  },
})