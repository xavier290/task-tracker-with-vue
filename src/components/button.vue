<template>
    <div class="btn">
        <button :style="{backgroundColor:color, width:width, height:height}">{{name}}</button>
    </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        name: String,
        color: String,
        width: String,
        height: String,
    }
}
</script>

<style scoped>
    button {
        padding: 2%;
        font-size: 18px;
        cursor: pointer;
        font-family: 'Nunito', sans-serif;
        font-weight: bold;
        border: none;
    }
</style>