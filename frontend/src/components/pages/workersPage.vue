<template>
     <leftMenuBar numActive="3" @toggleClass="toggleOpen($event)"></leftMenuBar>
     <div :class="LBisOpen? 'container': 'container big-container'">
            <headerPg numActive="0"></headerPg>
            <h2 class="name-page">Работники</h2>
            <glassBlock class="admin-menu" style="height: 70vh!important;">
                <scrollBox v-if="tabs==0" class="scrl" left>
                        <buttonWorker
                            v-for="item in workers" :key="item.index"
                            :worker= "item.name"
                            @click="$router.push(`/bind/${item.index}`)">
                        </buttonWorker>
                </scrollBox>
                <scrollBox v-if="tabs==1" class="scrl" left>
                        <buttonWorker
                            v-for="item in workers" :key="item.index"
                            :worker= "item.name"
                            @click="$router.push(`/bind/${item.index}`)">
                        </buttonWorker>
                </scrollBox>
                <scrollBox v-if="tabs==2" class="scrl" left>
                        <buttonWorker
                            v-for="item in workers" :key="item.index"
                            :worker= "item.name"
                            @click="$router.push(`/bind/${item.index}`)">
                        </buttonWorker>
                </scrollBox>
                <div class="line"></div>
                <ul class="tabs">
                    <li v-on:click="toggleTabs(0)" :class="tabs==0? 'active' : ''">Студенты</li>
                    <li v-on:click="toggleTabs(1)" :class="tabs==1? 'active' : ''">Преподаватели</li>
                    <li v-on:click="toggleTabs(2)" :class="tabs==2? 'active' : ''">Заявки</li>
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
            workers :[
                {index: 1, name: "Имя Как Имя",age: 35, gender: "male", mail:"susdsck@mail.ru"},
                {index: 2, name: "Именуемый Как Имя",age: 23, gender: "male", mail:"heendel@mail.ru"},
                {index: 3, name: "Имя Не Имя",age: 55, gender: "female", mail:"hooops@mail.ru"},
                {index: 4, name: "Имя Да Имя",age: 12, gender: "male", mail:"noback@mail.ru"},
                {index: 5, name: "Имя Да Выме",age: 21, gender: "female", mail:"onlyf@mail.ru"},
                {index: 6, name: "Имя Да Да",age: 45, gender: "male", mail:"frees@mail.ru"},
            ],
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

.admin-menu{
    @apply h-full flex flex-row;
    .scrl{
        @apply w-[75%];
    }

}
</style>
