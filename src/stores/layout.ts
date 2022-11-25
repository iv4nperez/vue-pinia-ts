import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', () => {
  const drawer = ref<boolean>(true)


  return {
    drawer
  }
})
