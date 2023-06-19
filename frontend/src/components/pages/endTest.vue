<template>
    <leftMenuBar numActive="1"  @toggleClass="toggleOpen($event)"></leftMenuBar>
    <div :class="LBisOpen? 'container': 'container big-container'">
           <headerPg numActive="1"></headerPg>
           <h2 class="name-page">Отправка ответов</h2>
           <glassBlock style="height: auto!important;" class="mb-4">
                <div class="h-[50vh]">
                    <scrollBox >
                        <answBlockEnt></answBlockEnt>
                        <answBlockEnt isAct></answBlockEnt>
                        <answBlockEnt isFlag></answBlockEnt>
                        <answBlockEnt></answBlockEnt>
                        <answBlockEnt isAct></answBlockEnt>
                        <answBlockEnt isAct></answBlockEnt>
                    </scrollBox>
                </div>
                <div class="w-full flex flex-row justify-center mt-4">
                    <buttonRg v-on:click="this.$router.push('/results')">Отправить</buttonRg>
                </div>
           </glassBlock>
    </div>
        <modalWind ref="entWind" title="Предупреждение" text="В тесте присутствуют вопросы, в которых не даны ответы. Данные вопросы будут оценены в 0 баллов. Подтвердить отправку?"></modalWind>
</template>
<script>
export default{
    data() {
        return {
            LBisOpen: false,
        };
    },
    methods: {
        toggleOpen(inf) {
            this.LBisOpen = inf;
        }
    }

}
</script>

