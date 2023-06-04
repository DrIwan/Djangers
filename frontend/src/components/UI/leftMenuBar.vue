<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,500,0,0" />
    <aside class="leftBar">
        <h2>ТЕСТ+</h2>
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


<script>
export default{
        name: 'leftMenuBar',
    }
</script>

