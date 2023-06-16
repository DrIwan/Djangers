<template>
    <leftMenuBar numActive="1"  @toggleClass="toggleOpen($event)"></leftMenuBar>
    <div :class="LBisOpen? 'container': 'container big-container'">
        <headerPg numActive="1"></headerPg>
        <div class="header-test">
            <h2 class="name-page" style="margin: 0;">Субтесты</h2>

            <div v-if="true" class="express-btn">
                    <span v-on:click="this.$router.push('/')" class="material-symbols-rounded">add</span>
                    <span v-on:click="this.$router.push('/')" class="material-symbols-rounded">refresh</span>
                    <span v-on:click="this.$refs.delWind.toogleOpen()" class="material-symbols-rounded">delete</span>
                </div>
         </div>
         <glassBlock class="gl" style="height: 70vh!important;">
                <div class="up-menu">
                    <scrollBox class="mini-menu" left>
                            <div v-for="item in subTests" :key="item.id">
                            <buttonTest
                                v-if="item.opn === opCh"
                                :title="item.name"
                                @click="$router.push(`/subtest/${item.id}`)"
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
            <modalWind ref="delWind" title="Предупреждение" text="Вы уверены, что хотите удалить? После удаления субтест не возобновить."></modalWind>
    </div>
</template>
<script>
export default{
    data() {
        return {
            LBisOpen: false,
            opCh: 1,
            subTests:
            [
            {id: 1, name: "Маломальский субтест 1",opn:1},
            {id: 2, name: "Маломальский субтест 2", opn:2},
            {id: 3, name: "Маломальский субтест 3", opn:3},
            {id: 4, name: "Маломальский субтест 4", opn:2},
            {id: 5, name: "Маломальский субтест 5", opn:3},
            {id: 6, name: "Маломальский субтест 6", opn:1},
            {id: 7, name: "Маломальский субтест 7", opn:2},
            {id: 8, name: "Маломальский субтест 8", opn:3},
            {id: 9, name: "Маломальский субтест 9", opn:3},
            {id: 10, name: "Маломальский субтест 10", opn:2},
            ]
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
