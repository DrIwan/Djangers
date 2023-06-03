<template>

        <section class="main-block">
            <div class="ellipse-white"></div>
            <div class="ellipse"></div>
            <div class="main-content">
                <div class="header">
                    <div class="logo">DJANGERS</div>
                    <div class="group-btn">
                        <ul>
                            <li><u>Главная</u></li>
                            <li>О нас</li>
                            <li>Контакты</li>
                            <li><router-link to="/login">Войти</router-link></li>
                        </ul>
                    </div>
                </div>
                <div class="content">
                    <div class="text-block">
                        <h2>Тест+</h2>
                        <div class="text">Проведение внутреннего тестирования знаний и навыков для сотрудников федеральной компании в сфере финансов</div>
                        <div class="start-btn"><router-link to="/login">Начать сейчас</router-link></div>
                    </div>
                    <div class="img-company"></div>
                </div>
            </div>


        </section>

  </template>

<style lang="scss" scoped>
.header{
    @apply flex items-center justify-between mt-10;
}
.group-btn{
    ul{
        @apply flex flex-row items-center justify-between;
        li{
            @apply ml-8 text-dark-blue font-monst font-normal text-2xl  last:rounded last:border-2 last:p-1;
        }
        li:hover{
            @apply text-light-blue;
        }
    }
    }
    .logo{
        @apply font-bold text-5xl font-monst text-dark-blue leading-10;
    }
    .content{
        @apply flex flex-row items-center justify-between;
    }
    .text-block{
        @apply text-dark-blue w-[40%] font-monst flex flex-col items-start justify-start;
        h2{
            @apply font-bold text-9xl text-start;
        }
    }

    .text {
        @apply font-normal text-xl text-start mt-8;
    }
    .start-btn{
        @apply rounded-2xl bg-dark-blue w-1/2 p-4 text-white text-2xl mt-12 hover:bg-light-blue;
    }

    .img-company{
        @apply w-[60%] h-[85vh] bg-contain bg-no-repeat bg-center;
    }

    .ellipse-white{
        @apply bg-white w-[180vh] h-[180vh] rounded-full absolute z-0 left-28 -top-56;
    }
    .ellipse{
        @apply bg-cover bg-center absolute rounded-full z-10 w-[140vh] h-[140vh] left-64 -top-20;
    }
    .main-content{
        @apply z-20 absolute left-[104px];
    }
    .main-block{
        @apply relative;
    }

</style>
