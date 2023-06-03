<template>
    <img src="">
    <button class="dropdown-toggle">></button>
    <div class="dropdown-menu">
        <RouterLink  to="/profile">Личный кабинет</RouterLink>
        <RouterLink to="/main">Выход</RouterLink>
    </div><RouterLink to="/settings">Настройки</RouterLink>
</template>

<script>
    export default{
        name: 'lkButton'
    }
</script>

<style>
</style>
