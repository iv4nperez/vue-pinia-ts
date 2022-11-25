<template>
    <div
        :class="[
            { 'w-0': !showDrawer },
            { 'w-[280px]': showDrawer }
        ]"
        id="menu"
        class="drawer__container">
            <div 
                className="w-full h-16 flex items-center px-5 justify-between">
                <figure
                    :class="[
                        { 'hidden': showDrawer === false }
                    ]"
                    class="transition-all ease-in-out delay-150"
                >
                    <img src="https://react-material.fusetheme.com/assets/images/logo/logo.svg" alt="" />
                </figure>

                <button @click="showDrawer = !showDrawer">
                    <BarsIcon 
                        :class="[
                            { 'text-white': showDrawer},
                            { 'text-black': !showDrawer}
                        ]"
                        class="w-5 h-5" />
                </button>
            </div>
            <div 
                class="overflow-y-scroll h-full">
                <div 
                    class="w-full h-[190px] p-4 flex flex-col justify-center items-center">
                <div class="pb-6">
                    <figure>
                        <img 
                            :class="[
                                { 'w-24 h-24': showDrawer },
                                { 'w-6 h-6': showDrawer }
                            ]"
                            class="rounded-full  object-cover" src="https://react-material.fusetheme.com/assets/images/avatars/brian-hughes.jpg" alt="" />
                    </figure>
                    </div>

                    <p class="text-white font-medium text-sm">Abbott Keitch</p>
                    <p class="text-[#83a3ab] font-medium text-[13px]">admin@fusetheme.com</p>
                </div>

                <ul className="px-3 h-full">
                        <div className="px-4 mt-7 py-3">
                            <span className="text-xs uppercase text-[#ffffff] font-bold font-inter ">Dashboards</span>
                            <p className="text-[11px] text-[#b8babf] font-medium font-inter">Unique dashboard designs</p>
                        </div>

                        <li className="w-full py-3 px-4 rounded-md hover:bg-white hover:bg-opacity-[0.1] mb-1 leading-5 cursor-pointer transition-all ease-in-out group">
                            <div className="flex justify-start items-center gap-4">
                                <RectangleStack class="text-white" />
                                <div>
                                    <span className="font-medium text-[#b8babf] text-sm group-hover:text-white ">Prueba de contenido</span>
                                </div>
                            </div>
                        </li>
            
                        <div className="px-4 mt-7 py-3">
                        <span className="text-xs uppercase text-[#ffffff] font-bold font-inter ">Dashboards</span>
                        <p className="text-[11px] text-[#b8babf] font-medium">Unique dashboard designs</p>
                        </div>


                        <li className="w-full py-3 px-4 rounded-md hover:bg-white hover:bg-opacity-[0.1] mb-1 leading-5 cursor-pointer transition-all ease-in-out group">
                            <div className="flex justify-start items-center gap-4">
                                <RectangleStack class="text-white" />
                                <div>
                                    <span className="font-medium text-[#b8babf] text-sm group-hover:text-white ">Prueba de contenido</span>
                                </div>
                            </div>
                        </li>
                        <li className="w-full py-3 px-4 rounded-md hover:bg-white hover:bg-opacity-[0.1] mb-1 leading-5 cursor-pointer transition-all ease-in-out group">
                            <div className="flex justify-start items-center gap-4">
                                <RectangleStack class="text-white" />
                                <div>
                                    <span className="font-medium text-[#b8babf] text-sm group-hover:text-white ">Prueba de contenido</span>
                                </div>
                            </div>
                        </li>
                        <li className="w-full py-3 px-4 rounded-md hover:bg-white hover:bg-opacity-[0.1] mb-1 leading-5 cursor-pointer transition-all ease-in-out group">
                            <div className="flex justify-start items-center gap-4">
                                <RectangleStack class="text-white" />
                                <div>
                                    <span className="font-medium text-[#b8babf] text-sm group-hover:text-white ">Prueba de contenido</span>
                                </div>
                            </div>
                        </li>
                        <li className="w-full py-3 px-4 rounded-md hover:bg-white hover:bg-opacity-[0.1] mb-1 leading-5 cursor-pointer transition-all ease-in-out group">
                            <div className="flex justify-start items-center gap-4">
                                <RectangleStack class="text-white" />
                                <div>
                                    <span className="font-medium text-[#b8babf] text-sm group-hover:text-white ">Prueba de contenido</span>
                                </div>
                            </div>
                        </li>

                        <div className="px-4 mt-7 py-3">
                        <span className="text-xs uppercase text-[#ffffff] font-bold font-inter ">Dashboards</span>
                        <p className="text-[11px] text-[#b8babf] font-medium">Unique dashboard designs</p>
                        </div>

                        <li className="w-full py-3 px-4 rounded-md hover:bg-white hover:bg-opacity-[0.1] mb-1 leading-5 cursor-pointer transition-all ease-in-out group">
                            <div className="flex justify-start items-center gap-4">
                                <RectangleStack class="text-white" />
                                <div>
                                    <span className="font-medium text-[#b8babf] text-sm group-hover:text-white ">Prueba de contenido</span>
                                </div>
                            </div>
                        </li>
                        <li className="w-full py-3 px-4 rounded-md hover:bg-white hover:bg-opacity-[0.1] mb-1 leading-5 cursor-pointer transition-all ease-in-out group">
                            <div className="flex justify-start items-center gap-4">
                                <RectangleStack class="text-white" />
                                <div>
                                    <span className="font-medium text-[#b8babf] text-sm group-hover:text-white ">Prueba de contenido</span>
                                </div>
                            </div>
                        </li>
                        <li className="w-full py-3 px-4 rounded-md hover:bg-white hover:bg-opacity-[0.1] mb-1 leading-5 cursor-pointer transition-all ease-in-out group">
                            <div className="flex justify-start items-center gap-4">
                                <RectangleStack class="text-white" />
                                <div>
                                    <span className="font-medium text-[#b8babf] text-sm group-hover:text-white ">Prueba de contenido</span>
                                </div>
                            </div>
                        </li>
                        <li className="w-full py-3 px-4 rounded-md hover:bg-white hover:bg-opacity-[0.1] mb-1 leading-5 cursor-pointer transition-all ease-in-out group">
                            <div className="flex justify-start items-center gap-4">
                                <RectangleStack class="text-white" />
                                <div>
                                    <span className="font-medium text-[#b8babf] text-sm group-hover:text-white ">Prueba de contenido ultiomo</span>
                                </div>
                            </div>
                        </li>

                        <li className="w-full py-3 px-4 rounded-md hover:bg-white hover:bg-opacity-[0.1] mb-1 leading-5 cursor-pointer transition-all ease-in-out group">
                            <div className="flex justify-start items-center gap-4">
                                <RectangleStack class="text-white" />
                                <div>
                                    <span className="font-medium text-[#b8babf] text-sm group-hover:text-white ">Prueba de contenido ultiomo</span>
                                </div>
                            </div>
                        </li>
                </ul>
            </div>
        </div>
</template>

<script setup lang="ts">
import RectangleStack from '../../../assets/icons/RectangleStack.vue'
import BarsIcon from '../../../assets/icons/BarsIcon.vue'
import { ref } from 'vue';

const showDrawer = ref(true)

</script>

<style scoped>
 .drawer__container{
    @apply h-screen shrink-0 z-20 bg-[#111827] transition-all  ease-in-out delay-150;
 }

</style>