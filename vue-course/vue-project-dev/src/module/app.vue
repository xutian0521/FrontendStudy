<template>
    <div id="app">
        <img src="../images/logo.png"  alt="logo"/>
        <span>{{msg}}</span>
        <p class="test" test text></p>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:'app2',
    data(){
        return {
            msg:"hello vue~~##"
        }
    }
})
</script>
<style>
    .test{
        color: darkgreen;
    }
</style>

