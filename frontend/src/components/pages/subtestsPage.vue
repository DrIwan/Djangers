<template>
    <leftMenuBar   @toggleClass="toggleOpen($event)"></leftMenuBar>
    <div :class="LBisOpen? 'container': 'container big-container'">
        <headerPg></headerPg>
        <div class="header-test">
            <h2 class="name-page" style="margin: 0;">Субтесты</h2>

            <div class="express-btn">
                <span class="material-symbols-rounded">add</span>
                <span class="material-symbols-rounded">refresh</span>
                <span class="material-symbols-rounded">delete</span>
            </div>
         </div>
         <glassBlock class="gl" style="height: 70vh!important;">
                <div class="up-menu">
                    <scrollBox class="mini-menu">
                        <div class="content-menu">
                            <div v-for="item in subTests" :key="item.id">
                            <buttonTest
                                v-if="item.opn === opCh"
                                :title="item.name"
                                @click="$router.push(`/subtest/${item.id}`)"
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
            subTests:  [{id: 1, name: "Маломальский субтест 1",opn:1},
            {id: 2, name: "Маломальский субтест 2", opn:2},
            {id: 3, name: "Маломальский субтест 3", opn:3},
            {id: 4, name: "Маломальский субтест 4", opn:2},
            {id: 5, name: "Маломальский субтест 5", opn:3},
            {id: 6, name: "Маломальский субтест 6", opn:1},
            {id: 7, name: "Маломальский субтест 7", opn:2},
            {id: 8, name: "Маломальский субтест 8", opn:3},
            {id: 9, name: "Маломальский субтест 9", opn:3},
            {id: 10, name: "Маломальский субтест 10", opn:2},]
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
