<template>
    <glassBlock style="height: auto!important; padding: 3rem; margin-bottom: 2rem;">
        <div class="header-quest">
            <h2>Вопрос {{ num }}</h2>
        </div>
        <div class="main-set-quest">
            <imageChange></imageChange>
            <div class="text-cont">
                <h2>Содержание</h2>
                <textBox style="width: 80%!important;"></textBox>
                <div class="cont-set">
                    <div class="set-ans">
                        <answerBlock></answerBlock>
                        <addQuest></addQuest>
                    </div>
                    <div class="add-set">
                        <checkBox title="Множество"></checkBox>
                        <checkBox title="Обязательный"></checkBox>
                    </div>
                </div>
            </div>
        </div>
    </glassBlock>
</template>
<script>
export default{
        name: 'blockQuest',
        props:{
            'num':{
                type: String,
                default: '1'
            }
        }
    }
</script>
<style lang="scss" scoped>
.header-quest{
    @apply flex flex-row justify-between items-center mb-5;
    h2{
        @apply text-2xl w-3/4 font-bold;
    }
}
.main-set-quest{
    @apply flex flex-row;
    .text-cont{
        @apply w-[60%] pl-5;
        h2{
            @apply text-2xl font-bold;
        }
    }
}
.cont-set{
    @apply w-full flex flex-row;
    .set-ans{
        @apply w-1/2;

    }
    .add-set{
        @apply w-1/2 pl-10;
    }
}
</style>

