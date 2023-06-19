<template>
    <leftMenuBar numActive="1"  @toggleClass="toggleOpen($event)"></leftMenuBar>
    <div :class="LBisOpen? 'container': 'container big-container'">
       <headerPg numActive="1"></headerPg>
       <h2 class="name-page">Создание теста</h2>
       <div class="br-p-test">
           <p>Основные характеристики</p>
           <p>Субтесты</p>
           <p>Вопросы</p>
       </div>
       <form>
            <blockQuest
                v-for="qst in questions" :key="qst.num"
                :ind ="qst.num"
                 @toggleModal="sMsl($event)"
            ></blockQuest>
            <addQuest
            @click="additem"
            ></addQuest>
            <div class="flex flex-row justify-center">
                <buttonRg class="btn" style="width: 40%!important;" v-on:click="this.$router.push('/endCreateSubT')">Завершить добавление</buttonRg>
            </div>
       </form>
    </div>
    <modalWind
        v-if="showModal"
        :isOpen="showModal"
        @toggleOpenPrnt="sMsl($event)"
        ref="scalesWind"
        title="Шкалы"
        text="">
        <div class="h-[50vh] mb-3">
            <scrollBox>
                <buttonCheckTest nameSubtest="Шкала"></buttonCheckTest>
                <buttonCheckTest nameSubtest="Шкала"></buttonCheckTest>
                <buttonCheckTest nameSubtest="Шкала"></buttonCheckTest>
                <buttonCheckTest nameSubtest="Шкала"></buttonCheckTest>
                <buttonCheckTest nameSubtest="Шкала"></buttonCheckTest>
                <buttonCheckTest nameSubtest="Шкала"></buttonCheckTest>
                <buttonCheckTest nameSubtest="Шкала"></buttonCheckTest>
                <buttonCheckTest nameSubtest="Шкала"></buttonCheckTest>
            </scrollBox>
        </div>
    </modalWind>
</template>
<script>
export default{
    methods: {
        toggleOpen(inf) {
            this.LBisOpen = inf;
        },
        additem(){
            this.newItem.num = JSON.parse(JSON.stringify(this.index++));
            this.questions.push(this.newItem);
        },
        sMsl(sh){
            this.showModal = sh;
        },
    },
    data() {
        return {
            questions: [
                { num: 1, },
            ],
            index: 1,
            newItem: {num: 0},
            showModal: false,
        };
    }
}
</script>
<style lang="scss" scoped>
.add{
    @apply rounded-3xl;
}
.btn{
    @apply mb-4;
}
</style>
