<template>
    <div class="border rounded mx-1">
        <div class="border rounded p-1 bg-slate-300">
            Enadistas
            <span class="text-xs font-thin ml-1">(clique no aluno para validar)</span>
        </div>
        <div class="overflow-y-scroll h-[600px]" v-if="alunos">
            <div v-for="(elem, index) in alunos" :key="index">
                <alunoItem @select="selectAluno" :key="elem.id" :base="base" :alunoID="elem.id" :ies="ies" :campus="campus" :curso="curso"/>
            </div>
        </div>
        <dialogAluno ref="dialogAlunoRef" />
    </div>
</template>

<script>
import snapshot from "@/snapshot/snapshot"
import { rdb, snapToArray } from "@/snapshot/firebase/firebase.js"
import { ref, get, set, orderByChild, equalTo, query } from "firebase/database"
import alunoItem from "./aluno-item.vue"
import dialogAluno from "./dialog-aluno.vue"

export default {
    components: { alunoItem, dialogAluno },
    props: {
        base: { default: "noid", type: String },
        ies: { default: "noid", type: String },
        campus: { default: "noid", type: String },
        curso: { default: "noid", type: String },
    },
    data() {
        return {
            alunos: {}
        }
    },
    watch: {
        ies() {
            this.load()
        },
        campus() {
            this.load()
        },
        curso() {
            this.load()
        },
    },
    mounted() {
        let self = this
        this.load()
    },
    methods: {
        load() {
            let self = this
            let queryref = ref(rdb, "/enade2022-v2/baseLinhas/" + this.base + "/" + this.ies + "/campus/" + this.campus + "/cursos/" + this.curso + "/linhas")
            get(queryref).then((snap) => {
                this.alunos = snap.val()
                console.log("this.alunos", this.alunos);
            })
        },

        selectAluno(id) {
            //console.log("selectAluno",id);
            this.$refs.dialogAlunoRef.show(id,this.base,this.ies,this.campus,this.curso)
        }
    },
}
</script>
<style lang="">
    
</style>