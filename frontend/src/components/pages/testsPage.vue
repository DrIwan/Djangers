<template>
     <leftMenuBar numActive="1"  @toggleClass="toggleOpen($event)"></leftMenuBar>
     <div :class="LBisOpen? 'container': 'container big-container'">
            <headerPg numActive="1"></headerPg>
            <div class="header-test">
                <h2 class="header-page">Тесты</h2>
                    <!--проверка статуса-->
                <div v-if="true" class="express-btn">
                    <span v-on:click="this.$router.push('/')" class="material-symbols-rounded">add</span>
                    <span v-on:click="this.$router.push('/')" class="material-symbols-rounded">refresh</span>
                    <span v-on:click="this.$refs.delWind.toogleOpen()" class="material-symbols-rounded">delete</span>
                    <!--проверка фильтр на скрытые/др. вкладка-->
                    <span
                    v-if="opCh ===2"
                    v-on:click="this.$refs.publishWind.toogleOpen()"
                    class="material-symbols-rounded">visibility</span>
                    <span
                    v-else
                    v-on:click="this.$refs.hideWind.toogleOpen()"
                    class="material-symbols-rounded">visibility_off</span>
                    <!--проверка фильтр на черновики/др. вкладка-->
                    <span
                    v-if="opCh ===3"
                    v-on:click="this.$refs.draftWind.toogleOpen()"
                    class="material-symbols-rounded">outbox</span>
                    <span
                    v-else
                    v-on:click="this.$refs.publishWind.toogleOpen()"
                    class="material-symbols-rounded">inventory_2</span>
                </div>
            </div>
            <!--проверка статуса-->
            <glassBlock v-if="true" class="gl" style="height: 70vh!important;">
                <div class="up-menu">
                    <scrollBox class="mini-menu" left>

                            <div v-for="item in tests" :key="item.id">
                            <buttonTest
                                v-if="item.opn === opCh"
                                :title="item.name"
                                @click="$router.push(`/test/${item.id}`)"
                            ></buttonTest>
                            </div>


                    </scrollBox>
                    <div class="line"></div>
                    <ul class="tabs">
                        <li
                            :class="opCh ===1? 'active': ''"
                             @click="opChCl(1)"
                         > Опубликовано</li>
                        <li
                            :class="opCh ===2? 'active': ''"
                            @click="opChCl(2)"
                        >Скрытые</li>
                        <li
                            :class="opCh ===3? 'active': ''"
                            @click="opChCl(3)"
                        >Черновики</li>
                    </ul>
                </div>

                <!--пейджер добавить-->
            </glassBlock>
            <glassBlock v-if="false" class="gl" style="height: 70vh!important;">
                <scrollBox class="mini-menu" left>
                    <div v-for="item in tests" :key="item.id">
                            <buttonTest
                                v-if="item.opn === opCh"
                                :title="item.name"
                                @click="$router.push(`/test/${item.id}`)"
                            ></buttonTest>
                            </div>
                </scrollBox>
                <!--пейджер добавить-->
            </glassBlock>
        </div>
        <modalWind ref="hideWind" title="Предупреждение" text="Вы уверены, что хотите скрыть тест?"></modalWind>
        <modalWind ref="publishWind" title="Предупреждение" text="Вы уверены, что хотите опубликовать тест?"></modalWind>
        <modalWind ref="draftWind" title="Предупреждение" text="Вы уверены, что хотите сделать тест черновиком?"></modalWind>
        <modalWind ref="delWind" title="Предупреждение" text="Вы уверены, что хотите удалить? После удаления тест не возобновить."></modalWind>
</template>

<script>
export default{
    data() {
        return {
            LBisOpen: false,
            opCh: 1,
            tests:
            [{id: 1, name: "Маломальский тест 1",opn:1},
            {id: 2, name: "Маломальский тест 2", opn:2},
            {id: 3, name: "Маломальский тест 3", opn:3},
            {id: 4, name: "Маломальский тест 4", opn:2},
            {id: 5, name: "Маломальский тест 5", opn:3},
            {id: 6, name: "Маломальский тест 6", opn:1},
            {id: 7, name: "Маломальский тест 7", opn:2},
            {id: 8, name: "Маломальский тест 8", opn:3},
            {id: 9, name: "Маломальский тест 9", opn:3},
            {id: 10, name: "Маломальский тест 10", opn:2},]
        };
    },
    methods: {
        toggleOpen(inf) {
            this.LBisOpen = inf;
        },
        opChCl(ind){
            this.opCh = ind;
        }
    },
}
</script>
<style lang="scss" scoped>
.gl{
    @apply mt-4;
    .up-menu{
        @apply h-full flex flex-row;
        .mini-menu{
            @apply w-[75%];
        }

    }

}

.header-page{
    @apply font-monst font-black text-5xl text-left text-dark-blue;
}
</style>

