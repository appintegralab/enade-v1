<template>
  <div>
    <div v-if="closed">
      <div class="m-8 flex justify-center" @click="adminClick">
        <div class="w-[120px]" >
          <img src="@/assets/maintenance.svg" alt="">
        </div>
      </div>
      <div class="text-center fnunito text-[#6c757d] text-xl font-semibold">
        Análises listas ENADE encerrada <!-- em manutenção -->
      </div>
      <div class="mt-2 text-center fnunito text-[#6c757d] text-sm font-light">
        <!-- Estamos atualizando algumas bases de alunos. Voltaremos em 1 ou 2 horas. -->
      </div>
    </div>
    <div v-if="!closed && !isAuth" :key="refresh">
      <auth />
    </div>
    <layout v-if="!closed && isAuth" :key="refresh + 1"></layout>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import auth from "@/components/auth/auth.js"
import { userStore } from "@/components/auth/auth-store"

export default {
  components: {
    auth: defineAsyncComponent(() => import("@/components/auth/auth.vue")),
    layout: defineAsyncComponent(() => import("@/components/front/layout.vue"))
  },
  data() {
    return {
      refresh: 0,
      isAuth: false,
      closed: true,
      userStore: userStore()
    }
  },
  watch: {
    "userStore.user": function () {
      //console.log("this.userStore changed", this.userStore.user);
      if (this.userStore.user != null) {
        this.isAuth = true
      } else {
        this.isAuth = false
      }
      //console.log("isAuth", this.isAuth);
      this.refresh++
    }
  },
  mounted() {
    this.isAuth = auth.isAuth()
    //console.log("isAuth", this.isAuth);
    //console.log("this.userStore.user", this.userStore.user);
  },
  methods: {

    adminClick(e) {
      //console.log("adminClick",e);
      if(e.ctrlKey == true) {
        console.log("ctrl");
        this.closed = false
      }
    }
  }
}
</script>
