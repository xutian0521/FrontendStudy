<template>
    <div id="app">
        <img src="./images/logo.png" alt="logo" />
        <h2><span>{{msg}}</span></h2>
        <p class="test">test text</p>
    </div>
</template>
<script>
import Vue from 'vue'
    export default {
        name:'app',
        data(){
            return {
                msg:"hello vue with other plugins !!"
            }
        },
    }
</script>
<style >
    .test{
        color:#020202
    }
</style>