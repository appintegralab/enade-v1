<template>
    <div class="flex-1 flex items-center px-2 -mt-1">
        <div class="px-1">
            <span class="bg-green-600 text-white text-[8pt] px-1 rounded-lg">
                {{qtdeAnalisados}}
            </span>
        </div>
        <div class="flex-1 -mt-1">
            <div class="text-center leading-3 text-[8pt]">
                {{(progress*100).toFixed(1)}}%
            </div>
            <q-linear-progress :value="progress" color="green" class="" />
        </div>
        <div class="px-1">
            <span class="bg-gray-600 text-white text-[8pt] px-1 rounded-lg">
                {{qtdeTotal}}
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
        campus: { default: "noid", type: String },
        curso: { default: "noid", type: String },
    },
    data() {
        return {
            qtdeAnalisados: 0,
            qtdeTotal: 0,
            progress: 0
        }
    },
    watch: {
        curso() {
            this.load()
        },
    },
    mounted() {
        this.load()
    },
    methods: {
        load() {
            let self = this
            let path = "/enade2022-v2/baseLinhas/" + this.base + "/" + this.ies + "/campus/" + this.campus + "/cursos/" + this.curso + "/linhas"
            //console.log(path);
            let queryref = ref(rdb, path)
            onValue(queryref, (snap) => {
                self.qtdeAnalisados = 0
                self.qtdeTotal = 0
                self.progress = 0
                let linhas = snap.val()
                //console.log("linhas", linhas);
                for(let key in linhas) {
                    self.qtdeTotal++
                    if(linhas[key].done != undefined) {
                        self.qtdeAnalisados++
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