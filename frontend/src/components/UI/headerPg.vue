<template>
    <div class="items">
    <div v-if="true">
        <RouterLink to="/workers">Учетный записи</RouterLink>
        <RouterLink to="/tests">Тесты</RouterLink>
        <RouterLink to="/attempts">Попытки</RouterLink>
    </div>
    <div v-else>
        <RouterLink to="/tests">Мои тесты</RouterLink>
        <RouterLink to="/attempts">Мои попытки</RouterLink>
    </div>
    <lkButton></lkButton>
</div>
</template>

<script>
    export default{
        name: 'headerPg'
    }
</script>

<style scoped>
    .items{
        color: aliceblue;
        display: flex;
        width:30%;
        flex-direction: column;
        height: 100vh;
        background-color:cornflowerblue;
    }
</style>
