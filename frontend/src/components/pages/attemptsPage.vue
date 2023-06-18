<template>
    <leftMenuBar numActive="2"  @toggleClass="toggleOpen($event)"></leftMenuBar>
    <div :class="LBisOpen? 'container': 'container big-container'">
            <headerPg numActive="2"></headerPg>
            <h2 class="name-page">Попытки</h2>
            <glassBlock class="admin-menu" v-if="true" style="height: 70vh!important;">
                <scrollBox class="scrl" left>
                        <buttonAttemtsAd
                            v-for="item in attempts" :key="item.index"
                            :name_worker= "item.name"
                            :time="item.time"
                            :name_test="item.description"
                            @click="$router.push(`/attempt/${item.index}`)">
                        </buttonAttemtsAd>
                        <pagination></pagination>
                </scrollBox>
                <div class="line"></div>
                <ul class="tabs">
                    <h3 class="label-t">Фильтр:</h3>
                    <li class="active">По дате</li>
                    <li>По работнику</li>
                    <li>По тесту</li>
                </ul>
            </glassBlock>

            <glassBlock v-if="false" style="height: 70vh!important;">
                <scrollBox class="scrl" left>
                    <buttonAttemtsAd
                        v-for="item in attempts" :key="item.index"
                            :name_worker= "item.name"
                            :time="item.time"
                            :name_test="item.test"
                            @click="$router.push(`/attempt/${item.index}`)">
                    </buttonAttemtsAd>
                </scrollBox>
            </glassBlock>
    </div>
    <!--добавить пейджер-->
</template>

<script>

export default{
    data(){
        return{
            LBisOpen: false,
            attempts :[
                    {index: 1, name: 'Панин Максим Петрович',time: '01.04.2023 18:34:26', test: 'Диагностика темперамента по Айзенку'},
                    {index: 2, name: 'Беликова Анна Матвеевна', time: '01.06.2023 18:34:26', test: 'Тест эмоционального интеллекта Холла'}
                ]
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
.admin-menu{
    @apply h-full flex flex-row;
    .scrl{
        @apply w-[75%];
    }

}
</style>
