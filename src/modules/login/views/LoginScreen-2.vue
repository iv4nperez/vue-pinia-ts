<template>
<LayoutLogin>

     <div>
            <v-row class="style-container">
                <v-col 
                    class="animate__animated animate__fadeIn"
                    style="background-color: #f6f7f9;border-left: 1px solid #e2e2e2;"
                    v-if="breakPoint !== 'xs' && breakPoint !== 'sm'"
                    xl="8"      
                    lg="7" 
                    md="7"  
                    sm="0"
                    cols="0"
                >
                    <Bienvenida
                        logoUri="https://cdnlogos.blob.core.windows.net/logos/General/LogoCotemarHorizontalFB.png"
                        :height="height"
                        :width="250"
                        text="Takin"
                        description="Cotemar con 23 años trabajando costa afuera y preparando la mejor empresa"
                        color="#757575"
                    />
                </v-col>
                <v-col
                    class="animate__animated animate__fadeIn"
                    style="border-left: 1px solid #dadada;"
                    xl="4"
                    lg="5"
                    md="5"
                    sm="12"
                    cols="12"
                >
                    <div key="1">
                        <div class="ma-8" style="padding: 30px;">
                            <LogoCenterImage
                                url="https://logos-world.net/wp-content/uploads/2021/02/Spectrum-Emblem.png"
                                width="250"
                                :isText="false"
                                text="Orion"
                                color="#0e1924"
                            />
                            <br>
                            <br>
                            <p>Login con tu cuenta</p>

                            <v-text-field
                                type="text"
                                variant="outlined"
                                label="Usuario"
                            >
                            </v-text-field>

                           <v-text-field
                                type="text"
                                outlined
                                label="Contraseña"
                            >
                            </v-text-field>

                            <v-row>
                                <v-col class="RCol-01">
                                    <v-checkbox
                                    color="#61dafb"
                                    class="CbL-01"
                                    label="Recordar cuenta"
                                    ></v-checkbox>
                                </v-col>
                                <v-col class="RCol-01">
                                    <!-- <a class="RCol-R-01">Recuperar contraseña</a> -->
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col>
                                    <v-btn
                                        type="submit"
                                        style="font-weight: 600"
                                        class="VBtn-L-01"
                                        color="primary"
                                        @click="fnLogin"
                                    >
                                        Login
                                    </v-btn>
                                </v-col>
                            </v-row>

                            <center class="mt-5 mb-5">
                                <span>OR</span>
                            </center>

                            <v-row>
                                <v-col>
                                    <v-btn
                                        class="VBtn-L-01"
                                        color="white"
                                    >
                                        <!-- <img
                                            class="mr-3"
                                            src="@/assets/image/google.png"
                                            alt=""
                                        /> -->
                                        <span 
                                            style="font-weight: 600; color: #5a5a5a"
                                        >
                                            Google
                                        </span>
                                    </v-btn>
                                </v-col>
                            </v-row>
                            
                            
                            <br />
                            <br />
                            
                        </div>
                    </div>
                </v-col>
            </v-row>
        </div>
</LayoutLogin>
</template>
<script setup lang="ts">
import { useDashboardStore} from '../../dashboard/store'
import  LayoutLogin from '../layouts/LoginLayout.vue'
import  Bienvenida from '../components/Bienvenida.vue'
import LogoCenterImage from '../components/LogoCenterImage.vue'
import { computed, onMounted, ref } from 'vue'
import {useRouter} from 'vue-router'

const miVariable=ref<boolean>(false);

const router = useRouter();
const useDash=useDashboardStore();

miVariable.value=true;
// const useDash=useDashboardStore();
const fnGetMiVaribale =()=>
{

}

const fnLogin = () => {   
    
// login aqui
useDash.username="edvazqueze logeado";

router.push("/");

}

onMounted(()=>{
miVariable.value=false;

fnGetMiVaribale();

})

const loquequieras = computed(()=>
{
    return true;
})

</script>
