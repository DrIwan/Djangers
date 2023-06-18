<template>
    <glassBlock style="height: auto!important; padding: 0.8rem!important;" class="gb">
            <textBox style="margin: 0!important; width: 70%!important;"></textBox>
            <div class="btn-scales">
                <expBtnBlock
                    icon="scale"
                    @click="toggleModal"
                 ></expBtnBlock>
            </div>
            <checkBox class="ch"></checkBox>
    </glassBlock>
</template>
<script>
 export default{
        name: 'answerBlock',
        props: {
            'num': {
                type: Number,
                default: 1,
            }
        },
        data(){
            return{
                showModal: false,
            }
        },
        methods:{
            toggleModal(){
                this.showModal = true;
                this.$emit('toggleModal', this.showModal);
            },
        }
    }
</script>
<style lang="scss" scoped>
    .gb{
        @apply mb-5 flex flex-row items-center rounded-3xl;
        ::before{
            width: 2rem !important;
            height: 2rem !important;

        }
        .btn-scales{
            @apply ml-4 mr-4;
        }
        .ch{
            @apply flex flex-row justify-center items-center;
        }
    }
</style>
