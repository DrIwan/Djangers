<template>
    <div class="header-mainpg">

       <ul v-if="true" class="navbar">
           <li class="nav-item">
            <RouterLink to="/workers">Учетный записи</RouterLink>
           </li>
           <li class="nav-item">
            <RouterLink to="/tests">Тесты</RouterLink>
           </li>
           <li class="nav-item">
                <RouterLink to="/attempts">Попытки</RouterLink>
           </li>

        </ul>
        <ul v-else class="navbar">
            <RouterLink to="/tests">Мои тесты</RouterLink>
            <RouterLink to="/attempts">Мои попытки</RouterLink>
        </ul>
        <lkButton></lkButton>

    </div>
</template>

<script>
    export default{
        name: 'headerPg'
    }
</script>
<style>

</style>
