<template>
    <div class="lk-btn">
        <div class="main-lk-btn">
              <!--проработать-->
            <img src="" class="lk-ico">
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

<style lang="scss" scoped>
.lk-btn{
    //иконка с кнопкой
    .main-lk-btn{
        @apply flex flex-row items-end;
        .lk-ico{
            @apply w-14 h-16 rounded-xl bg-dark-blue-3;
        }
        .dropdown-toggle{
            @apply w-8 h-9 bg-white flex flex-row justify-center items-center rounded-lg ml-[6px] mb-1 border-none outline-none;
            span{
                @apply text-3xl;
            }
            &:hover{
                @apply scale-110;
                span{
                    @apply scale-110 text-sm-blue;
                }
            }
        }
    }
    //выпадающий список
    .dropdown-menu{
        @apply flex flex-col items-start bg-white rounded-xl absolute translate-x-[-6rem] translate-y-1 w-48 p-1 pb-4;
        li{
            @apply pt-2 w-full text-left font-monst text-lg pl-3;
            &:hover{
                @apply bg-hover-btn-dm;
                a{
                    @apply text-sm-blue;
                }
            }
        }
    }
    //скрытие списка
    .hidden-dm{
        @apply hidden;
    }
}
</style>





