<template>
    <leftMenuBar numActive="1"  @toggleClass="toggleOpen($event)"></leftMenuBar>
    <div :class="LBisOpen? 'container': 'container big-container'">
       <headerPg numActive="1"></headerPg>
       <h2 class="name-page">Создание теста</h2>
       <div class="br-p-test">
           <p>Основные характеристики</p>
           <p>Субтесты</p>
           <p>Вопросы</p>
           <p>Результаты</p>
       </div>
       <glassBlock class="gb" style="height: auto!important;">
           <form class="end-set">
            <div class="h-[60vh]">
                <scrollBox left style="height: 89%!important;">
                    <buttonCheckTest nameSubtest="Интерпретация"></buttonCheckTest>
                    <buttonCheckTest nameSubtest="Интерпретация"></buttonCheckTest>
                    <buttonCheckTest nameSubtest="Интерпретация"></buttonCheckTest>
                    <buttonCheckTest nameSubtest="Интерпретация"></buttonCheckTest>
                    <buttonCheckTest nameSubtest="Интерпретация"></buttonCheckTest>
                    <buttonCheckTest nameSubtest="Интерпретация"></buttonCheckTest>
                </scrollBox>
            </div>
                <div class="flex flex-row justify-center">
                    <buttonRg v-on:click="this.$router.push('/tests')">Опубликовать</buttonRg>
                    <buttonRg class="ml-5" v-on:click="this.$router.push('/tests')">Черновик</buttonRg>
                    <buttonRg class="ml-5" v-on:click="this.$router.push('/tests')">Скрыть</buttonRg>
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

