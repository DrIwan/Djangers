<template>
     <leftMenuBar numActive="3" @toggleClass="toggleOpen($event)"></leftMenuBar>
     <div :class="LBisOpen? 'container': 'container big-container'">
            <headerPg numActive="0"></headerPg>
            <h2 class="name-page">Работники</h2>
            <glassBlock class="admin-menu" style="height: 70vh!important;">
                <scrollBox v-if="tabs==0" class="scrl" left>
                    <div  v-for="item in workers" :key="item.index">
                        <buttonWorker
                            isUser
                            v-if="!item.status && item.isUser"
                            :worker= "item.name"
                            @click="$router.push(`/cardUser/${item.index}`)">
                        </buttonWorker>
                    </div>
                </scrollBox>
                <scrollBox v-if="tabs==1" class="scrl" left>
                    <div  v-for="item in workers" :key="item.index">
                        <buttonWorker
                            isUser
                            v-if="item.status && item.isUser"
                            :worker= "item.name"
                            @click="$router.push(`/cardUser/${item.index}`)">
                        </buttonWorker>
                    </div>
                </scrollBox>
                <scrollBox v-if="tabs==2" class="scrl" left>
                    <div  v-for="item in workers" :key="item.index">
                        <buttonWorker
                            isUser
                            v-if="!item.isUser"
                            :worker= "item.name"
                            @click="$router.push(`/bind/${item.index}`)">
                        </buttonWorker>
                    </div>
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
                {index: 1, name: "Имя Как Имя",age: 35, gender: "Мужской", mail:"susdsck@mail.ru",status:true,isUser:true},
                {index: 2, name: "Именуемый Как Имя",age: 23, gender: "Мужской", mail:"heendel@mail.ru",status:true,isUser:true},
                {index: 3, name: "Имя Не Имя",age: 55, gender: "Женский", mail:"hooops@mail.ru",status:true,isUser:true},
                {index: 4, name: "Имя Да Имя",age: 12, gender: "Мужской", mail:"noback@mail.ru",status:false,isUser:false},
                {index: 5, name: "Имя Да Выме",age: 21, gender: "Женский", mail:"onlyf@mail.ru",status:false,isUser:true},
                {index: 6, name: "Имя Да Да",age: 45, gender: "Мужской", mail:"frees@mail.ru",status:false,isUser:false},
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
