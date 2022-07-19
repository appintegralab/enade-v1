<template>
    <div class="flex-1 flex items-center px-2 -mt-1">
        <div class="px-1">
            <span class="bg-green-600 text-white text-[8pt] px-1 rounded-lg">
                {{ qtdeAnalisados }}
            </span>
        </div>
        <div class="flex-1 -mt-1">
            <div class="text-center leading-3 text-[8pt]">
                {{ (progress * 100).toFixed(1) }}%
            </div>
            <q-linear-progress :value="progress" color="green" class="" />
        </div>
        <div class="px-1">
            <span class="bg-gray-600 text-white text-[8pt] px-1 rounded-lg">
                {{ qtdeTotal }}
            </span>
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
        ies: { default: "noid", type: String },
        campus: { default: "noid", type: String }
    },
    data() {
        return {
            qtdeAnalisados: 0,
            qtdeTotal: 0,
            progress: 0
        }
    },
    watch: {
        campus() {
            this.load()
        },
    },
    mounted() {
        this.load()
    },
    methods: {
        load() {
            let self = this
            let path = "/enade2022-v2/baseLinhas/" + this.base + "/" + this.ies + "/campus/" + this.campus + "/cursos"
            //console.log(path);
            let queryref = ref(rdb, path)
            onValue(queryref, (snap) => {
                self.qtdeAnalisados = 0
                self.qtdeTotal = 0
                self.progress = 0
                let cursos = snap.val()
                //console.log("cursos", cursos);
                for (let i in cursos) {
                    for (let key in cursos[i].linhas) {
                        let linha = cursos[i].linhas[key]
                        self.qtdeTotal++
                        if (linha.done != undefined) {
                            self.qtdeAnalisados++
                        }
                    }
                }
                self.progress = self.qtdeAnalisados / self.qtdeTotal
            })
        }
    },
}
</script>
<style lang="">
    
</style>