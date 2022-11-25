<template>
    <div v-if="show" 
        :class="[
            { 'bottom-7':   positionY === 'bottom' },
            { 'top-7'   :   positionY === 'top' },
            { 'right-7' :   positionX === 'right' },
            { 'left-7'  :   positionX === 'left' }
        ]"
        class="c__notification__container shadow-utility">
        <div class="flex">
            <div class="w-16 p-3">
            <img src="https://fonts.gstatic.com/s/i/googlematerialicons/notifications_paused/v10/gm_blue-48dp/1x/gm_notifications_paused_gm_blue_48dp.png" alt="">
        </div>
        <div class="c__notification__content">
            <div class="mb-3 w-60">
                <h2 class="c__notification__title" v-html="title"></h2>
            </div>
            <div class="c__notification__content__description" v-html="content"></div>
            <div class="flex gap-4 mt-4">
                <slot name="actions">
                    <button class="bg-blue-primary px-4 rounded-[4px] h-9 text-white font-googleSans hover:shadow-md hover:shadow-blue-300 hover:opacity-95 font-medium ">Continue</button>
                    <button class="bg-white px-4 rounded-[4px] h-9 text-[#5f6368] font-googleSans hover:bg-gray-200 transition-colors ease-in-out font-medium">No thanks</button>
                </slot>

                <button @click="show = false" class="absolute top-3 right-0">
                    <CloseIcon class="text-gray-600" />
                </button>
            </div>
        </div>
        </div>
    </div>
</template>


<script setup lang="ts">

export interface IProps {
    modelValue: boolean,
    title: string,
    content: string,
    positionX?: 'left' | 'right',
    positionY?: 'top' | 'bottom'
}

import { computed } from 'vue';
import CloseIcon from '../../../assets/icons/CloseIcon.vue'

const emit = defineEmits(['update:modelValue'])

const props = withDefaults(defineProps<IProps>(), {
    title: '',
    content: '',
    modelValue: false,
    positionX: 'right',
    positionY: 'bottom'
})

const show = computed({
    get(){
        return props.modelValue
    },
    set(val: boolean){
        emit('update:modelValue', val)
    }
})


</script>

<style scoped>
.c__notification__container{
    @apply bg-white rounded-md  w-fit table p-3 absolute;
}
.c__notification__content{
    @apply w-80 p-3 pr-6 relative;
}

.c__notification__title{
    @apply text-base font-googleSans font-bold text-[#444] leading-[22px];
}
.c__notification__content__description{
    @apply text-[#444] text-sm font-publicSans;
}
</style>