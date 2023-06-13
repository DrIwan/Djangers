<template>
   <glassBlock class="ch-block">
        <img :src=picture_src :class="isUser? 'icon-user': 'hidden'"/>
        <h2 class="name-user">{{ name_worker }}</h2>
   </glassBlock>
</template>
<!--для заявок isUser=false-->
<!--для др.вкладок isUser=true-->
<script>
    export default{
        name: 'buttonWorker',
        isUser :{
                type: Boolean,
                value: false,
        },
        data(){
            return{
                isUser: true
            }
        },
        props:{
            'picture_src': String,
            'name_worker':{
                type: String,
                default: 'Королева Мария Михайловна'
            },
        }
    }
</script>
<style lang="scss" scoped>
.ch-block{
    @apply cursor-pointer h-auto mb-5 last:mb-0 flex flex-row justify-start items-center font-monst text-dark-blue;
    .icon-user{
        @apply w-12 h-12 rounded-full object-fill;
    }
    .name-user{
        @apply text-xl pl-5;
    }

}
</style>
