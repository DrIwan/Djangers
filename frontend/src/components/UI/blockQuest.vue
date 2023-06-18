<template>
    <glassBlock style="height: auto!important; padding: 3rem; margin-bottom: 2rem;">
        <div class="header-quest">
            <h2>Вопрос {{ num }}</h2>
        </div>
        <div class="main-set-quest">
            <imageChange></imageChange>
            <div class="text-cont">
                <h2>Содержание</h2>
                <textBox style="width: 80%!important;"></textBox>
                <div class="cont-set">
                    <div class="set-ans">
                        <answerBlock
                            v-for="item in answers" :key="item.num"
                            :num="item.num"
                            @toggleModal="sMsl($event)"
                        ></answerBlock>
                        <addQuest
                            @click="additem"
                        ></addQuest>
                    </div>
                    <div class="add-set">
                        <checkBox title="Множество"></checkBox>
                        <checkBox title="Обязательный"></checkBox>
                    </div>
                </div>
            </div>
        </div>
    </glassBlock>
</template>
<script>
export default{
        name: 'blockQuest',
        props:['ind'],
        data(){
            return{
                newItem: {num: 0},
                answers: [{num:1,}],
                index: 1,
                showModal: false,
            }
        },
        methods:{
            additem(){
                this.newItem.num = JSON.parse(JSON.stringify(this.index++));
                this.answers.push(this.newItem);
            },
            sMsl(sh){
                this.showModal = sh;
                this.$emit('toggleModal', this.showModal);
            },

        },
    }
</script>
<style lang="scss" scoped>
.header-quest{
    @apply flex flex-row justify-between items-center mb-5;
    h2{
        @apply text-2xl w-3/4 font-bold;
    }
}
.main-set-quest{
    @apply flex flex-row;
    .text-cont{
        @apply w-[60%] pl-5;
        h2{
            @apply text-2xl font-bold;
        }
    }
}
.cont-set{
    @apply w-full flex flex-row;
    .set-ans{
        @apply w-1/2;

    }
    .add-set{
        @apply w-1/2 pl-10;
    }
}
</style>

