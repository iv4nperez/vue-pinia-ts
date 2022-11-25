<template>
    <Layout>
       <div class="w-full">
            <span class="text-blue-900 text-xl">Welcome </span> <span class="text-xl">{{ username }}</span>
            <h2>Botones</h2>
            <div class="flex gap-5">
                <u-btn variant="primary" @click="showNotification=true">
                    Continuar
                </u-btn>
                <u-btn variant="text"     @click="showNotification=true">
                    Cancelar
                </u-btn>
                <u-btn variant="warning" @click="someActions">
                    Confirmar
                </u-btn>
                <u-btn variant="danger" @click="showNotification=true">
                    Confirmar
                </u-btn>
            </div>

            <u-notification
                position-x="right"
                position-y="bottom"
                :title="`Pause mobile <span style='color:red'>notifications</span> while you're using this device`"
                :content="`To pause Chat mobile notifications while you’re active on this <b>device</b>, allow your browser to detect if you’re active or away. Click `"
                v-model="showNotification"
            >
            </u-notification>

            <VTextField v-model="value" label="nombre"></VTextField>
            <VBtn>button</VBtn>
            <VAlert text="sksksksmkm"  ></VAlert>
       </div>
    </Layout>
</template>

<script setup lang="ts">

    import { ref } from "vue";
    import Layout from '@/layout/LayoutDefautl.vue'
    import { UBtn, UNotification } from '@/components/core'
    import { useDashboard } from "../composables/useDashboard";

    const value = ref('smklsm')
    // import { useDashboardStore } from '../store'
    // import { storeToRefs } from "pinia";

    // const dashboardStore = useDashboardStore();
    // // you can only unstructure actions or methods
    // const { someActions } = useDashboardStore();
    // //to unstructure variables it is necessary to use storeToRefs and pass the store for keep reference
    // const { username } = storeToRefs(dashboardStore)
    const { username, someActions } = useDashboard()
    const showNotification = ref(false)
</script>