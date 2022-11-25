<template>
    <div class="flex">
        <u-drawer></u-drawer>
        <div class="w-full">
            <header 
                :class="[
                    { 'pl-6': !drawer }
                ]"
                class="h-16 shadow-md flex items-center px-4">
                <div class="flex w-full justify-between">
                    <div>Appbar</div>
                    <div>
                        <div class="px-4 py-1 rounded-md cursor-pointer hover:bg-slate-200 select-none relative">
                            <p class="text-xs">Edgar Daniel Vazquez Escobedo</p>
                            <p class="text-[11px] text-[#868585] text-end">Administrador</p>
                        </div>

                        
                    </div>
                </div>
            </header>
            <main class="p-3 flex relative h-[calc(100vh-64px)]">
                <slot />
            </main>
        </div>
    </div>
</template>
<script setup lang="ts">
import { UDrawer } from '../components/core/UDrawer'
import { useLayoutStore } from '@/stores/layout';
import RectangleStack from '@/assets/icons/RectangleStack.vue'

const { drawer } = useLayoutStore()

</script>