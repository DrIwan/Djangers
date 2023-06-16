<template>
    <leftMenuBar numActive="1"  @toggleClass="toggleOpen($event)"></leftMenuBar>
    <div :class="LBisOpen? 'container': 'container big-container'">
        <headerPg numActive="1"></headerPg>
        <h2 class="name-page">Создание шкалы</h2>
        <glassBlock class="gl" style="height: 70vh !important; padding: 4rem;">
            <form class="formCr">
                <h2 class="label-formCr">Название</h2>
                <textBox class="inp-formCr"></textBox>
                <h2 class="label-formCr">Описание</h2>
                <textBox class="inp-formCr"></textBox>
                <div class="num-inp-gr">
                    <div>
                        <h2 class="label-formCr">Минимальное значение</h2>
                        <numberBox class="inp-formCr"></numberBox>
                    </div>
                    <div>
                        <h2 class="label-formCr">Максимальное значение</h2>
                        <numberBox class="inp-formCr"></numberBox>
                    </div>
                </div>
                <div class="btnGr-formCr">
                    <buttonRg>Добавить</buttonRg>
                    <buttonRg>Отмена</buttonRg>
                </div>
            </form>
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
.formCr{
    @apply w-full;
    .label-formCr{
        @apply text-xl font-monst font-bold;
    }
    .inp-formCr{
        @apply mb-0 w-[60%];
        input{
            @apply mb-0;
        }
    }
    .btnGr-formCr{
        @apply flex flex-row w-full justify-center;
        .form-btn{
            @apply last:ml-7;
        }
    }
    .num-inp-gr{
        @apply flex flex-row w-full justify-between mb-7;
        div{
            @apply w-[45%];
            .inp-formCr{
                @apply w-full;
            }
        }
    }


}
</style>
