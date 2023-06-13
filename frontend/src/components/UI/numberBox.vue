<template>
    <div class="text-box number-b">
        <input
            type="number"
            name=""
            min="14"
            required placeholder=" "
            v-bind:value="num"
            @input="num = $event.target.value"
        >
        <label>{{ title}}</label>

        <div class="icon-inp ic-2" v-on:click="change"><span class="material-symbols-rounded">expand_more</span></div>
        <div class="icon-inp" v-on:click="change1"><span class="material-symbols-rounded">expand_less</span></div>


    </div>
</template>
<script>
    export default{
        name: 'numberBox',
        data(){
            return{
                num:0
            }
        },
        methods:{
            change1(){
                this.num+=1;
            },
            change(){
                if (this.num>0)
                    this.num-=1;
            }
        },
        props: ['title'],
    }
</script>
<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,500,0,0);
.number-b{
    input::-webkit-inner-spin-button {
        @apply appearance-none;
    }
    .icon-inp{
        @apply absolute top-0 right-0 cursor-pointer;
        span{
            @apply text-2xl text-dark-blue-3;
        }
    }
    .ic-2{
        @apply absolute top-4 right-0;
    }
}
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
</style>
