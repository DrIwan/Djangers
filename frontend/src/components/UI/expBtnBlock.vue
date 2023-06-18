<template>
    <div class="ctrl-box">
        <span
        class="material-symbols-rounded">{{icon}}</span>
    </div>
</template>
<script>
export default{
        name: 'expBtnBlock',
        props:{
            'icon':{
                type: String,
                default: ''
            }
        }
    }
</script>
<style lang="scss" scoped>
 .ctrl-box{
    @apply w-full flex flex-row justify-end;
    span{
        @apply bg-white p-2 rounded shadow-[inset_6px_8px_4px] shadow-[#000]/10 cursor-pointer;
    }
}
</style>
