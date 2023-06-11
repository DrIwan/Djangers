<template>
    <div class="lk-btn">
        <div class="main-lk-btn">
            <img src="https://i.pinimg.com/236x/5f/05/eb/5f05eb426362936c31b4435063bbcc04.jpg" class="lk-ico">
            <button
            class="dropdown-toggle"
            v-on:click="handleClick"
            v-on:mouseleave="hideM"
            ><span class="material-symbols-rounded">expand_more</span></button>
         </div>

        <ul
        :class="isOpen? 'dropdown-menu': 'dropdown-menu hidden-dm'"
        v-on:mouseleave="hideM"
        >
            <li><RouterLink  to="/profile">Личный кабинет</RouterLink></li>
            <li><RouterLink to="/main">Выход</RouterLink></li>
        </ul>
        <!--<RouterLink to="/settings">Настройки</RouterLink>-->
    </div>

</template>

<script>
  export default{
        name: 'lkButton',
        isOpen: false,
        data(){
            return{
                isOpen: false
            }
        },
        methods:{
            handleClick(){
                this.isOpen = !this.isOpen;
            },
            hideM(){
                this.isOpen = false;
            },
            openHide(){
                this.isOpen = true;
            },
        }
    }

</script>

<!--     import $ from "jquery";
    export default{
        name: 'lkButton',
        clicked: 'true',
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
-->


