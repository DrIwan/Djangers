<template>

    <leftMenuBar  numActive="3" @toggleClass="toggleOpen($event)"></leftMenuBar>
    <div :class="LBisOpen? 'container': 'container big-container'">
        <headerPg numActive="0"></headerPg>
        <h2 class="name-page">Карточка Пользователя</h2>
        <glassBlock class="gb" style="height: 70vh!important;">
            <!--смена вкладок-->
            <div v-if="tabs==0" class="content-lk">
                <imageChange></imageChange>
                <div class="info-block">
                    <div class="text">
                        <expBtnBlock icon="school" v-on:click="this.$refs.upWind.toogleOpen()"></expBtnBlock>
                        <h2>ФИО</h2>
                        <div>{{workers[$route.params.cardUserId-1].name}}</div>
                        <h2>Возраст</h2>
                        <div>{{workers[$route.params.cardUserId-1].age}}</div>
                        <h2>Пол</h2>
                        <div>{{workers[$route.params.cardUserId-1].gender}}</div>
                    </div>
                    <button class="edit-btn" @click="this.$router.push('/updateCardUser')"><span class="material-symbols-rounded">edit</span>Изменить</button>
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
    <modalWind ref="upWind" title="Предупреждение" text="Вы уверены, что хотите этого пользователя преподавателем?"></modalWind>
</template>

<script>
export default{
    data() {
        return {
            LBisOpen: false,
            tabs: 0,
            name: "Панин Максим Петрович",
            age: "44",
            gender: "Мужской",
            workers: [
                { index: 1, name: "Имя Как Имя", age: 35, gender: "Мужской", mail: "susdsck@mail.ru" },
                { index: 2, name: "Именуемый Как Имя", age: 23, gender: "Мужской", mail: "heendel@mail.ru" },
                { index: 3, name: "Имя Не Имя", age: 55, gender: "Женский", mail: "hooops@mail.ru" },
                { index: 4, name: "Имя Да Имя", age: 12, gender: "Мужской", mail: "noback@mail.ru" },
                { index: 5, name: "Имя Да Выме", age: 21, gender: "Женский", mail: "onlyf@mail.ru" },
                { index: 6, name: "Имя Да Да", age: 45, gender: "Мужской", mail: "frees@mail.ru" },
            ],
        };
    },
    methods: {
        toggleOpen(inf) {
            this.LBisOpen = inf;
        },
        toggleTabs(num) {
            this.tabs = num;
        }
    }
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
            @apply pl-8 font-bold h-[90%] flex flex-col justify-between w-1/2;
            .ctrl-box{
                @apply w-full flex flex-row justify-end;
                span{
                    @apply bg-white p-2 rounded shadow-[inset_6px_8px_4px] shadow-[#000]/10 cursor-pointer;
                }
            }
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
                    @apply transition-all duration-200 ease-in-out shadow-[inset_-4.7em_0_0_0,inset_4.7em_0_0_0] shadow-dark-blue text-white;

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


