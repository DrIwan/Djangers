<template>
        <leftMenuBar></leftMenuBar>
        <div class="container big-container">
            <headerPg></headerPg>
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
                    <div class="glass-block">
                        <h2>План тестирования</h2>
                        <p>Обязательные тесты</p>
                        <!--добавить цикл-->
                        <div class="scroll-box">
                            <buttonTest title="Тест"></buttonTest>
                            <buttonTest title="Тест"></buttonTest>
                            <buttonTest title="Тест"></buttonTest>
                            <buttonTest title="Тест"></buttonTest>
                            <buttonTest title="Тест"></buttonTest>
                        </div>

                    </div>
                </div>
                <div class="mark-menu">
                   <div class="glass-block">
                        <h2>Попытки</h2>
                        <p>Пройденные тесты</p>
                        <div class="scroll-box">
                            <!--добавить цикл-->
                            <buttonTest title="Тест"></buttonTest>
                            <buttonTest title="Тест"></buttonTest>
                            <buttonTest title="Тест"></buttonTest>
                            <buttonTest title="Тест"></buttonTest>
                            <buttonTest title="Тест"></buttonTest>
                        </div>
                    </div>
                </div>

            </div>
        </div>

</template>

<style lang="scss" scoped>
body{
    @apply h-[120vh] overflow-y-scroll;
}

.glass-block{
    @apply border-t-0 border-r-[2px] border-b-[2px] border-l-[1px] border-white shadow-lg w-full h-full rounded-xl font-monst text-left p-5 text-dark-blue;
    background: linear-gradient(303.7deg, rgba(255, 255, 255, 0.69) 0.17%, rgba(255, 255, 255, 0.49) 42.99%, rgba(255, 255, 255, 0.25) 98.03%);
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
    @apply h-full mt-12 flex flex-row justify-between items-center ml-[100px];
}
.task-menu{
    @apply w-[49%] ;
}
.mark-menu{
    @apply w-[49%] ;
}
</style>
