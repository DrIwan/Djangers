<template>
    <leftMenuBar numActive="2"  @toggleClass="toggleOpen($event)"></leftMenuBar>
   <div :class="LBisOpen? 'container': 'container big-container'">
           <headerPg numActive="1"></headerPg>
           <h2 class="name-page">Интерпретация</h2>

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
