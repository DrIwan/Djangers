<template>
    <leftMenuBar  numActive="0" @toggleClass="toggleOpen($event)"></leftMenuBar>
   <div :class="LBisOpen? 'container': 'container big-container'">
       <headerPg numActive="0"></headerPg>
       <h2 class="name-page">Карточка Пользователя</h2>
       <glassBlock class="gl" style="height: 70vh !important; padding: 4rem;">
           <form>
               <div class="main-set">
                   <h2 class="name-block-form">Общие</h2>
                   <h3 class="label-frm">Фамилия Имя Отчество</h3>
                   <textBox></textBox>
                   <h3 class="label-frm">Пол</h3>
                   <comboBox></comboBox>
                   <h3 class="label-frm">Возраст</h3>
                   <numberBox></numberBox>
               </div>
               <div class="line"></div>
               <div class="addit-set">
                   <ul class="control-box">
                       <li><button @click="this.$router.push('/cardUser')"><span class="material-symbols-rounded">update</span></button></li>
                       <li><button @click="this.$router.push('/cardUser')"><span class="material-symbols-rounded">close</span></button></li>
                   </ul>
                   <h3 class="label-frm">Логин</h3>
                   <textBox></textBox>
                   <h3 class="label-frm">Пароль</h3>
                   <textBox></textBox>
               </div>
           </form>
       </glassBlock>
   </div>
</template>

<script>
export default{
   data() {
       return {
           LBisOpen: false,
       };
   },
   methods: {
       toggleOpen(inf) {
           this.LBisOpen = inf;
       }
   },
}
</script>
<style lang="scss" scoped>
.sub-label{
   @apply font-monst text-left text-dark-blue text-xl mb-3;
}
.gl{
   @apply font-monst text-dark-blue;
   form{
       @apply w-full h-full flex flex-row;
       .main-set{
           @apply w-1/2;

       }
       .addit-set{
           @apply w-1/2 pl-14;
           .control-box{
               @apply w-[100%] flex flex-row justify-end mb-[5rem];
               li {
                   @apply first:mr-2;
                   span{
                       @apply text-5xl;
                   }
               }
           }
       }
   }
   .name-block-form{
       @apply text-white text-6xl font-black mb-8;
   }
   .label-frm{
       @apply font-bold text-xl;
   }

   .text-box{
       @apply mb-0 w-[80%];
   }
   .combo-box{
       @apply w-[80%];
   }
}
</style>
