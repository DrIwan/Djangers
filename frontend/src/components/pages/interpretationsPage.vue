<template>
    <leftMenuBar numActive="1"  @toggleClass="toggleOpen($event)"></leftMenuBar>
    <div :class="LBisOpen? 'container': 'container big-container'">
        <headerPg numActive="1"></headerPg>
        <div class="header-test">
            <h2 class="name-page" style="margin: 0;">Интерпретации</h2>

            <div v-if="true" class="express-btn">
                    <span v-on:click="this.$router.push('/newInter')" class="material-symbols-rounded">add</span>
                    <span v-on:click="this.$router.push('/newInter')" class="material-symbols-rounded">refresh</span>
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
         <glassBlock class="gl" style="height: 70vh!important;">
                <div class="up-menu">
                    <scrollBox class="mini-menu" left>
                            <div v-for="item in interpretationNames" :key="item.id">
                            <buttonTest
                                v-if="item.opn === opCh"
                                :title="item.name"
                                @click="$router.push(`/interpretation/${item.id}`)"
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
    </div>
    <modalWind ref="hideWind" title="Предупреждение" text="Вы уверены, что хотите скрыть интерпретацию?"></modalWind>
    <modalWind ref="publishWind" title="Предупреждение" text="Вы уверены, что хотите опубликовать интерпретацию?"></modalWind>
    <modalWind ref="draftWind" title="Предупреждение" text="Вы уверены, что хотите сделать интерпретацию черновиком?"></modalWind>
    <modalWind ref="delWind" title="Предупреждение" text="Вы уверены, что хотите удалить? После удаления интерпретацию не возобновить."></modalWind>
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
        }

    }

}
</style>
