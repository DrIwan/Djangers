<template>
    <div class="combo-box" v-on:click="openMenu">
                    <select
                        required placeholder=" "
                        class="s-main hidden"
                        v-bind:value="item"
                        >
                            <option value="Да"><div class="line"></div>Да</option>
                            <option value="Нет"><div class="line l-2"></div>Нет</option>
                    </select>
                    <div class="select-b">
                        {{item}}
                    </div>
                    <ul
                    :class="isOpen? 'custom-select' : 'custom-select hidden'"
                    >
                        <li
                            :class="this.item=='Да'?'custom-option active-option': 'custom-option'"
                            rel="yes"
                            v-on:click="this.item='Да'"
                            >
                            <div class="line"></div>Да</li>
                        <li
                        :class="this.item=='Нет'?'custom-option active-option': 'custom-option'"
                            rel="no"
                            v-on:click="this.item='Нет'"
                            >
                            <div class="line l-2"></div>Нет</li>
                    </ul>

                    <div class="icon-select"><span class="material-symbols-rounded">expand_more</span></div>
                    <label>{{ title }}</label>
    </div>
</template>
<script>

    export default{
        name: 'docomboBox',
        data(){
            return{
               isOpen: false,
               isActive: true,
               item: "Да",
            }
        },
        methods:{
            openMenu(){
                this.isOpen = !this.isOpen
            }
        },
        props: ['title']

    }
</script>
<style lang="scss" scoped>
  @import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,500,0,0);
.combo-box{
    @apply relative w-[60%] mb-7 flex justify-center items-center cursor-pointer;
    .select-b{
        @apply text-left border-b-2 border-t-0 border-l-0 border-r-0 border-white bg-trans w-full py-2 outline-none mb-5 appearance-none cursor-pointer;
    }
    .icon-select{
        @apply absolute top-1 right-0 flex justify-center items-center flex-col pointer-events-none;
        span{
            @apply text-2xl text-dark-blue-3 pointer-events-none;
        }
    }
    label{
        @apply absolute top-0 left-0 py-2 text-xl text-dark-blue-3 pointer-events-none duration-[0.5s];
    }
    .select-b:focus ~ label, .select-b:not(:placeholder-shown) ~label{
        @apply top-[-20px] left-0 text-sm-blue text-xs;
    }

    .custom-select{
        @apply absolute left-0 top-[2.6rem] bg-white/80 w-full z-40 cursor-pointer;
        .custom-option{
            @apply p-2 text-left font-monst text-base;
            &:hover{
                @apply text-sm-blue  bg-hover-btn-dm/80;
            }

        }
        .line{
            @apply w-[0.1rem] h-10 bg-dark-blue-3 absolute top-0 left-0 hidden ml-0 pl-0;
        }
        .l-2{
            @apply top-[2.5rem];
        }
        .active-option{
            @apply text-dark-blue-3 bg-hover-btn-rect;
            &:hover{
                @apply text-sm-blue bg-hover-btn-rect/90;
            }
            .line{
                @apply block;
            }
        }
    }

}
.reg-box{
    .combo-box{
        @apply mb-3;
    }

}
</style>
