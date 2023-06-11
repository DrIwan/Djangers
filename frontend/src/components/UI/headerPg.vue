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
<style lang="scss" scoped>
.header-mainpg{
    @apply ml-[100px] flex flex-row justify-between mt-9 items-center;
    .navbar{
        @apply flex flex-row font-monst text-2xl;
        .nav-item{
            @apply ml-6 first:ml-0;
            &:hover{
                @apply text-light-blue;
            }
        }
        .active-item{
            a{
                @apply underline underline-offset-8 decoration-2;
            }

       }
    }
}
</style>
