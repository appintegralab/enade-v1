<template>
    <q-header elevated class="bg-white text-grey-8" height-hint="64">
        <q-toolbar class="" style="height: 64px">
            <q-btn @click="$emit('toggleLeftDrawer')" flat dense round aria-label="Menu" icon="menu" />

            <div class="ml-4">
                <versaoVue />
            </div>
            <q-space />

            <div class="q-gutter-sm row items-center no-wrap">
                <adminbtn />
                <q-btn round dense flat color="blue-grey-8" icon="notifications">
                    <q-badge v-if="false" color="red" text-color="white" floating>
                        2
                    </q-badge>
                    <q-tooltip>Notifications</q-tooltip>
                </q-btn>
                <userbtn @logout="$emit('logout')" />
            </div>
        </q-toolbar>
    </q-header>
</template>

<script>
import userbtn from "./user-btn.vue"
import adminbtn from "./admin-btn.vue"
import versaoVue from "@/utils/versao.vue"

export default {
    components: { userbtn, adminbtn, versaoVue },
    data() {
        return {
            search: ""
        }
    },
    mounted() {
        //console.log("mounted");
    }
}
</script>

<style>
</style>