<template>
    <aside :class="isOpen ? 'leftBar': 'leftBar hidden-leftBar'"
    on-mouseleave="hideLM">
        <h2 class="logo-lb" v-on:click="hideLM">ТЕСТ+</h2>
        <button class="double-logo" v-on:click="openLM">T+</button>
        <menuBarItem title="Главная"
        icon="home"
        @click="this.$router.push('/main')"
        ></menuBarItem>
        <menuBarItem title="Тесты"
        icon="library_books"
        @click="this.$router.push('/tests')"
        ></menuBarItem>
        <menuBarItem title="Попытки"
        icon="data_thresholding"
        @click="this.$router.push('/attempts')"
        ></menuBarItem>
        <!-- Необходима проверка на админа для этой кнопочки-->
        <menuBarItem title="Работники"
        icon="person"
        @click="this.$router.push('/workers')"
        ></menuBarItem>
    </aside>
</template>

<style scoped>
    @import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,500,0,0);
</style>

<script>
export default{
        name: 'leftMenuBar',
        isOpen:{
            type: Boolean,
            value: true,
        },
        data(){
            return{
                isOpen: false
            }
        },
        methods:{
            openLM(){
                this.isOpen = true;
                this.$emit('toggleClass', this.isOpen);
            },
            hideLM(){
                this.isOpen = false;
                this.$emit('toggleClass', this.isOpen);
            }
        }
    }

</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,500,0,0);
//активная боковая панель
.leftBar{
    @apply h-screen bg-dark-blue-3 block w-80 fixed top-0 left-0 flex flex-col justify-start items-start pl-20 pt-9 transition-all ease-linear duration-500;
    background: linear-gradient(354.3deg, rgba(255, 255, 255, 0.37) -3.2%, rgba(255, 255, 255, 0.1702) 49.11%, rgba(255, 255, 255, 0.1369) 100%);

    h2,.double-logo{
        @apply font-monst font-black text-5xl;
    }
    .double-logo{
        @apply hidden text-4xl bg-dark-blue-3 text-white w-16 h-16 rounded-xl;
    }
    .item{
        @apply delay-1000;
    }
}
//скрытая
.hidden-leftBar{
    @apply pl-7 pt-[43px] w-32;
    .leftmenu-btn{
        .item{
            @apply hidden;
        }
    }
    .double-logo{
        @apply flex flex-col justify-center items-center;
    }
    h2{
        @apply hidden;
    }

}

</style>
