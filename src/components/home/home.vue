<template>
  <div class="border rounded p-2 ">
    <div class="mx-8 flex items-center justify-center text-white bg-[#48096d]">
      <div class="flex flex-col mr-10">
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
    <div class="mx-8 mt-3 fmontserrat text-[#48096d] text-xl font-bold">
      Análise lista ENADE 2022
    </div>
    <div class="mx-8 mt-3 fmontserrat text-[#48096d] text-sm font-normal">
      Selecione a IES, Campus e Curso para validar os inscritos
    </div>
  </div>
</template>

<script>
import notify from "@/utils/notify.js"
import moment from "@/utils/moment.js"
import auth from "@/components/auth/auth.js"
import snapshot from "@/snapshot/snapshot"
import { rdb, snapToArray } from "@/snapshot/firebase/firebase.js"
import { ref, get, set, orderByChild, equalTo, query } from "firebase/database"
import { Icon } from '@iconify/vue'

export default {
  components: { Icon },
  data() {
    return {
      moment: moment(),
      base: null,
      animaLogo: "https://firebasestorage.googleapis.com/v0/b/prj-anim-p-appintegra.appspot.com/o/anima%2Fselo_anima.png?alt=media&token=778118dc-43c1-4234-b190-d25e58f0d587"
    }
  },
  mounted() {
    let self = this
    //console.log("mounted");

    //    let model = snapshot("baseSM")
    //    model.get("1010095-032548").then((data) => {
    //      console.log("data", data);
    //    })

    //let queryref = query(ref(rdb,"/enade2022/baseSM/values"),orderByChild("ies"),equalTo("USJT"))
    //let queryref = ref(rdb, "/enade2022/baseSM/values")
    //let queryref = ref(rdb, "/enade2022/baseIES")
    //get(queryref).then((snap) => {
    //  this.base = snap.val() //snapToArray(snap)
    //  console.log("this.base", this.base);
    //})

  },
  methods: {

    logout() {
      auth.logout(this)
    },

    createKeys() {
      console.log("this.base", this.base);
      return
      let count = 0
      let keys = {}
      for (let key in this.base) {
        //console.log(key);
        //set(ref(rdb,"/enade2022/baseSM/keys/"+key),key)
        keys[key] = key
        count++
        if (count % 500 == 0) {
          console.log(count);
        }
      }

      console.log("keys[" + Object.keys(keys).length + "]", keys);
      let texto = JSON.stringify(keys, null, 2)
      let blob = new Blob([texto], { type: "text/plain;charset=utf-8" });
      saveAs(blob, "BASE-ENADE-keys.json");
    },

    createNovaEstutura() {
      console.log("this.base", this.base);
      let count = 0
      let ies = {}
      for (let i in this.base) {
        let base = this.base[i].base
        let iesKey = this.base[i].ies
        iesKey = iesKey.replaceAll("/", "-").replaceAll(".", "-")
        if (iesKey == "") {
          iesKey = "sem-codigo"
        }
        let campusKey = this.base[i].campusPolo
        campusKey = campusKey.replaceAll("/", "-").replaceAll(".", "-")
        if (campusKey == "") {
          campusKey = "sem-codigo"
        }
        let codCursoEmec = "" + this.base[i].codCursoEmec
        if (codCursoEmec == "") {
          codCursoEmec = "sem-codigo"
        }
        codCursoEmec = codCursoEmec.replaceAll("/", "-").replaceAll(".", "-")
        let ra = this.base[i].ra
        let nome = this.base[i].nomeAluno
        let curso = this.base[i].curso
        let idLinha = this.base[i].id
        if (ies[iesKey] == undefined) {
          ies[iesKey] = {
            id: iesKey,
            base,
            campus: {}
          }
          ies[iesKey].campus[campusKey] = {
            id: campusKey,
            cursos: {}
          }
          ies[iesKey].campus[campusKey].cursos[codCursoEmec] = {
            id: codCursoEmec,
            curso: curso,
            linhas: {}
          }
          ies[iesKey].campus[campusKey].cursos[codCursoEmec].linhas[idLinha] = {
            id: idLinha,
            ra, nome
          }
        } else {
          if (ies[iesKey].campus[campusKey] == undefined) {
            ies[iesKey].campus[campusKey] = {
              id: campusKey,
              cursos: {}
            }
          }
          if (ies[iesKey].campus[campusKey].cursos[codCursoEmec] == undefined) {
            ies[iesKey].campus[campusKey].cursos[codCursoEmec] = {
              id: codCursoEmec,
              curso: curso,
              linhas: {}
            }
          }
          ies[iesKey].campus[campusKey].cursos[codCursoEmec].linhas[idLinha] = {
            id: idLinha,
            ra, nome
          }
        }
        count++
        if (count % 500 == 0) {
          console.log(count);
        }
      }

      console.log("ies", ies);
      let texto = JSON.stringify(ies, null, 2)
      let blob = new Blob([texto], { type: "text/plain;charset=utf-8" });
      saveAs(blob, "BASE-ENADE-ies.json");
    },

    IESCampusCursos() {
      let base = JSON.parse(JSON.stringify(this.base))
      console.log("base", base);
      let count = 0

      for (let i in base) {
        for (let k in base[i].campus) {
          for (let key in base[i].campus[k].cursos) {
            let linhas = base[i].campus[k].cursos[key].linhas
            let qtde = Object.keys(linhas).length
            delete base[i].campus[k].cursos[key].linhas
            base[i].campus[k].cursos[key].qtdeLinhas = qtde
          }
        }
        count++
        if (count % 5 == 0) {
          console.log(count);
        }
      }

      console.log("base", base);
      let texto = JSON.stringify(base, null, 2)
      let blob = new Blob([texto], { type: "text/plain;charset=utf-8" });
      saveAs(blob, "ENADE-ies.json");
    }
  },
}
</script>
