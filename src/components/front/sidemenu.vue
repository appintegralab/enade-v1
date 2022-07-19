<template>
    <q-drawer :breakpoint="800" v-model="leftDrawerOpen" bordered :width="180">
        <q-scroll-area class="fit">

            <div @click="$router.push({ path: '/' })"
                class="flex items-center h-[26px] mr-2 p-2 hover:bg-gray-200 cursor-pointer">
                <div class="text-[14pt] text-slate-900">
                    <span class="iconify" data-icon="mdi:home"></span>
                </div>
                <div class="ml-1 text-[9pt] pt-1 text-slate-900 froboto fw-400">
                    Home
                </div>
            </div>
            <div class="border-t mt-1 mx-2"></div>

            <div class="mt-2 mx-2 font-medium text-xs">
                <!-- <img class="w-[130px]" src="../assets/salamais-rect.png"> -->
                BASES
            </div>

            <q-tree :nodes="items" dense node-key="label" class="-mb-1">
                <template v-slot:default-header="prop">
                    <div class="truncate w-[144px] h-[20px] my-0 leading-3">
                        <q-avatar class="" size="18px" :text-color="prop.node.fontColor"
                            :style="'height: 18px; width: 18px; background-color: ' + prop.node.cor">
                            <Icon class="text-[12pt]" :icon="prop.node.icon" />
                        </q-avatar>
                        <span @click="clickLink(prop.node)" class="ml-1 fw-500 fraleway text-[9pt] cursor-pointer">
                            {{ prop.node.label }}
                        </span>
                    </div>
                </template>
            </q-tree>

            <div v-for="(elem, index) in ies" :key="index">
                <div @click="$router.push({ path: '/ies/' + elem.id })"
                    class="flex items-center h-[26px] mr-2 p-2 hover:bg-gray-200 cursor-pointer">
                    <div class="ml-1 text-[10pt] text-slate-900">
                        <span class="iconify" data-icon="emojione-monotone:school"></span>
                    </div>
                    <div class="ml-1 text-[9pt] pt-1 text-slate-900 froboto fw-400">
                        {{ elem.id }}
                    </div>
                </div>
            </div>
        </q-scroll-area>
    </q-drawer>
</template>

<script>
import { rdb, snapToArray } from "@/snapshot/firebase/firebase.js"
import { ref, onValue, set, get } from "firebase/database"
import { userStore } from "@/components/auth/auth-store"
import { Icon } from "@iconify/vue"

export default {
    components: { Icon },
    data() {
        return {
            leftDrawerOpen: true,
            userStore: userStore(),
            facilitador: false,
            storage: "",
            ies: {},
            items: [
                {
                    label: "SIAF",
                    icon: "mdi:database",
                    cor: "white",
                    fontColor: "black",
                    children: [],
                },
                {
                    label: "SigaBR",
                    icon: "mdi:database",
                    cor: "white",
                    fontColor: "black",
                    children: [],
                },
                {
                    label: "SigaDL",
                    icon: "mdi:database",
                    cor: "white",
                    fontColor: "black",
                    children: [],
                }
            ]
        }
    },
    watch: {
        'userStore.user': function (newValue) {
            //console.log("watch store", this.userStore.user);
            let self = this
        }
    },
    mounted() {
        let self = this
        get(ref(rdb, "/enade2022-v2/baseRaw")).then((snap) => {
            let data = snap.val()
            //console.log("data", data);
            for(let key in data.siaf) {
                let elem = data.siaf[key]
                //console.log(elem);
                self.items[0].children.push({
                    label: elem.id,
                    icon: "mdi:office-building-outline",
                    cor: "white",
                    fontColor: "black",
                    base: "siaf"
                })
            }
            for(let key in data.sigaBR) {
                let elem = data.sigaBR[key]
                //console.log(elem);
                self.items[1].children.push({
                    label: elem.id,
                    icon: "mdi:office-building-outline",
                    cor: "white",
                    fontColor: "black",
                    base: "sigaBR"
                })
            }
            for(let key in data.sigaDL) {
                let elem = data.sigaDL[key]
                //console.log(elem);
                self.items[2].children.push({
                    label: elem.id,
                    icon: "mdi:office-building-outline",
                    cor: "white",
                    fontColor: "black",
                    base: "sigaDL"
                })
            }
        })
    },
    methods: {
        toggle() {
            this.leftDrawerOpen = !this.leftDrawerOpen
        },

        clickLink(elem) {
            console.log(elem);
            if(elem.base == undefined) {
                return
            }
            this.$router.push({ path: '/ies/' + elem.base + "/" + elem.label })
        }
    }
}
</script>

<style>
</style>