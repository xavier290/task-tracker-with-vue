<template>
  <section class="container">
    <h1>Convenient and productive task manager</h1>
    <p>We have created an intuitive and convenient interface for teamwork.</p>

    <Button name='Get started' color='white' width="100%" height="52px"/>
  </section>
</template>

<script>
  import Button from "./button.vue";
  import Bimage from "../assets/bg-landing.svg";

export default {
  name: 'Landing',
  components : {
    Button
  },
  data() {
    return {
      Bimage
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 2% 2% 8% 2%;
    background-image: url(../assets/bg-landing.svg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: #fff;
  }
  h1, p {
    margin-bottom: 6px;
  }
  h1 {
    font-family: 'Comfortaa', cursive;
    font-size: 28px;
  }
  p {
    font-family: 'Nunito', sans-serif;
  }
  button {
    width: 100% !important;
  }
</style>