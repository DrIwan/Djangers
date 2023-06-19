<template>
    <glassBlock style="height: auto!important; width: auto!important; padding: 0.5rem;" class="gb-time">{{stringTime()}}</glassBlock>
</template>

<script>
export default{
    name: 'timerTest',
    data(){
           return{
               currentTime: 5190,
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
