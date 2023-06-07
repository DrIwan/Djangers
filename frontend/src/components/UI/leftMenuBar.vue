<template>
    <aside class="leftBar hidden-leftBar" v-on:mouseleave="hideLM">
        <h2 class="logo-lb" v-on:click="hideLM">ТЕСТ+</h2>
        <button class="double-logo" v-on:click="openLM">T+</button>
        <menuBarItem title="Главная"
        icon="home"
        @click="this.$router.push('/main')"
        ></menuBarItem>
        <menuBarItem title="Тесты"
        icon="library_books"
        @click="this.$router.push('/tests')"
        ></menuBarItem>
        <menuBarItem title="Попытки"
        icon="data_thresholding"
        @click="this.$router.push('/attempts')"
        ></menuBarItem>
        <!-- Необходима проверка на админа для этой кнопочки-->
        <menuBarItem title="Работники"
        icon="person"
        @click="this.$router.push('/workers')"
        ></menuBarItem>
    </aside>
</template>

<style scoped>
    @import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,500,0,0);
</style>

<script>
 import $ from "jquery";
export default{
        name: 'leftMenuBar',
        methods:{
            openLM(){
                $('.leftBar').removeClass('hidden-leftBar');
                $('.container').removeClass('big-container');
            },
            hideLM(){

                    $('.leftBar').addClass('hidden-leftBar');
                    $('.container').addClass('big-container');

            }
        }
    }
</script>

