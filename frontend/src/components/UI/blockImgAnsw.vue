<template>
    <glassBlock :class="isAct?'ans-img-bl active':'ans-img-bl'" v-on:click="change" style="width: auto!important; height: auto!important;">
        <img :src=srcImg />
        <checkBox :title=checkTitle ref="mych"></checkBox>
    </glassBlock>
</template>
<script>
export default {
    name:"blockImgAnsw",
    props:{
        'checkTitle':{
            type:String,
            default:''
        },
        srcImg:{
            type:String,
            default:''
        }
    },
    isAct:{
        type:Boolean
    },
    data(){
        return{
            isAct:false
        }
    },
    methods:{
        change(){
            this.$refs.mych.check = !this.$refs.mych.check;
            this.isAct = this.$refs.mych.check;
        }
    }
}
</script>
<style lang="scss" scoped>
.ans-img-bl{
    @apply flex flex-col justify-center items-center;
    img{
        @apply w-72 h-72 mb-4 rounded-2xl bg-light-blue;
    }
    &:hover{
        --tw-shadow-color: rgb(131 168 215/ 0.3)!important;
        --tw-shadow: var(--tw-shadow-colored)!important;
        ::before{
            @apply bg-pas-tabs/50 flex flex-row justify-center items-center text-dark-fail-color;
        }
    }
}
.active{
    --tw-shadow-color: rgb(239 154 212 / 0.4)!important;
    --tw-shadow: var(--tw-shadow-colored)!important;
    &:hover{
        --tw-shadow-color: rgb(164 82 138/ 0.2)!important;
        --tw-shadow: var(--tw-shadow-colored)!important;
        ::before{
            border-color: rgb(164 82 138 / var(--tw-border-opacity)) !important;
            @apply border-[1px] border-solid bg-fail-color/30 flex flex-row justify-center items-center text-dark-fail-color;
        }
    }
}
</style>
