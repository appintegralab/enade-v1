<template>
    <div class="m-2 p-2 border rounded">
        Relatórios
        <hr />

        <div class="grid grid-cols-2">
            <div v-for="(item, index) in relatorios" :key="index"
                class="flex items-center justify-between m-2 p-2 border rounded shadow">
                <div class="text-xs mb-1">
                    {{ item.titulo }}
                </div>
                <div>
                    <q-btn :disabled="item.loading" @click="item.action(index)" size="xs"
                        class="flex items-center px-2 py-[1px]">
                        <span class="iconify text-[10pt]" data-icon="ph:download"></span>
                        <span class="ml-1 pt-1">Exportar</span>
                    </q-btn>
                </div>
                <q-linear-progress v-if="item.loading" indeterminate color="teal" class="q-mt-sm" />
            </div>
        </div>
    </div>
</template>

<script>
import XLSX from "xlsx"
import moment from 'moment/min/moment-with-locales'
import 'moment/locale/pt-br.js'
import { rdb, snapToArray } from "@/snapshot/firebase/firebase.js"
import { ref, get, set, orderByChild, equalTo, query } from "firebase/database"

export default {
    data() {
        return {
            relatorios: [
                {
                    titulo: "BASE - SIAF: Planilha (xlsx) contendo as análises.",
                    action: this.exportarSiaf,
                    loading: false,
                },
                {
                    titulo: "BASE - SigaBR: Planilha (xlsx) contendo as análises.",
                    action: this.exportarSigaBR,
                    loading: false,
                },
                {
                    titulo: "BASE - SigaDL: Planilha (xlsx) contendo as análises.",
                    action: this.exportarSigaDL,
                    loading: false,
                }
            ]
        }
    },
    methods: {

        exportar(baseName, basePath,relIndex) {
            let self = this;
            self.relatorios[relIndex].loading = true;

            let queryref = ref(rdb, basePath)
            get(queryref).then((snap) => {
                let base = snap.val() //snapToArray(snap)
                console.log("base", base);
                queryref = ref(rdb, "/enade2022-v2/analises")
                get(queryref).then((snap) => {
                    let analises = snap.val() //snapToArray(snap)
                    console.log("analises", analises);

                    let dados = []
                    for (let kies in base) {
                        let campus = base[kies].campus
                        for (let kcampus in campus) {
                            let cursos = campus[kcampus].cursos
                            for (let kcurso in cursos) {
                                let linhas = cursos[kcurso].linhas
                                for (let key in linhas) {
                                    let lin = linhas[key]
                                    let analiseCoord = ""
                                    let justificativa = ""
                                    let reencaminhamento = ""
                                    let user = ""
                                    let analise = analises[key]
                                    if (analise != undefined) {
                                        analiseCoord = analise.analiseCoord
                                        justificativa = analise.justificativa
                                        reencaminhamento = analise.reencaminhamento
                                        user = analise.user
                                    }
                                    let item = {
                                        base: baseName,
                                        ies: kies,
                                        campus: kcampus,
                                        cursoEmec: kcurso,
                                        curso: cursos[kcurso].curso,
                                        aluno: lin.nome,
                                        ra: lin.ra,
                                        //id: key,
                                        analiseCoord, justificativa, reencaminhamento
                                    }
                                    if (lin.done) {
                                        item.analise = "SIM"
                                    } else {
                                        item.analise = "NÃO"
                                    }
                                    dados.push(item)
                                }
                            }
                        }
                    }
                    console.log("dados", dados);
                    const fileName = "BASE-"+baseName+"-Analises-2022-2-" + moment().format() + ".xlsx";
                    const ws = (XLSX.WorkSheet = XLSX.utils.json_to_sheet(dados));
                    const wb = (XLSX.WorkBook = XLSX.utils.book_new());
                    XLSX.utils.book_append_sheet(wb, ws, "ANÁLISES");
                    XLSX.writeFile(wb, fileName);
                    self.relatorios[relIndex].loading = false;
                })
            })
        },

        exportarSiaf(relIndex) {
            let self = this;
            console.log("exportar");
            //console.log("XLSX",XLSX);

            let basePath = "/enade2022-v2/baseLinhas/siaf"
            let baseName = "SIAF"
            this.exportar(baseName,basePath,relIndex)
        },

        exportarSigaBR(relIndex) {
            let self = this;
            console.log("exportar");
            //console.log("XLSX",XLSX);

            let basePath = "/enade2022-v2/baseLinhas/sigaBR"
            let baseName = "sigaBR"
            this.exportar(baseName,basePath,relIndex)
        },

        exportarSigaDL(relIndex) {
            let self = this;
            console.log("exportar");
            //console.log("XLSX",XLSX);

            let basePath = "/enade2022-v2/baseLinhas/sigaDL"
            let baseName = "sigaDL"
            this.exportar(baseName,basePath,relIndex)
        }
    },
}
</script>
<style lang="">
    
</style>