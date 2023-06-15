<template>
    <leftMenuBar   @toggleClass="toggleOpen($event)"></leftMenuBar>
    <div :class="LBisOpen? 'container': 'container big-container'">
        <headerPg></headerPg>
        <div class="header-test">
            <h2 class="name-page" style="margin: 0;">Интерпретации</h2>

            <div class="express-btn">
                <span class="material-symbols-rounded">add</span>
                <span class="material-symbols-rounded">refresh</span>
                <span class="material-symbols-rounded">delete</span>
                <!--проверка фильтр на скрытые/др. вкладка-->
                <span v-if="opCh ===2" class="material-symbols-rounded">visibility_off</span>
                <span v-if="opCh !=2" class="material-symbols-rounded">visibility</span>
                <!--проверка фильтр на черновики/др. вкладка-->
                <span v-if="opCh ===3" class="material-symbols-rounded">inventory_2</span>
                 <span v-if="opCh !=3" class="material-symbols-rounded">outbox</span>
            </div>
         </div>
         <glassBlock class="gl" style="height: 70vh!important;">
                <div class="up-menu">
                    <scrollBox class="mini-menu">
                        <div class="content-menu">
                            <div v-for="item in interpretationNames" :key="item.id">
                            <buttonTest
                                v-if="item.opn === opCh"
                                :title="item.name"
                                @click="$router.push(`/interpretation/${item.id}`)"
                            ></buttonTest>
                            </div>
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
    </div>
</template>
<script>

export default{
    data() {
        return {
            LBisOpen: false,
            opCh: 1,
            interpretationNames: [{id: 1, name: "Любитель помидоров", opn: 1},{id: 2, name: "Любитель огурцов", opn: 2},{id: 3, name: "Любитель моркови", opn: 3},
            {id: 4, name: "Любитель капусты", opn: 1},{id: 5, name: "Любитель перцев", opn: 2},{id: 6, name: "Любитель свеклы", opn: 3},]
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
            direction: rtl;
            .content-menu{
                direction: ltr;
            }
        }

    }

}
</style>
