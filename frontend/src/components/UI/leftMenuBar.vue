<template>

    <aside class="leftBar">
        <menuBarItem title="Главная"
        icon=""
        @click="this.$router.push('/main')"
        style="cursor:pointer;"
        ></menuBarItem>
        <menuBarItem title="Тесты"
        icon=""
        @click="this.$router.push('/tests')"
        style="cursor:pointer;"
        ></menuBarItem>
        <menuBarItem title="Попытки"
        icon=""
        @click="this.$router.push('/attempts')"
        style="cursor:pointer;"
        ></menuBarItem>
        <!-- Необходима проверка на админа для этой кнопочки-->
        <menuBarItem title="Работники"
        icon=""
        @click="this.$router.push('/workers')"
        style="cursor:pointer;"
        ></menuBarItem>
    </aside>
</template>


<script>
export default{
        name: 'leftMenuBar',
    }
</script>

<style scoped>
    aside{
        color: aliceblue;
        display: flex;
        width:30%;
        flex-direction: column;
        background-color: rgb(51, 255, 0);
    }
</style>
