<template>
     <leftMenuBar numActive="3" @toggleClass="toggleOpen($event)"></leftMenuBar>
     <div :class="LBisOpen? 'container': 'container big-container'">
            <headerPg numActive="0"></headerPg>
            <h2 class="name-page">Работники</h2>
            <glassBlock class="admin-menu" style="height: 70vh!important;">
                <scrollBox v-if="tabs==0" class="scrl" left>
                        <!--добавить цикл-->
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                </scrollBox>
                <scrollBox v-if="tabs==1" class="scrl" left>
                        <!--добавить цикл-->
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                </scrollBox>
                <scrollBox v-if="tabs==2" class="scrl" left>
                        <!--добавить цикл-->
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
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
