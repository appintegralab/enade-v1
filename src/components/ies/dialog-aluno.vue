<template>
    <q-dialog v-model="dialog">
        <q-card class="min-w-[800px]">
            <q-toolbar class="h-[20px]">
                <q-avatar size="28px" class="bg-slate-300">
                    <span class="iconify text-lg" data-icon="ic:person"></span>
                </q-avatar>
                <q-toolbar-title>
                    <span class="text-base">
                        Avaliação (Parecer) do enadista
                    </span>
                </q-toolbar-title>
                <q-btn flat round dense icon="close" v-close-popup />
            </q-toolbar>
            <div class="border rounded shadow p-2 m-1 mx-3" v-if="aluno != null">
                <div>
                    <div class="border rounded p-2">
                        <div class="text-xs -mt-1 -ml-1 font-bold">
                            Coordenador do curso
                        </div>
                        <hr class="mb-2">
                        <div>
                            <div class="flex items-center my-[2px]">
                                <div class="text-xs font-medium">
                                    Nome:
                                </div>
                                <div class="flex-1 border rounded px-1 mx-2 text-sm font-medium">
                                    {{ aluno.nomeCoord }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="border rounded p-2">
                        <div class="text-xs -mt-1 -ml-1 font-bold">
                            Dados IES
                            <span class="ml-4 text-xs font-light">BASE:</span>
                            <span class="ml-1 text-xs font-bold">{{ aluno.base }}</span>
                        </div>
                        <hr class="mb-2">
                        <div v-for="(item, index) in fieldsIES" :key="index">
                            <div class="flex items-center my-[4px]">
                                <div class="text-xs font-medium">
                                    {{ item.caption }}:
                                </div>
                                <div class="flex-1 border border-gray-400 rounded px-1 mx-2 text-sm font-medium">
                                    {{ aluno[item.field] }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="border rounded p-2 mt-2">
                        <div class="text-xs -mt-1 -ml-1 font-bold">
                            Dados do enadista
                        </div>
                        <hr class="mb-2">
                        <div v-for="(item, index) in fields" :key="index">
                            <div class="flex items-center my-[4px]">
                                <div class="text-xs font-medium">
                                    {{ item.caption }}:
                                </div>
                                <div class="flex-1 border border-gray-400 rounded px-1 mx-2 text-sm font-medium">
                                    {{ aluno[item.field] }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="border rounded p-2 mt-2">
                        <div class="text-xs -mt-1 -ml-1 font-bold">
                            Histórico
                            <span class="ml-4 text-xs font-light">BASE:</span>
                            <span class="ml-1 text-xs font-bold">{{ aluno.base }}</span>
                        </div>
                        <hr class="mb-2">
                        <div v-for="(item, index) in fieldsHist" :key="index">
                            <div class="flex items-center my-[4px]">
                                <div class="text-xs font-medium">
                                    {{ item.caption }}:
                                </div>
                                <div class="flex-1 border border-gray-400 rounded px-1 mx-2 text-sm font-medium">
                                    {{ aluno[item.field] }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr class="my-2">

                    <div class="border rounded p-2 mt-2">
                        <div class="text-xs -mt-1 -ml-1 font-bold">
                            PARECER
                        </div>
                        <hr class="mb-2">
                        <div>
                            Análise do coordenador
                        </div>
                        <div>
                            <q-radio v-model="analiseCoord" val="CONCORDO" label="CONCORDO" />
                            <q-radio v-model="analiseCoord" val="DISCORDO" label="DISCORDO" />
                        </div>
                        <div v-if="analiseCoord == 'DISCORDO'">
                            <div>
                                EM CASO DE DISCORDÂNCIA, QUAL O REENCAMINHAMENTO?
                            </div>
                            <q-radio v-model="reencaminhamento" val="DEVE SER INSCRITO" label="DEVE SER INSCRITO" />
                            <q-radio v-model="reencaminhamento" val="NÃO DEVE SER INSCRITO"
                                label="NÃO DEVE SER INSCRITO" />
                            <q-radio v-model="reencaminhamento" val="SERÁ ENCAMINHADO PARA COLAÇÃO DE GRAU"
                                label="SERÁ ENCAMINHADO PARA COLAÇÃO DE GRAU" />
                        </div>
                        <div v-if="analiseCoord == 'DISCORDO'">
                            JUSTIFICATIVA DE REENCAMINHAMENTO (CASO NECESSÁRIO)
                        </div>
                        <div v-if="analiseCoord == 'DISCORDO'">
                            <q-input v-model="justificativa" outlined type="textarea" />
                        </div>
                    </div>
                    <hr class="my-2">
                    <div class="mb-2 flex justify-center">
                        <q-btn color="grey" size="md" class="mr-2" @click="dialog = false">
                            <span class="ml-1">Fechar</span>
                        </q-btn>
                        <q-btn color="red" size="md" class="mr-2">
                            <span class="iconify" data-icon="mdi:remove" data-inline="false"></span>
                            <span class="ml-1">Excluir parecer</span>
                            <q-menu v-model="removeDialog">
                                <div class="rounded w-[240px]">
                                    <div class="flex p-1 bg-red-800 text-white">
                                        <div class="text-[10pt] px-1">
                                            <span class="iconify" data-icon="mdi:warning"></span>
                                        </div>
                                        <div class="text-[8pt] fw-700">Deseja realmente excluir o parecer?</div>
                                    </div>
                                    <div class="flex justify-around p-2">
                                        <q-btn @click="removeDialog = false" size="xs">cancelar
                                        </q-btn>
                                        <q-btn @click="excluir" class="bg-red-800 text-red-800" size="xs">
                                            sim</q-btn>
                                    </div>
                                </div>
                            </q-menu>
                        </q-btn>
                        <q-btn color="green" size="md" @click="salvar">
                            <span class="iconify" data-icon="mdi:content-save" data-inline="false"></span>
                            <span class="ml-1">Salvar parecer</span>
                        </q-btn>
                    </div>
                </div>
            </div>
        </q-card>
    </q-dialog>
</template>

<script>
import snapshot from "@/snapshot/snapshot"
import { rdb, snapToArray } from "@/snapshot/firebase/firebase.js"
import { ref, get, set, orderByChild, equalTo, query } from "firebase/database"
import depara from "./de-para.js"
import notify from "@/utils/notify.js"
import { userStore } from "@/components/auth/auth-store"

export default {
    components: {},
    props: {},
    data() {
        return {
            dialog: false,
            removeDialog: false,
            aluno: null,
            analiseCoord: "",
            reencaminhamento: "",
            justificativa: "",
            base: "noid",
            ies: "noid",
            campus: "noid",
            curso: "noid",
            userStore: userStore(),
            fields: [
                { caption: "RA", field: "ra" },
                { caption: "Nome", field: "nomeAluno" },
                { caption: "CPF", field: "cpf" },
                { caption: "Email", field: 'e-mail' },
                { caption: "Telefone", field: 'telefone' },
            ],
            fieldsIES: [
                { caption: "IES", field: "ies" },
                { caption: "Cod. IES EMEC", field: "codIesEmec" },
                { caption: "Campus", field: "campusPolo" },
                { caption: "Curso", field: 'curso' },
                { caption: "Cod. Curso EMEC", field: 'codCursoEmec' },
                { caption: "Grau", field: 'grau' },
                { caption: "Modalidade", field: 'modalidade' },
                { caption: "Turno", field: 'turno' },
                { caption: "Status", field: 'statusMatricula' },
            ],
            fieldsHist: []
        }
    },
    methods: {


        show(alunoID, base, ies, campus, curso) {
            let self = this
            this.dialog = true
            this.analiseCoord = ""
            this.reencaminhamento = ""
            this.justificativa = ""
            this.base = base
            this.ies = ies,
                this.campus = campus,
                this.curso = curso
            console.log("parametros", { alunoID, base, ies, campus, curso });
            let path = `/enade2022-v2/bases/${base}/${ies}/${campus}/${curso}/linhas/${alunoID}`
            console.log(path);
            let queryref = ref(rdb, path)
            get(queryref).then((snap) => {
                self.aluno = snap.val()
                console.log("self.aluno", self.aluno);

                let base = self.aluno.base
                let campos = depara[base]
                console.log("campos", campos);
                self.fieldsHist = []
                for (let key in campos) {
                    self.fieldsHist.push({
                        caption: key,
                        field: campos[key]
                    })
                }
                let codEmec = "" + self.aluno.codCursoEmec
                if (codEmec.trim() == '') {
                    self.aluno.codCursoEmec = curso
                }
                let { ies, campusPolo, codCursoEmec, id } = self.aluno
                console.log({ ies, campusPolo, codCursoEmec, id });
                //let path = `/enade2022/baseIES/${ies}/campus/${campusPolo}/cursos/${codCursoEmec}/linhas/${id}`
                let path = `/enade2022-v2/analises/${id}`
                get(ref(rdb, path)).then((snap) => {
                    let parecer = snap.val()
                    console.log("parecer", parecer);
                    if (parecer) {
                        if (parecer.analiseCoord != undefined) {
                            self.analiseCoord = parecer.analiseCoord
                        }
                        if (parecer.reencaminhamento != undefined) {
                            self.reencaminhamento = parecer.reencaminhamento
                        }
                        if (parecer.justificativa != undefined) {
                            self.justificativa = parecer.justificativa
                        }
                    }
                })
            })
        },

        salvar() {
            console.log("salvar", this.aluno);
            let { base, ies, campusPolo, codCursoEmec, id } = this.aluno
            console.log({ base, ies, campusPolo, codCursoEmec, id });
            let path = `/enade2022-v2/baseLinhas/${this.base}/${this.ies}/campus/${this.campus}/cursos/${this.curso}/linhas/${id}`
            console.log(path);
            if (this.analiseCoord == "") {
                notify.error("PARECER obrigatório!")
                return
            }
            if (this.analiseCoord == "DISCORDO") {
                if (this.reencaminhamento == "") {
                    notify.error("REENCAMINHAMENTO obrigatório!")
                    return
                }
            }

            console.log(path + "/done", true);
            let path2 = "/enade2022-v2/analises/" + id
            console.log(path2, {
                analiseCoord: this.analiseCoord,
                reencaminhamento: this.reencaminhamento,
                justificativa: this.justificativa,
                user: this.userStore.user.id
            });

            set(ref(rdb, path + "/done"), true);
            set(ref(rdb, path2), {
                analiseCoord: this.analiseCoord,
                reencaminhamento: this.reencaminhamento,
                justificativa: this.justificativa,
                user: this.userStore.user.id
            });

            notify.success("Parecer salvo com sucesso!")
            this.dialog = false
        },

        excluir() {
            console.log("excluir");
            this.removeDialog = false
            let { ies, campusPolo, codCursoEmec, id } = this.aluno
            console.log({ ies, campusPolo, codCursoEmec, id });
            //let path = `/enade2022/baseIES/${ies}/campus/${campusPolo}/cursos/${codCursoEmec}/linhas/${id}`
            let path = `/enade2022-v2/baseLinhas/${this.base}/${this.ies}/campus/${this.campus}/cursos/${this.curso}/linhas/${id}`
            console.log(path+"/done",null);
            let path2 = "/enade2022-v2/analises/" + id
            console.log(path2, null)

            set(ref(rdb, path + "/done"), null);
            set(ref(rdb, path2), null);

            notify.success("Parecer excluido com sucesso!")
            this.dialog = false
        }
    }
}
</script>
<style lang="">
    
</style>