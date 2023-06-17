<template>
   <glassBlock class="ch-block">
        <div class="ico">
            <img :src=picture_src :class="isUser && picture_src!=''? 'icon-user': 'hidden'"/>
            <div :class="picture_src!=''?'hidden':'def-img'"></div>
        </div>
        <h2 class="name-user">{{ worker }}</h2>
   </glassBlock>
</template>
<!--для заявок isUser=false-->
<!--для др.вкладок isUser=true-->
<script>
    export default{
        name: 'buttonWorker',
        props:{
            'picture_src': {
                type: String,
                default: ''
            },
            'worker':{
                type: String,
                default: 'Королева Мария Михайловна'
            },
            isUser: Boolean,
        }
    }
</script>
<style lang="scss" scoped>
.ch-block{
    @apply cursor-pointer h-auto mb-5 /*last:mb-0*/ flex flex-row justify-start items-center font-monst text-dark-blue;
    .icon-user{
        @apply w-12 h-12 rounded-full object-fill;
    }
    .ico{
        @apply w-12 h-12 rounded-full;
    }
    .def-img{
        @apply w-12 h-12 bg-white rounded-full;
    }
    .name-user{
        @apply text-xl pl-5;
    }

}
</style>
