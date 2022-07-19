<template>
    <div v-if="aluno != null">
        <div class="p-1 border rounded my-1 cursor-pointer" @click="$emit('select', aluno.id)">
            <div class="flex items-center">
                <div class="mr-2">
                    <div v-if="aluno.done == undefined">
                        <span class="iconify text-base text-red-400" data-icon="fa:question-circle"
                            data-inline="false"></span>
                    </div>
                    <div v-if="aluno.done != undefined">
                        <span class="iconify text-lg text-green" data-icon="ic:twotone-check-circle"
                            data-inline="false"></span>
                    </div>
                </div>
                <div>
                    <div class="flex items-center">
                        <div class="text-[8pt]">
                            RA:
                        </div>
                        <div class="ml-1 text-[8pt] font-bold">
                            {{ aluno.ra }}
                        </div>
                    </div>
                    <div class="text-[9pt] font-normal leading-3">
                        {{ aluno.nome }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import snapshot from "@/snapshot/snapshot"
import { rdb, snapToArray } from "@/snapshot/firebase/firebase.js"
import { ref, get, set, onValue } from "firebase/database"

export default {
    props: {
        base: { default: "noid", type: String },
        alunoID: { default: "noid", type: String },
        ies: { default: "noid", type: String },
        campus: { default: "noid", type: String },
        curso: { default: "noid", type: String },
    },
    data() {
        return {
            aluno: null
        }
    },
    watch: {
        alunoID() {
            this.load()
        },
    },
    mounted() {
        this.load()
    },
    methods: {
        load() {
            let path = "/enade2022-v2/baseLinhas/" + this.base + "/" + this.ies + "/campus/" + this.campus + "/cursos/" + this.curso + "/linhas/" + this.alunoID
            //console.log(path);
            let queryref = ref(rdb, path)
            onValue(queryref, (snap) => {
                this.aluno = snap.val()
                //console.log("this.aluno", this.aluno);
            })
        }
    },
}
</script>
<style lang="">
    
</style>