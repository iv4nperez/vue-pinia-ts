<template>
    <div style="margin-bottom: 20px;">
        <center>
            <img
                v-if="!isText" 
                :width="width" 
                :src="url" 
            />
            <span
                v-else
                class="title-logo"
                :style="`color: ${color} `"
            >
            {{text}}
            </span>
        </center>
    </div>
</template>
<script>
export default {
    name:'LogoCenterImage',
    props:{
        url:String,
        width:[String,Intl],
        isText:Boolean,
        text:String,
        color:String
    }
}
</script>

<style>
    .title-logo{
        font-size: 50px;
        /* font-weight: bold; */
        font-family: Product Sans Thin;
        font-weight: 600;
        color: #919191;
        text-transform: capitalize;

    }      
</style>