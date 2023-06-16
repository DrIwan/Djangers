<template>
    <div class="header-mainpg">

       <ul v-if="true" class="navbar">
           <li  :class="numActive=='0'? 'nav-item active-item': 'nav-item'">
            <RouterLink to="/workers">Учетный записи</RouterLink>
           </li>
           <li :class="numActive=='1'? 'nav-item active-item': 'nav-item'">
            <RouterLink to="/tests">Тесты</RouterLink>
           </li>
           <li :class="numActive=='2'? 'nav-item active-item': 'nav-item'">
                <RouterLink to="/attempts">Попытки</RouterLink>
           </li>

        </ul>
        <ul v-else class="navbar">
            <li :class="numActive=='0'? 'nav-item active-item': 'nav-item'">
                <RouterLink to="/tests">Мои тесты</RouterLink>
            </li>
            <li :class="numActive=='1'? 'nav-item active-item': 'nav-item'">
                <RouterLink to="/attempts">Мои попытки</RouterLink>
            </li>
        </ul>
        <lkButton></lkButton>

    </div>
</template>

<script>
    export default{
        name: 'headerPg',
        props:{
            numActive:{
                type:String,
                default:'0'
            }
        }
    }
</script>
<style lang="scss" scoped>
.header-mainpg{
    @apply flex flex-row justify-between mt-9 items-center;
    .navbar{
        @apply flex flex-row font-monst text-2xl;
        .nav-item{
            @apply ml-6 first:ml-0 cursor-pointer;
            &:hover{
                @apply text-light-blue;
            }
        }
        .active-item{
            a{
                @apply underline underline-offset-8 decoration-2 text-active-btn-t;
            }

       }
    }
}
</style>
