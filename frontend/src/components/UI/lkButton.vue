<template>
    <div class="lk-btn" v-on:mouseleave="hideM">
        <div class="main-lk-btn">
            <img src="https://i.pinimg.com/236x/5f/05/eb/5f05eb426362936c31b4435063bbcc04.jpg" class="lk-ico">
            <button class="dropdown-toggle" v-on:click="openHide"><span class="material-symbols-rounded">expand_more</span></button>
        </div>

        <ul class="dropdown-menu hidden-dm">
            <li><RouterLink  to="/profile">Личный кабинет</RouterLink></li>
            <li><RouterLink to="/main">Выход</RouterLink></li>
        </ul>
        <!--<RouterLink to="/settings">Настройки</RouterLink>-->
    </div>

</template>

<script>
    import $ from "jquery";
    export default{
        name: 'lkButton',
        methods:{
            openHide(){
                $('.dropdown-menu').slideToggle();
            },
            hideM(){
                if( !($('.dropdown-menu').is(':hidden')))
                    $('.dropdown-menu').slideUp();
            }
        }
    }


</script>


