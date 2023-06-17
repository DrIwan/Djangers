<template>
    <leftMenuBar numActive="1"  @toggleClass="toggleOpen($event)"></leftMenuBar>
    <div :class="LBisOpen? 'container': 'container big-container'">
       <headerPg numActive="1"></headerPg>
       <h2 class="name-page">Создание субтеста</h2>
       <div class="br-p-test">
           <p>Основные характеристики</p>
       </div>
       <glassBlock class="gb" style="height: auto!important;">
           <form class="main-set">
               <div>
                   <h2>Название субтеста</h2>
                   <textBox style="width: 58%!important;"></textBox>
                   <h2 class="mb-4">Таймер</h2>
                   <checkBox title="Без таймера" val="Без таймера"></checkBox>
                   <div class="flex flex-row items-center">
                       <checkBox title="C таймером" val="C таймером"></checkBox>
                       <textBox style="width: 40%!important; margin-left: 2rem;"></textBox>
                   </div>
                   <h2 class="mb-4">Перемещать</h2>
                   <docomboBox class="cmb"></docomboBox>
                   <div class="flex flex-row justify-center">
                       <buttonRg class="btn-next" v-on:click="this.$router.push('/')">ОК</buttonRg>
                   </div>
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
   @apply font-monst w-full h-full;
   h2{
       @apply font-bold text-2xl;
   }
   .text-box{
       @apply mb-0;
       Input{
           @apply mb-1;
       }
   }
   .cmb{
       @apply w-[30%];
   }
   .btn-next{
       @apply w-[20%];
   }
}
</style>
