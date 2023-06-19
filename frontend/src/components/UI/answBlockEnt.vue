<template>
    <glassBlock :class="isAct?'active':isFlag?'flag':'gb'" style="height: auto!important;" class="mb-4 flex flex-row justify-between items-center">
        <h2>{{ title }}</h2>
        <span v-if="isFlag" class="material-symbols-rounded">mountain_flag</span>
        <span v-if="isAct" class="material-symbols-rounded">check_box</span>
        <span v-if="!isAct && !isFlag" class="material-symbols-rounded">check_box_outline_blank</span>
    </glassBlock>
</template>
<script>
export default{
    name:'answBlockEnt',
    props:{
        title: {
            type:String,
            default:'Ответ'
        },
        isAct:{
            type:Boolean,
            default:false
        },
        isFlag:{
            type:Boolean,
            default:false
        },
    }
}
</script>
<style lang="scss" scoped>
    h2{
        @apply font-monst font-black text-2xl;
    }
    .gb{
        @apply shadow-light-blue/10;
    }
    span{
        @apply text-4xl;
    }
    .active{
        background: linear-gradient(303.7deg, rgba(218, 238, 206, 0.74) 0.17%, rgba(218, 238, 206, 0.48) 42.99%, rgba(218, 238, 206, 0.18) 98.03%) !important;
       @apply shadow-success-block/20 text-success-text;
    }
    .flag{
        background: linear-gradient(303.7deg, rgba(242, 220, 235, 0.74) 0.17%, rgba(242, 220, 235, 0.46) 42.99%, rgba(242, 220, 235, 0.18) 98.03%);
        @apply shadow-fail-color/20 text-dark-fail-color;
    }
</style>
