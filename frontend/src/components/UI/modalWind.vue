<template>
    <section :class="opn?'shadow-box':'hidden'">
        <div class="modal-box">
            <h2>{{ title }}</h2>
            <p>{{text }}</p>
            <slot>

            </slot>
            <div class="btn-gr">
                <buttonRg v-on:click="toogleOpen">ОК</buttonRg>
                <buttonRg v-on:click="toogleOpen">ОТМЕНА</buttonRg>
            </div>
        </div>
    </section>
</template>
<script>
    export default{
        name:'modalWind',
        data(){
            return{
                opn: this.isOpen,
            }
        },
        props: {
            'title': {
                type: String,
                default: 'Предупреждение'
            },
            'text': {
                type: String,
                default: 'Вы уверены, что хотите опубликовать тест?'
            },
            'isOpen':{
                type: Boolean,
                default: false,
            }
        },

        methods:{
            toogleOpen(){
                this.opn = !this.opn;
                this.$emit('toggleOpenPrnt', this.opn);
            },
        }
    }
</script>
<style lang="scss" scoped>
.shadow-box{
    @apply w-screen h-screen bg-[#000]/50 absolute top-0 left-0 z-20 flex flex-row justify-center items-center animate-sm;
    .modal-box{
        @apply w-1/2 h-auto bg-white rounded-2xl p-10 font-monst;
        h2{
            @apply font-black text-center text-5xl text-dark-blue mb-7;
        }
        p{
            @apply text-xl mb-7;
        }
        .btn-gr{
            @apply flex flex-row w-full justify-center;
            button{
                @apply ml-3;
            }
        }
    }
}
</style>
