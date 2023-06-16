<template>
    <leftMenuBar  numActive="0" @toggleClass="toggleOpen($event)"></leftMenuBar>
    <div :class="LBisOpen? 'container': 'container big-container'">
        <headerPg numActive="0"></headerPg>
        <h2 class="name-page">Заявка</h2>
        <glassBlock class="gb" style="height: 50vh!important; padding: 3rem;">
            <div class="info-block">
                <div class="main-block">
                    <h2>ФИО</h2>
                    <p>{{name}}</p>
                    <h2>Возраст</h2>
                    <p>{{age}}</p>
                    <h2>Пол</h2>
                    <p>{{gender}}</p>
                    <div class="btn-grp">
                        <button class="btn-bind" @click="this.$router.push('/workers')">Одобрить</button>
                        <button class="btn-bind refusal" @click="this.$router.push('/workers')">Отклонить</button>
                    </div>
                </div>
                <div class="add-block">
                    <h2>Почта</h2>
                    <p>{{mail}}</p>
                </div>
            </div>
        </glassBlock>
    </div>
</template>
<script>
export default{

    data(){
        return{
            LBisOpen: false,
            name:'Панин Максим Петрович',
            age:'44',
            gender:'Мужской',
            mail:'paninMP@targetIT.ru'
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
.gb{
    @apply p-10;
}
.info-block{
    @apply w-full flex flex-row font-monst text-2xl font-bold;
    h2{
        @apply text-pas-tabs/60;
    }
    p{
        @apply text-dark-blue;
    }
    .main-block{
        @apply w-[50%];
        .btn-grp{
            @apply w-full flex flex-row mt-5;
            button{
                @apply bg-trans p-1 flex flex-row justify-center items-center rounded border-dark-blue border-[3px] last:ml-5;
                &:hover{
                    @apply transition-all duration-200 ease-in-out shadow-[inset_-4.2em_0_0_0,inset_4.2em_0_0_0] shadow-dark-blue text-white;

                }
            }
            .refusal{
                @apply border-fail-color text-fail-color;
                &:hover{
                    @apply transition-all duration-200 ease-in-out shadow-[inset_-4.2em_0_0_0,inset_4.2em_0_0_0] shadow-fail-color text-dark-blue;

                }
            }


        }

    }
    .add-block{
        @apply w-[50%];
    }

}
</style>
