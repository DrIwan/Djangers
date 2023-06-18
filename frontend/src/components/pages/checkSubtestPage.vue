<template>
    <leftMenuBar numActive="1"  @toggleClass="toggleOpen($event)"></leftMenuBar>
    <div :class="LBisOpen? 'container': 'container big-container'">
       <headerPg numActive="1"></headerPg>
       <h2 class="name-page">Создание теста</h2>
       <div class="br-p-test">
           <p>Основные характеристики</p>
           <p>Субтесты</p>
       </div>
       <glassBlock class="gb" style="height: auto!important;">
           <form class="main-set">
                    <!--пейджер-->
                    <div class="h-[80vh]">
                        <scrollBox class="scrl" left style="height: 90%!important;">
                            <buttonCheckTest></buttonCheckTest>
                            <buttonCheckTest></buttonCheckTest>
                            <buttonCheckTest></buttonCheckTest>
                            <buttonCheckTest></buttonCheckTest>
                            <buttonCheckTest></buttonCheckTest>
                            <buttonCheckTest></buttonCheckTest>
                            <buttonCheckTest></buttonCheckTest>
                            <buttonCheckTest></buttonCheckTest>
                            <buttonCheckTest></buttonCheckTest>
                        </scrollBox>
                    </div>
                    <div class="flex flex-row justify-center mt-3">
                        <buttonRg class="btn-next" v-on:click="this.$router.push('/createQuest')">ОК</buttonRg>
                    </div>
           </form>

       </glassBlock>
    </div>
</template>
<script>
export default{
   methods: {
       toggleOpen(inf) {
           this.LBisOpen = inf;
       },
       opChCl(ind){
           this.opCh = ind;
       }
   },
}
</script>
<style lang="scss" scoped>
.main-set{
    @apply h-full;
}
</style>
