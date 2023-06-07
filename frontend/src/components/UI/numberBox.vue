<template>
    <div class="text-box number-b">
        <input type="number" name="" min="14" required placeholder=" ">
        <label>{{ title }}</label>

            <div class="icon-inp" v-on:click="change"><span class="material-symbols-rounded">expand_less</span></div>
            <div class="icon-inp ic-2" v-on:click="change"><span class="material-symbols-rounded">expand_more</span></div>

    </div>
</template>

<style scoped>
    @import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,500,0,0);
</style>
<script>
    export default{
        name: 'numberBox',
        methods:{
            change(){

            }
        },
        props: ['title'],
    }
</script>
