<template>
    <q-layout view="lHh Lpr fff" class="bg-grey-1">
        <topo @toggleLeftDrawer="toggleLeftDrawer" @logout="$emit('logout')" @ctrlInscricoes="onSelect('inscricoes')"
            @ctrlFormacoes="onSelect('formacoes')" />
        <sidemenu ref="sidemenuref" @onSelect="onSelect" />
        <q-page-container class="">
            <router-view></router-view>
            <!--
            <home v-if="container == 'home'" /> 
            <minhasformacoes v-if="container == 'minhas-formacoes'" />
            <inscricoes v-if="container == 'inscricoes'" />
            <formacoes v-if="container == 'formacoes'" />
            -->
        </q-page-container>
    </q-layout>
</template>

<script>
import topo from "./topo.vue"
import sidemenu from "./sidemenu.vue"
//import home from "./home/home.vue"
//import minhasformacoes from "./minhas-formacoes/minhas-formacoes.vue"
//import inscricoes from "./admin/inscricoes.vue"
//import formacoes from "./admin/formacoes/formacoes.vue"

export default {
    components: { topo, sidemenu },
    data() {
        return {
            container: "home"
        }
    },
    mounted() {
        
    },
    methods: {

        toggleLeftDrawer() {
            this.$refs.sidemenuref.toggle()
        },
        onSelect(item) {
            console.log(item);
            this.container = item
        }
    }
}
</script>

<style>
</style>