<template>
    <glassBlock style="height: auto !important;" class="gb">
        <div class="header-q">
            <p>Вопрос {{ num }} из {{ total }}</p>
            <glassBlock v-on:click="this.isAct=!this.isAct" :class="isAct?'flag act-flag':'flag'"><span class="material-symbols-rounded">mountain_flag</span></glassBlock>
        </div>
        <div v-if="typeQuest && typeAnsw" class="cont-q2 mt-4">
            <div class="ans-img-q mb-4">
                <img />
                <div class="title-q">{{ title }}</div>
            </div>
            <div class="flex flex-row w-full flex-wrap justify-center items-center ">
                <blockImgAnsw class="mr-4 mb-4" checkTitle="saad"></blockImgAnsw>
                <blockImgAnsw class="mr-4 mb-4" checkTitle="saad"></blockImgAnsw>
                <blockImgAnsw class="mr-4 mb-4" checkTitle="saad"></blockImgAnsw>
                <blockImgAnsw class="mr-4 mb-4" checkTitle="saad"></blockImgAnsw>
            </div>
        </div>
        <div v-else :class="typeQuest? 'cont-q cont-line':'cont-q'">
            <div :class="typeQuest? 'gb-block dp':'dp'">
                <img />
                <div class="title-q">{{ title }}</div>
            </div>
            <div v-if="!typeAnsw && clickT" class="ans-q">
                <checkBox title="saad"></checkBox>
                <checkBox title="saad"></checkBox>
                <checkBox title="saad"></checkBox>
                <checkBox title="saad"></checkBox>
            </div>
            <div v-else-if="clickT && typeAnsw" :class="typeQuest? 'ans-q':'flex flex-row flex-wrap w-full justify-center items-center'">
                <blockImgAnsw class="mr-4 mb-4" checkTitle="saad"></blockImgAnsw>
                <blockImgAnsw class="mr-4 mb-4" checkTitle="saad"></blockImgAnsw>
                <blockImgAnsw class="mr-4 mb-4" checkTitle="saad"></blockImgAnsw>
                <blockImgAnsw class="mr-4 mb-4" checkTitle="saad"></blockImgAnsw>
            </div>
            <div v-else-if="!clickT && !gragDrop" class="ans-q">
                <textBox></textBox>
            </div>
            <div v-else-if="!clickT && gragDrop" class="ans-q">
                <div></div>
            </div>
        </div>
    </glassBlock>
</template>
<script>
export default {
    name:"blockAnsTest",
    isAct:{
            type: Boolean,
            value: false,
        },
    data(){
        return{
            isAct: false,
        }
    },
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
        clickT:{
            type:Boolean,
            default:false
        },
        gragDrop:{
            type:Boolean,
            default:false
        },
        title:{
            type:String,
            default:'Верно ли, что иногда вы настолько полны энергии, что все горит в руках, а иногда вы чувствуете сильную вялость?'
        }
    }

}
</script>
<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0);

.gb{
    @apply flex flex-col justify-center items-center mb-4;
}
.dp{
    @apply w-full break-words mt-4;
}
.header-q{
    @apply flex flex-row justify-between items-center w-full;
    p{
        @apply font-monst text-2xl;
    }
    .flag{
        @apply w-10 h-10 flex flex-row justify-center items-center;
        &:hover{
            @apply text-sm-blue shadow-light-blue/20 bg-light-blue/10 scale-125;
        }
    }
    .act-flag{
        @apply text-dark-fail-color bg-[#F2DCEB] shadow-[#F2DCEB];
    }
}
.cont-q{
    @apply w-full flex flex-col justify-center items-center;
    .title-q{
        @apply font-monst text-2xl mb-4 font-bold text-center;
    }
}
.cont-q2{
    @apply w-full flex flex-row justify-center items-center flex-wrap;
    .title-q{
        @apply font-monst text-2xl mb-4 font-bold text-center;
    }
    .ans-img-q{
        @apply flex flex-col justify-center items-center border-t-0 border-r-[2px] border-b-[2px] border-l-[1px] border-white shadow-lg w-full h-auto rounded-xl font-monst text-left p-5 text-dark-blue;
        background: linear-gradient(303.7deg, rgba(255, 255, 255, 0.69) 0.17%, rgba(255, 255, 255, 0.49) 42.99%, rgba(255, 255, 255, 0.25) 98.03%);
        img{
            @apply w-[90%] h-72 rounded-2xl bg-light-blue mb-3;
        }
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
