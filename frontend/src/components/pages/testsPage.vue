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
        .line{
            @apply h-[99%] w-[2px] bg-white rounded ml-2;
        }
        .tabs{
            @apply text-pas-tabs font-monst text-2xl ml-5;
            li{
                @apply mt-3;
                &:hover{
                    @apply text-light-blue scale-105;
                }
            }
            .active{
                @apply text-dark-blue;
            }
        }
    }

}
.header-test{
    @apply mt-5 flex flex-row justify-between items-center;
    .express-btn{
        @apply flex flex-row;
        span{
            background: linear-gradient(303.7deg, rgba(255, 255, 255, 0.69) 0.17%, rgba(255, 255, 255, 0.49) 42.99%, rgba(255, 255, 255, 0.25) 98.03%);
            @apply text-dark-blue text-3xl rounded-lg p-1 ml-2 border-t-0 border-r-[2px] border-b-[2px] border-l-[1px] border-white shadow-lg;
            &:hover{
                @apply text-sm-blue scale-105;
            }
        }
    }
}
.header-page{
    @apply font-monst font-black text-5xl text-left text-dark-blue;
}
</style>

