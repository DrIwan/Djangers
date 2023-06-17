<template>
    <div class="check-box">
        <input type="checkbox" :value=val name="ch" v-model="check">
        <label for="ch">{{ title }}</label>
    </div>
</template>
<script>
    export default{
        name: 'checkBox',
        props:{
            'title':{
                type: String,
                default:''
            },
            'val':{
                type: String,
                default:''
            }
        },
        data(){
            return{
                check: false
            }
        },
    }
</script>
<style lang="scss" scoped>
    .check-box{
        input{
            @apply absolute z-0 opacity-0 w-6 h-6 rounded;
        }
        label{
            @apply font-monst font-medium text-2xl;
        }
        input+label{
            @apply inline-flex items-center select-none;
        }
        input+label::before{
            content: '';
            @apply inline-block w-6 h-6 shrink-0 flex-grow-0 border-none rounded mr-2 bg-pas-tabs/30;
        }

        input:not(:checked):hover+label{
            @apply text-active-btn-t;
        }
        input:not(:checked):hover+label::before{
            @apply bg-pas-tabs/50;
        }
        input:checked+label::before{
            content: '\2714';
            @apply border-[1px] border-fail-color border-solid bg-fail-color/30 flex flex-row justify-center items-center;
        }
        input:checked+label{
            @apply text-fail-color;

        }
        input:checked:hover+label::before{
            content: '\2714';
            @apply border-[1px] border-dark-fail-color border-solid bg-fail-color/30 flex flex-row justify-center items-center text-dark-fail-color;
        }
        input:checked:hover+label{
            @apply text-dark-fail-color;

        }
    }
</style>
