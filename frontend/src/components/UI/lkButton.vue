<template>
    <div class="lk-btn">
        <div class="main-lk-btn">
            <img src="" class="lk-ico">
            <button class="dropdown-toggle"><span class="material-symbols-rounded">expand_more</span></button>
        </div>

        <ul class="dropdown-menu hidden-dm">
            <li><RouterLink  to="/profile">Личный кабинет</RouterLink></li>
            <li><RouterLink to="/main">Выход</RouterLink></li>
        </ul>
        <!--<RouterLink to="/settings">Настройки</RouterLink>-->
    </div>

</template>

<script>
    export default{
        name: 'lkButton'
    }
</script>


