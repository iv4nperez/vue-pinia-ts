<template>
  <div>
    <div class="login-title-container">
      <div class="mt-8">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <v-img :width="width" :src="logoUri" />
        <br />
        <span class="title-welcome" :style="`color: ${color}`">{{ text }}</span>
        <br />
        <br />
        <div style="text-align: left">
          <span 
            :style="`color: ${color}`"
            class="login-app-description"
          >
            {{ description }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>|
<script>
export default {
  props: {
    logoUri: String,
    color: String,
    height: Number,
    width: Number,
    text: String,
    description: String,
  },
  name: "Bienvenida",
};
</script>
<style scoped>

.title-welcome {
  font-size: 35px;
  font-weight: 600;
  font-family: Product Sans Thin;
  color: rgb(255, 255, 255);
}
.title-logo-image {
  font-size: 50px;
  color: #919191;
  text-transform: capitalize;
}

/* ----------------------- */

.login-title-container {
  z-index: 1000;
  position: absolute;
  top: 0;
  left: 4%;
  width: 35%;
  margin: 0;
  height: 100%;
  /* background: rgba(0,0,0,.1)!important; */
}

.login-app-logo {
  position: absolute;
  width: 100%;
  text-align: center;
}

.login-logo {
  position: initial;
  margin-top: 70px;
}
.login-app-title {
  position: absolute;
  color: #ffffff;
  width: 100%;
  padding: 0 20px !important;
}

.login-app-name {
  font-size: 19px;
  font-weight: bold;
  text-align: center;
  width: 100%;
  /* border-bottom: 1px solid #ffffff; */
}

.login-app-description {
  padding-top: 25px;
  /* font-size: 19px; */
  width: 100%;
  text-align: left;
  /* font-style: italic; */
  text-transform: none !important;
  /* color: white; */
  font-size: 20px;
  font-weight: 400;
  font-family: Product Sans Thin;
  color: rgb(255, 255, 255);
  text-align: justify;
}
.title-q {
  font-size: 19px;
  color: white;
  font-weight: 600;
}
</style>