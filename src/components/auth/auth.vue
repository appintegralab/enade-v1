<template>
    <div class="overlay">
        <q-dialog v-model="dialog" persistent>
            <div class="md:min-w-[600px] lg:min-w-[800px] overflow-hidden rounded bg-white card-shadow">
                <div class="grid grid-cols-2">
                    <div class="col-span-2 sm:col-span-1 px-4 pt-2 pb-8">
                        <div class="text-xs text-center">
                            <versaoVue />
                        </div>
                        <div class="text-center fmontserrat text-black text-xl font-bold">
                            Acesso
                        </div>
                        <div class="mx-4 mt-1 mb-4 border p-2 rounded shadow bg-violet-100">
                            <p class="finter fw-300 text-[9pt] m-0">
                                Digite seu CPF para acessar
                            </p>
                        </div>
                        <div class="mx-4 mb-2">
                            <q-input dense outlined v-model="cpf" label="Digite seu CPF" mask="###.###.###-##" />
                        </div>
                        <div class="flex justify-center mt-6">
                            <button @click="login"
                                class="flex items-center text-base border py-1 px-6 rounded-lg bg-purple-900 hover:bg-purple-800 text-white">
                                <span class="iconify mr-2" data-icon="ic:outline-login" data-inline="false"></span>
                                Acessar
                            </button>
                        </div>
                    </div>
                    <div class="bg-[#48096d] col-span-2 sm:col-span-1 p-4">
                        <div class="mx-8 flex items-center justify-around text-white">
                            <div class="flex flex-col">
                                <div class="flex justify-center">
                                    <Icon icon="emojione-monotone:letter-e" width="46pt" />
                                </div>
                                <div class="flex justify-center mt-1 fmontserrat text-sm font-semibold">
                                    ENADE 2022
                                </div>
                            </div>
                            <div class="w-[140px]">
                                <img :src="animaLogo" />
                            </div>
                        </div>
                        <div class="mt-1 text-center fmontserrat text-white text-xl font-bold">
                            Bem-vindo!
                        </div>
                        <div class="mt-1 mx-2 text-center fmontserrat text-white text-[9pt] font-light">
                            Caso ainda não esteja cadastrado, insira seus dados pessoais
                        </div>
                        <div class="mt-3 flex justify-center" v-if="cpfNotFound">
                            <div
                                class="w-[300px] font-medium text-xs text-white bg-red-500 border border-red-800 rounded mb-1 p-1 text-center">
                                Caso você ainda não tenha realizado o cadastro, clique no botão abaixo.
                            </div>
                        </div>
                        <div class="mt-4 flex justify-center text-white">
                            <button @click="$refs.dialoguserref.show()"
                                class="hover:bg-purple-900 border border-white px-3 text-sm  rounded-lg py-[2px]">
                                Cadastrar dados de acesso
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </q-dialog>
        <dialoguser ref="dialoguserref" />
    </div>
</template>

<script>
import { Icon } from '@iconify/vue'
import snapshot from "@/snapshot/snapshot.js"
import { rdb_auth } from "@/snapshot/firebase/firebase.js"
import { ref, get, onValue, query, orderByChild, equalTo } from "firebase/database"
import notify from '../../utils/notify'
import auth from "./auth.js"
import dialoguser from "./dialog-user.vue"
import versaoVue from "@/utils/versao.vue"

export default {
    components: { Icon, dialoguser, versaoVue },
    data() {
        return {
            dialog: true,
            cpfNotFound: false,
            cpf: "",
            animaLogo: "https://firebasestorage.googleapis.com/v0/b/prj-anim-p-appintegra.appspot.com/o/anima%2Fselo_anima.png?alt=media&token=778118dc-43c1-4234-b190-d25e58f0d587"
        }
    },
    computed: {
        user() {
            return auth.userStore.user
        }
    },
    mounted() {
        let self = this
    },
    methods: {
        show() {
            this.cpf = ""
            this.dialog = true
        },

        async login() {
            let res = await auth.checkLoginCPF(this.cpf)
            //console.log("res", res);
            if (res.error) {
                if (res.cpfNotFound) {
                    this.cpfNotFound = res.cpfNotFound
                } else {
                    this.cpfNotFound = false
                }
            } else {
                //console.log("ok");
            }
        },

        logout() {
            auth.logout()
        },

        showCadastro() {
            this.dialog = false
            this.$emit("onCadastro")
        }
    }
}
</script>
<style>
.overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #290435;
    z-index: 10;
}

.card-shadow {
    font-size: 28px;
    box-shadow: 0px 0px 4px 4px rgba(255, 255, 255, .2) !important;
}
</style>