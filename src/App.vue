<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa&family=Nunito&display=swap');

  :root {
    --navy: #2E4C6D;
    --blue: #396EB0;
    --lightblue: #DADDFC;
    --orange: #FC997C;
  }

  * {
    padding: 0%;
    margin: 0%;
    box-sizing: border-box;
  }
  h1 {
    font-family: 'Comfortaa', cursive;
  }
  p {
    font-family: 'Nunito', sans-serif;
  }
</style>