<template>
  <div class="front-page">
    <div><button @click="redirectToApp">{{ pageTitle }}</button></div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const pageTitle = "COUNTRIES";

const redirectToApp = () => {
  if (router) {
    // Redirigir a la ruta /paisos
    router.push('/countries');
  } else {
    console.error("router is undefined");
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

.front-page {
  color: #fff;
  height: 100vh;
  overflow: hidden;
  /* Añade la URL del GIF como fondo */
  background-image: url('https://media.giphy.com/media/bXhiABcqQGT3W/giphy.gif');
  /* Ajusta la propiedad background-size según sea necesario */
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.front-page div {
  background: 50% 100% / 50% 50% no-repeat
  radial-gradient(ellipse at bottom, #fff, transparent, transparent);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 10vw;
  font-family: "Source Sans Pro", sans-serif;
  animation: reveal 3000ms ease-in-out forwards 200ms,
  glow 2500ms linear infinite 2000ms;
}

@keyframes reveal {
  80% {
    letter-spacing: 8px;
  }
  100% {
    background-size: 300% 300%;
  }
}

@keyframes glow {
  40% {
    text-shadow: 0 0 8px #fff;
  }
}
</style>
