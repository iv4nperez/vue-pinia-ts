//Este archivo es para centralizar todos los js que estan separados por archivos para una mejor estructura
import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'


const login = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}

export default login