<template>
    <leftMenuBar numActive="1"  @toggleClass="toggleOpen($event)"></leftMenuBar>
   <div :class="LBisOpen? 'container': 'container big-container'">
           <headerPg numActive="1"></headerPg>
           <div class="flex flex-row justify-between items-center">
                <h2 class="name-page">Тест</h2>
                <!--ДОБАВИТЬ ТАЙМЕР-->
                <glassBlock style="height: auto!important; width: auto!important; padding: 0.5rem;" class="gb-time">1:38:01</glassBlock>
           </div>
            <numberQuestTest :num=25></numberQuestTest>
            <blockAnsTest total=58 clickT></blockAnsTest>
            <blockAnsTest typeQuest num=2 total=58 clickT></blockAnsTest>
            <blockAnsTest num=3 total=58 clickT typeAnsw typeQuest></blockAnsTest>
            <blockAnsTest num=4 total=58></blockAnsTest>
            <blockAnsTest num=5 total=58 clickT typeAnsw></blockAnsTest>
            <div class="w-full flex flex-row justify-center mb-4">
                <buttonRg v-on:click="this.$router.push('/tests')">Завершить</buttonRg>
            </div>
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
.gb-time{
    @apply w-auto h-auto fixed right-[8rem] p-2 font-monst text-2xl;
}
</style>
