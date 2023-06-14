<template>
     <leftMenuBar   @toggleClass="toggleOpen($event)"></leftMenuBar>
    <div :class="LBisOpen? 'container': 'container big-container'">
        <headerPg></headerPg>
        <h2 class="name-page">Личный кабинет</h2>
        <div class="sub-label">Личные данные-редактирование</div>
        <glassBlock class="gl" style="height: 70vh !important; padding: 4rem;">

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
.sub-label{
    @apply font-monst text-left text-dark-blue text-xl mb-3;
}
</style>
