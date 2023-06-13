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
                            <buttonTest title="Субтест" style="margin: 0 !important;"></buttonTest>
                            <buttonTest title="Субтест"></buttonTest>
                            <buttonTest title="Субтест"></buttonTest>
                            <buttonTest title="Субтест"></buttonTest>
                            <buttonTest title="Субтест"></buttonTest>
                            <buttonTest title="Субтест"></buttonTest>
                            <buttonTest title="Субтест"></buttonTest>
                        </div>

                    </scrollBox>
                    <div class="line"></div>
                    <ul class="tabs">
                        <li class="active">Опубликовано</li>
                        <li>Скрытые</li>
                        <li>Черновики</li>
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
        };
    },
    methods: {
        toggleOpen(inf) {
            this.LBisOpen = inf;
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
