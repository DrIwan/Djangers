<template>
     <leftMenuBar   @toggleClass="toggleOpen($event)"></leftMenuBar>
     <div :class="LBisOpen? 'container': 'container big-container'">
            <headerPg></headerPg>
            <div class="header-test">
                <h2 class="header-page">Тесты</h2>
                    <!--проверка статуса-->
                <div v-if="true" class="express-btn">
                    <span class="material-symbols-rounded">add</span>
                    <span class="material-symbols-rounded">refresh</span>
                    <span class="material-symbols-rounded">delete</span>
                    <!--проверка фильтр на скрытые/др. вкладка-->
                    <span v-if="true" class="material-symbols-rounded">visibility_off</span>
                    <span v-if="false" class="material-symbols-rounded">visibility</span>
                    <!--проверка фильтр на черновики/др. вкладка-->
                    <span v-if="true" class="material-symbols-rounded">inventory_2</span>
                    <span v-if="false" class="material-symbols-rounded">outbox</span>
                </div>
            </div>
            <!--проверка статуса-->
            <glassBlock v-if="true" class="gl" style="height: 70vh!important;">
                <div class="up-menu">
                    <scrollBox class="mini-menu">
                        <div class="content-menu">
                            <buttonTest title="Тест" style="margin: 0 !important;"></buttonTest>
                            <buttonTest title="Тест"></buttonTest>
                            <buttonTest title="Тест"></buttonTest>
                            <buttonTest title="Тест"></buttonTest>
                            <buttonTest title="Тест"></buttonTest>
                            <buttonTest title="Тест"></buttonTest>
                            <buttonTest title="Тест"></buttonTest>
                        </div>

                    </scrollBox>
                    <div class="line"></div>
                    <ul class="tabs">
                        <li class="active">Опубликовано</li>
                        <li>Скрытые</li>
                        <li>Черновики</li>
                    </ul>
                </div>

                <!--пейджер добавить-->
            </glassBlock>
            <glassBlock v-if="false" class="gl" style="height: 70vh!important;">
                <scrollBox>
                    <buttonTest title="Тест" style="margin: 0 !important;"></buttonTest>
                    <buttonTest title="Тест"></buttonTest>
                    <buttonTest title="Тест"></buttonTest>
                    <buttonTest title="Тест"></buttonTest>
                    <buttonTest title="Тест"></buttonTest>
                    <buttonTest title="Тест"></buttonTest>
                    <buttonTest title="Тест"></buttonTest>
                </scrollBox>
                <!--пейджер добавить-->
            </glassBlock>
        </div>
</template>

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
    },
}
</script>
<style lang="scss" scoped>
.gl{
    @apply mt-4;
    .up-menu{
        @apply h-full flex flex-row;
        .mini-menu{
            @apply w-[75%];
            direction: rtl;
            .content-menu{
                direction: ltr;
            }
        }

    }

}

.header-page{
    @apply font-monst font-black text-5xl text-left text-dark-blue;
}
</style>

