<template>
    <glassBlock style="height: auto !important;" class="gb">
        <div class="header-q">
            <p>Вопрос {{ num }} из {{ total }}</p>
            <glassBlock class="flag"><span class="material-symbols-rounded">mountain_flag</span></glassBlock>
        </div>
        <div :class="typeQuest? 'cont-q cont-line':'cont-q'">
            <div :class="typeQuest? 'gb-block':''">
                <img />
                <div class="title-q">{{ title }}</div>
            </div>
            <div v-if="!typeAnsw" class="ans-q">
                <checkBox title="saad"></checkBox>
                <checkBox title="saad"></checkBox>
                <checkBox title="saad"></checkBox>
                <checkBox title="saad"></checkBox>
            </div>
            <div v-else class="ans-q">

            </div>
        </div>
    </glassBlock>
</template>
<script>
export default {
    name:"blockAnsTest",
    props:{
        num:{
            type:Number,
            default:1
        },
        total:{
            type:Number,
            default:1
        },
        typeQuest:{
            type:Boolean,
            default:false
        },
        typeAnsw:{
            type:Boolean,
            default:false
        },
        title:{
            type:String,
            default:'Вопрос с текстовым ответом'
        }
    }

}
</script>
<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0);
.gb{
    @apply flex flex-col justify-center items-center mb-4;
}
.header-q{
    @apply flex flex-row justify-between items-center w-full;
    p{
        @apply font-monst text-2xl;
    }
    .flag{
        @apply w-10 h-10 flex flex-row justify-center items-center;
    }
}
.cont-q{
    @apply w-full flex flex-col justify-center items-center;
    .title-q{
        @apply font-monst text-2xl mb-4 font-bold;
    }
}
.gb-block{
    @apply flex flex-col justify-center items-center border-t-0 border-r-[2px] border-b-[2px] border-l-[1px] border-white shadow-lg w-1/2 h-auto rounded-xl font-monst text-left p-5 text-dark-blue;
    background: linear-gradient(303.7deg, rgba(255, 255, 255, 0.69) 0.17%, rgba(255, 255, 255, 0.49) 42.99%, rgba(255, 255, 255, 0.25) 98.03%);
    img{
        @apply w-72 h-72 rounded-2xl bg-light-blue mb-3;
    }
}
.cont-line{
    @apply flex flex-row;
}
.ans-q{
    @apply w-1/2 flex flex-col justify-center items-center;
    & > *{
        @apply mb-2;
    }
}
</style>
