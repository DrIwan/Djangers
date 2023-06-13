<template>
    <div class="text-box">
        <input
        type="text"
        name=""
        required placeholder=" "
        v-bind:value="value"
        @input="value = $event.target.value"
        >
        <label>{{ title }}</label>
    </div>
</template>


<script>
    export default{
        name: 'textBox',
        props: ['title'],
        data(){
            return{
                value: ''
            }
        },
    }
</script>
<style lang="scss" scoped>
.text-box{
    @apply relative w-[60%] mb-7;
    input{
        @apply w-full py-2 text-dark-blue-3 mb-7 border-b-2 border-b-white bg-trans outline-none appearance-none;
    }
    label{
        @apply absolute top-0 left-0 py-2 text-xl text-dark-blue-3 pointer-events-none duration-[0.5s];
    }
    input:focus ~ label,input:not(:placeholder-shown) ~label{
        @apply top-[-20px] left-0 text-sm-blue text-xs;
    }
}
.reg-box{
    .text-box{
        @apply mb-3;
    }
}
</style>
