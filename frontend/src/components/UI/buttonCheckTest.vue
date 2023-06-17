<template>
 <glassBlock :class="activeBtn?'active':'ch-block'" v-on:click="change">
    <h2>{{nameSubtest}}</h2>
    <checkBox ref="mych"></checkBox>
 </glassBlock>
</template>
<script>
export default{
        name: 'buttonCheckTest',
        props:{
            'nameSubtest':{
                type:String,
                default: 'Субтест'
            }
        },
        activeBtn:{
            type:Boolean
        },
        data(){
            return{
                activeBtn:false
            }
        },
        methods:{
            change(){
                this.$refs.mych.check = !this.$refs.mych.check;
                this.activeBtn = this.$refs.mych.check;
            }
        }

}
</script>
<style lang="scss" scoped>
 .ch-block,.active{
        @apply h-auto mb-5 last:mb-0 flex flex-row justify-between font-monst text-dark-blue pl-10 cursor-pointer;
        h2{
            @apply text-2xl;
        }
        ::before{
            width: 2rem !important;
            height: 2rem !important;
        }

 }
 .ch-block:hover{
    h2{
        @apply text-sm-blue;
    }
    ::before{
        @apply bg-pas-tabs/50;
    }

  }
  .active:hover{
    h2{
        @apply text-dark-fail-color;
    }
    ::before{
        border-color: rgb(164 82 138 / var(--tw-border-opacity)) !important;
        @apply border-[1px] border-solid bg-fail-color/30 flex flex-row justify-center items-center text-dark-fail-color;
    }
  }


</style>

