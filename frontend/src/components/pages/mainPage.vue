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
            <div class="express-menu">

            </div>
        </div>

</template>

<style >
</style>
