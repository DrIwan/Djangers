<template>

        <leftMenuBar
            numActive="0"
            @toggleClass="toggleOpen($event)"

        ></leftMenuBar>

        <div
            :class="LBisOpen? 'container': 'container big-container'"
        >

            <headerPg numActive="-1"></headerPg>
            <div class="parting-block">
                <div class="text-block">
                    <h2>Добро пожаловать на Тест+</h2>
                    <!--ПРОВЕРКА СТАТУСА-->
                    <div v-if="true" class="parting-word">
                        Cоздавайте, комментируйте работы своих студентов и совершенствуйтесь сами.
                    </div>
                    <div v-else class="parting-word">
                        Развивайтесь, учитесь и проверяйте знания по плану.
                    </div>
                </div>
                <div class="img-block">
                    <!--ПРОВЕРКА СТАТУСА-->
                    <div v-if="true" class="parting-img admin"></div>
                    <div v-else class="parting-img user"></div>
                </div>
            </div>
             <!--ПРОВЕРКА СТАТУСА-->
            <div v-if="false" class="express-menu">

            </div>
            <div v-if="true" class="express-menu">
                <div class="task-menu">
                    <glassBlock class="gl" style="height: 70vh!important;">
                        <h2>План тестирования</h2>
                        <p>Обязательные тесты</p>
                        <scrollBox class="min-scrl">
                            <!--добавить цикл-->
                            <buttonTest title="Тест"></buttonTest>
                            <buttonTest title="Тест"></buttonTest>
                            <buttonTest title="Тест"></buttonTest>
                            <buttonTest title="Тест"></buttonTest>
                            <buttonTest title="Тест"></buttonTest>
                            <buttonTest title="Тест"></buttonTest>
                            <buttonTest title="Тест"></buttonTest>
                        </scrollBox>
                    </glassBlock>
                </div>
                <div class="mark-menu">
                    <glassBlock class="gl" style="height: 70vh!important;">
                        <h2>Попытки</h2>
                        <p>Пройденные тесты</p>
                        <scrollBox class="min-scrl">
                            <!--добавить цикл-->
                            <buttonTest title="Тест"></buttonTest>
                            <buttonTest title="Тест"></buttonTest>
                            <buttonTest title="Тест"></buttonTest>
                            <buttonTest title="Тест"></buttonTest>
                            <buttonTest title="Тест"></buttonTest>
                            <buttonTest title="Тест"></buttonTest>
                            <buttonTest title="Тест"></buttonTest>
                        </scrollBox>
                    </glassBlock>

                </div>

            </div>
        </div>

</template>


<style lang="scss" scoped>
.min-scrl{
   height: 80% !important;
}
 .parting-block{
        @apply w-full flex mt-16;
        .text-block{
            @apply w-[50%];
            & > *{
                @apply w-full text-left font-monst;
            }
            h2{
                @apply text-6xl font-extrabold;
            }
            .parting-word{
                @apply text-2xl font-normal mt-5;
            }

        }
        .img-block{
            @apply w-[50%];
            .parting-img{
                @apply bg-contain bg-no-repeat bg-center w-full h-full;
            }
        }

    }

.gl{

    h2{
        @apply text-2xl;
    }
    .sub-text{
        @apply text-lg;

    }

}
.scroll-box{
    @apply overflow-y-auto mt-7 p-2 h-[320px];
    &::-webkit-scrollbar {
        @apply w-[6px];
    }

    &::-webkit-scrollbar-track {
        @apply bg-trans;

    }

    &::-webkit-scrollbar-thumb {
        @apply rounded bg-dark-blue/50;
    }

}
.express-menu{
    @apply mt-12 flex flex-row justify-between items-center ;
}
.task-menu{
    @apply w-[49%] ;
}
.mark-menu{
    @apply w-[49%] ;
}
</style>

<script>

export default{
    data() {
        return {
            LBisOpen: false,
        };
    },
    methods: {
        toggleOpen(inf) {
            this.LBisOpen = inf;
        }
    }

}
</script>



