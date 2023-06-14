<template>
    <leftMenuBar   @toggleClass="toggleOpen($event)"></leftMenuBar>
    <div :class="LBisOpen? 'container': 'container big-container'">
        <headerPg></headerPg>
        <h2 class="name-page">Личный кабинет</h2>

        <div v-if="tabs==0" class="sub-label">Личные данные</div>
        <div v-else class="sub-label">Попытки</div>
        <glassBlock class="gb" style="height: 70vh!important;">
            <!--смена вкладок-->
            <div v-if="tabs==0" class="content-lk">
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
                    <button class="edit-btn" @click="this.$router.push('/updateProfile')"><span class="material-symbols-rounded">edit</span>Изменить</button>
                </div>
            </div>
            <!--смена вкладок-->
            <div v-else class="cont-at">
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
                <li v-on:click="toggleTabs(0)" :class="tabs==0? 'active' : ''">Личные данные</li>
                <li v-on:click="toggleTabs(1)" :class="tabs==1? 'active' : ''">Попытки</li>
            </ul>
        </glassBlock>
    </div>
</template>

<script>
export default{

    data(){
        return{
            LBisOpen: false,
            tabs:0,
        }
    },
    methods:{
        toggleOpen(inf){
            this.LBisOpen = inf;
        },
        toggleTabs(num){
            this.tabs = num;
        }

    },
}
</script>
<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,500,0,0);
.sub-label{
    @apply font-monst text-left text-dark-blue text-xl mb-3;
}
.gb{
    @apply flex flex-row items-start;

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
            @apply h-[95%];
            .scrl-cont{
                direction: ltr;
            }
        }
    }

}
</style>


