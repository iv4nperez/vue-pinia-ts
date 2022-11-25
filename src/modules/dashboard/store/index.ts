import { defineStore } from 'pinia'
import { state } from './state'
import { actions } from './actions'
import { getters } from './getters'

export const useDashboardStore = defineStore('dashboard',{
    state: state,
    actions: actions,
    getters: getters
})


