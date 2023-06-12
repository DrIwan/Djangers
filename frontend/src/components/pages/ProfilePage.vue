<template>
    <leftMenuBar   @toggleClass="toggleOpen($event)"></leftMenuBar>
    <div :class="LBisOpen? 'container': 'container big-container'">
        <headerPg></headerPg>
        <h2 class="name-page">Личный кабинет</h2>
        <div class="sub-label">Личные данные</div>
        <glassBlock class="gb" style="height: 70vh!important;">
            <!--смена вкладок-->
            <div v-if="true" class="content-lk">
                <imageChange></imageChange>
                <div class="info-block">
                    <div class="text">
                        <h2>ФИО</h2>
                        <!--доработать-->
                        <div>Панин Максим Петрович</div>
                        <h2>Возраст</h2>
                        <!--доработать-->
                        <div>44</div>
                        <h2>Пол</h2>
                        <!--доработать-->
                        <div>Мужской</div>
                    </div>
                    <button class="edit-btn"><span class="material-symbols-rounded">edit</span>Изменить</button>
                </div>
            </div>
            <!--смена вкладок-->
            <div v-if="false" class="cont-at">
                <scrollBox class="scrl">
                        <div class="scrl-cont">
                            <buttonTest title="Тест" style="margin: 0 !important;"></buttonTest>
                            <buttonTest title="Тест"></buttonTest>
                            <buttonTest title="Тест"></buttonTest>
                            <buttonTest title="Тест"></buttonTest>
                            <buttonTest title="Тест"></buttonTest>
                            <buttonTest title="Тест"></buttonTest>
                            <buttonTest title="Тест"></buttonTest>
                        </div>

                </scrollBox>
            </div>
            <div class="line"></div>
            <ul class="tabs">
                <li class="active">Личные данные</li>
                <li>Попытки</li>
            </ul>
        </glassBlock>
    </div>
</template>

<script>
export default{

    data(){
        return{
            LBisOpen: false,
        }
    },
    methods:{
        toggleOpen(inf){
            this.LBisOpen = inf;
        }
    },
}
</script>
<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,500,0,0);
.name-page{
    @apply font-monst font-black text-5xl text-left text-dark-blue mb-1;
}
.sub-label{
    @apply font-monst text-left text-dark-blue text-xl mb-3;
}
.gb{
    @apply flex flex-row items-start;
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
    .content-lk{
        @apply flex flex-row items-start w-[70%] h-full p-9 font-monst text-xl;
        .info-block{
            @apply pl-8 font-bold h-[90%] flex flex-col justify-between;
            .text{

                h2{
                    @apply text-pas-tabs/60 text-2xl;
                }
            }
            .edit-btn{
                @apply w-[60%] bg-trans p-1 flex flex-row justify-center items-center rounded border-dark-blue border-[3px];
                span{
                    @apply mr-1;
                }
                &:hover{
                    @apply transition-all duration-200 ease-in-out shadow-[inset_-4.2em_0_0_0,inset_4.2em_0_0_0] shadow-dark-blue text-white;

                }
            }
        }
    }
    .cont-at{
        @apply w-[70%] h-full mt-2;
        .scrl{
            direction: rtl;
            .scrl-cont{
                direction: ltr;
            }
        }
    }

}
</style>


