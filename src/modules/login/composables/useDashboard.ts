import { useDashboardStore } from '../store'
import { storeToRefs } from "pinia";



export const useDashboard = () => {

    const dashboardStore = useDashboardStore();
    const { someActions } = useDashboardStore();
    const { username } = storeToRefs(dashboardStore)




    return {
        //variables
        username,

        //action
        someActions

        //getters
    }
}