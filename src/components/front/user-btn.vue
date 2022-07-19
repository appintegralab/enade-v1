<template>
    <span v-if="user != null">
        <q-btn round flat :key="user.id">
            <q-avatar size="26px" :key="refresh">
                <img :src="user.urlFoto+'?'+this.refresh" >
            </q-avatar>
            <q-tooltip :delay="1200">{{ user.nome }}</q-tooltip>
            <q-menu v-model="menuShow">
                <div class="min-w-[260px] p-2">
                    <div class="flex items-center">
                        <div class="mr-2 p-1">
                            <q-avatar size="42px">
                                <img :src="user.urlFoto" :key="refresh + 1">
                            </q-avatar>
                        </div>
                        <div class="flex-1 ellipsis">
                            <div class="finter text-[7pt] fw-500">
                                {{ user.nome }}
                            </div>
                            <div class="mt-[3px] finter text-[6pt] fw-300">
                                {{ user.email }}
                            </div>
                            <div class="border-t my-2"></div>
                            <div v-if="false" @click="menuShow = false; $router.push({path:'/profile/'+user.id})" class="flex items-center p-1 hover:bg-gray-200 cursor-pointer">
                                <div class="h-[20px] fs-12pt">
                                    <span class="iconify" data-icon="la:user-cog" data-inline="false"></span>
                                </div>
                                <div class="text-xs ml-1 flex-1 ellipsis">
                                    Meu perfil
                                </div>
                            </div>
                            <div class="border-t my-1"></div>
                            <div @click="logout"
                                class="flex items-center p-1 hover:bg-gray-200 cursor-pointer">
                                <div class="h-[20px] fs-12pt">
                                    <span class="iconify" data-icon="ic:outline-logout" data-inline="false"></span>
                                </div>
                                <div class="text-xs ml-1 flex-1 ellipsis">
                                    Sair
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </q-menu>
        </q-btn>
    </span>
</template>

<script>
import { userStore } from "@/components/auth/auth-store"
import auth from "@/components/auth/auth.js"

export default {
    data() {
        return {
            menuShow: false,
            refresh: 0,
            userStore: userStore(),
            user: null
        }
    },
    computed: {
    },
    watch: {
        'userStore.user': function (newValue) {
            //console.log("watch store", this.userStore.user);
            this.user = this.userStore.user
            this.refresh++
            this.$forceUpdate();
        }
    },
    mounted() {
        //console.log("userbtn mounted");
        this.user = this.userStore.user
        this.refresh++
        this.$forceUpdate();
    },
    methods: {
        logout() {
            this.menuShow = false; 
            auth.logout()
        }
    },
}
</script>

<style>
</style>