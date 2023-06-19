<template>
    <leftMenuBar numActive="1"  @toggleClass="toggleOpen($event)"></leftMenuBar>
   <div :class="LBisOpen? 'container': 'container big-container'">
           <headerPg numActive="1"></headerPg>
           <div class="flex flex-row justify-between items-center">
                <h2 class="name-page">Тест</h2>
                <!--ДОБАВИТЬ ТАЙМЕР-->
                <glassBlock style="height: auto!important; width: auto!important; padding: 0.5rem;" class="gb-time">{{stringTime()}}</glassBlock>
           </div>
            <numberQuestTest :num=58></numberQuestTest>
            <blockAnsTest total=58></blockAnsTest>
            <blockAnsTest typeQuest num=2 total=58></blockAnsTest>
            <blockAnsTest num=3 total=58></blockAnsTest>
   </div>
</template>

<script>
   export default{
       data(){
           return{
               LBisOpen: false,
               currentTime: 3610,
               timer: null,
               stringTime: function(){
                    var hrs;
                    var mns;
                    var sec = this.currentTime%60;

                    if (this.currentTime/3600>=1)
                        hrs = Math.round(this.currentTime/3600);
                    else
                        hrs = Math.round(this.currentTime/3600) -1;

                    if (sec >=30)
                        mns = Math.round((this.currentTime - hrs *60*60)/60) -1;
                    else
                        mns = Math.round((this.currentTime - hrs *60*60)/60);

                    return  hrs+ ':' + mns + ':' + sec;
               }
           }
       },
       mounted() {
            this.startTimer()
        },
        unmounted() {
            this.stopTimer()
         },
        methods: {
            startTimer() {
                this.timer = setInterval(() => {
                this.currentTime--
                }, 1000)
            },
             stopTimer() {
                clearTimeout(this.timer)
            },
            toggleOpen(inf){
               this.LBisOpen = inf;
           },
           timeToString(){

           },

        },
        watch: {
            currentTime(time) {
                if (time === 0) {
                    this.stopTimer()
                    }
                }
            },
   }
</script>
<style lang="scss" scoped>
.gb-time{
    @apply w-auto h-auto fixed right-[8rem] p-2 font-monst text-2xl;
}
</style>
