<template>
    <button
        class="btn__base"
        :class="[
            {'primary': variant === 'primary'},
            {'text': variant === 'text'},
            {'danger': variant === 'danger'},
            {'warning': variant === 'warning'},
            // Contained
        ]"
    >
        <slot />
    </button>
</template>


<script setup lang="ts">

export interface IProps {
    variant: 'primary' | 'text' | 'danger' | 'warning'
}

const props = withDefaults(defineProps<IProps>(), {
    variant: 'primary'
})
</script>


<style scoped>
.btn__base {
   @apply  px-4 rounded-[4px] h-9 font-googleSans font-medium active:ring  active:ring-offset-1 outline-none
}

.primary{
    @apply bg-blue-primary text-white hover:shadow-blue-300 hover:opacity-95 hover:shadow-md active:ring-blue-300
}

.text {
    @apply bg-transparent text-[#5f6368] hover:bg-gray-300 transition-colors ease-in-out font-medium active:ring-gray-300
}

.danger {
    @apply bg-red-500 text-white hover:shadow-red-300 hover:opacity-95 hover:shadow-md active:ring-red-300
}


.warning {
    @apply bg-orange-500 text-white hover:shadow-orange-300 hover:opacity-95 hover:shadow-md active:ring-orange-300
}


</style>