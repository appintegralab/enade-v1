<template>
    <span v-if="enabled" :key="refresh">
        <q-btn round flat>
            <q-avatar size="26px">
                <span class="iconify text-[16pt]" data-icon="ic:twotone-settings" data-inline="false"></span>
            </q-avatar>
            <q-tooltip :delay="1200">Administração do Sala Mais</q-tooltip>
            <q-menu v-model="menuShow">
                <div class="min-w-[260px] p-2">
                    <div class="flex items-center">
                        <div class="mr-2 p-1">
                            <q-avatar size="34px" class="bg-gray-200">
                                <img class="" src="@/assets/favicon2.svg">
                            </q-avatar>
                        </div>
                        <div class="flex-1 ellipsis">
                            <div class="finter text-[8pt] fw-700">
                                Administração do ENADE
                            </div>
                            <div class="border-t my-2"></div>
                            <div @click="menuShow=false; $router.push({path:'/admin-relatorios'})" class="flex items-center p-1 hover:bg-gray-200 cursor-pointer">
                                <div class="h-[20px] fs-12pt">
                                    <span class="iconify" data-icon="clarity:export-outline-badged" data-inline="false"></span>
                                </div>
                                <div class="text-xs ml-1 flex-1 ellipsis">
                                    Relatórios
                                </div>
                            </div>
                            <div class="border-t my-1"></div>
                            <div @click="menuShow=false; $router.push({path:'/admin/users'})" class="flex items-center p-1 hover:bg-gray-200 cursor-pointer">
                                <div class="h-[20px] fs-12pt">
                                    <span class="iconify" data-icon="ic:people" data-inline="false"></span>
                                </div>
                                <div class="text-xs ml-1 flex-1 ellipsis">
                                    Usuários
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

export default {
    data() {
        return {
            menuShow: false,
            userStore: userStore(),
            enabled: false,
            refresh: 0,
        }
    },
    computed: {
        user() {
            return this.userStore.user
        }
    },
    watch: {
        'userStore.user': function (newValue) {
            //console.log("watch store", this.userStore.user);
            this.checkEnabled()
            this.$forceUpdate();
        }
    },
    mounted() {
        //console.log("userbtn mounted");
        this.checkEnabled()
    },
    methods: {
        checkEnabled() {
            //console.log("this.userStore.user",this.userStore.user);
            if(this.userStore.user == null) {
                this.enabled = false
                return
            }
            let cpf = this.userStore.user.cpf
            //console.log(cpf);
            let lista = [ "18374109840", "06013877408", "35086243823" ]
            if(lista.lastIndexOf(cpf) != -1) {
                this.enabled = true
            } else {
                this.enabled = false
            }
            //console.log("this.enabled",this.enabled);
            this.refresh++
            this.$forceUpdate();
        }
    }
}
</script>

<style>
</style>