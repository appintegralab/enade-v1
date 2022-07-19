<template>
    <div>
        <div class="bg-gray-200 p-2 flex items-center">
            <div class="text-xs">
                <span class="font-semibold">BASE: </span>
                <span class="mr-2 font-semibold bg-gray-500 px-1 py-[1px] rounded text-white">{{baseKey}}</span>
                INSTITUIÇÃO DE ENSINO:
            </div>
            <div class="ml-2 text-base">
                {{ iesKey }}
            </div>
        </div>
        <div class="grid grid-cols-3 mt-1 p-2">
            <div class="border rounded mx-1">
                <div class="border rounded p-1 bg-slate-300">
                    Campus
                </div>
                <div class="overflow-y-scroll h-[600px]">
                    <div v-for="(elem, index) in campus" :key="index">
                        <div v-if="elem.id == campusSel" class="p-1 border rounded bg-gray-200 cursor-pointer">
                            <div class="flex items-center">
                                <div class="flex-1 text-xs truncate">
                                    {{ elem.id }}
                                </div>
                                <div class="flex-1 max-w-[130px]">
                                    <campusStats :base="baseKey" :ies="iesKey" :campus="elem.id" />
                                </div>
                            </div>
                        </div>
                        <div @click="selectCampus(elem.id)" v-if="elem.id != campusSel"
                            class="p-1 border rounded cursor-pointer">
                            <div class="flex items-center">
                                <div class="flex-1 text-xs truncate">
                                    {{ elem.id }}
                                </div>
                                <div class="flex-1 max-w-[130px]">
                                    <campusStats :base="baseKey" :ies="iesKey" :campus="elem.id" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border rounded mx-1" v-if="campus[campusSel]">
                <div class="border rounded p-1 bg-slate-300">
                    Curso
                </div>
                <div class="overflow-y-scroll h-[600px]">
                    <div class="mb-1" v-for="(elem, index) in campus[campusSel].cursos" :key="index">
                        <div v-if="elem.id == cursoSel" class="p-1 border rounded bg-gray-200 cursor-pointer">
                            <div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center">
                                        <div class="text-[7pt] font-light">
                                            Cod. EMEC:
                                        </div>
                                        <div class="ml-2 text-[8pt] font-medium">
                                            {{ elem.id }}
                                        </div>
                                    </div>
                                    <div class="flex-1 max-w-[120px]">
                                        <cursoStats :base="baseKey" :ies="iesKey" :campus="campusSel" :curso="elem.id" />
                                    </div>
                                </div>
                            </div>
                            <div class="text-xs font-light mt-[1pt]">
                                {{ elem.curso }}
                            </div>
                        </div>
                        <div @click="selectCurso(elem.id)" v-if="elem.id != cursoSel"
                            class="p-1 border rounded cursor-pointer">
                            <div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center">
                                        <div class="text-[7pt] font-light">
                                            Cod. EMEC:
                                        </div>
                                        <div class="ml-2 text-[8pt] font-medium">
                                            {{ elem.id }}
                                        </div>
                                    </div>
                                    <div class="flex-1 max-w-[120px]">
                                        <cursoStats :base="baseKey" :ies="iesKey" :campus="campusSel" :curso="elem.id" />
                                    </div>
                                </div>
                            </div>
                            <div class="text-xs font-light mt-[1pt]">
                                {{ elem.curso }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <alunos :base="baseKey" :ies="iesKey" :campus="campusSel" :curso="cursoSel" />
        </div>
    </div>
</template>

<script>
import snapshot from "@/snapshot/snapshot"
import { rdb, snapToArray } from "@/snapshot/firebase/firebase.js"
import { ref, get, set, orderByChild, equalTo, query } from "firebase/database"
import alunos from "./alunos.vue"
import cursoStats from "./curso-stats.vue"
import campusStats from "./campus-stats.vue"

export default {
    components: { alunos, cursoStats, campusStats },
    data() {
        return {
            iesKey: "",
            baseKey: "",
            baseRaw: {},
            ies: {},
            campus: {},
            campusSel: "",
            cursos: {},
            cursoSel: ""
        }
    },
    watch: {
        '$route.params': function (newValue) {
            this.load()
        }
    },
    mounted() {
        let self = this
        let queryref = ref(rdb, "/enade2022-v2/baseRaw/")
        get(queryref).then((snap) => {
            this.baseRaw = snap.val() //snapToArray(snap)
            //console.log("this.ies", this.ies);
            self.load()
        })
    },
    methods: {
        load() {
            let self = this

            let baseKey = this.$route.params.base
            if(baseKey == undefined) { return }
            self.baseKey = baseKey
            console.log("baseKey", baseKey);

            let iesKey = this.$route.params.id
            if(iesKey == undefined) { return }
            self.iesKey = iesKey
            //console.log("iesKey", iesKey);
            self.ies = self.baseRaw[baseKey]
            self.campus = self.ies[iesKey].campus
            //console.log("self.campus", self.campus);
            self.campusSel = Object.keys(self.campus)[0]
            //console.log("self.campusSel", self.campusSel);
        },

        selectCampus(id) {
            this.campusSel = id
            this.cursoSel = Object.keys(this.campus[id].cursos)[0]
        },

        selectCurso(id) {
            this.cursoSel = id
        }
    },
}
</script>
<style lang="">
    
</style>