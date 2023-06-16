<template>
    <div class="leftmenu-btn">
        <div class="lm-icon-btn">
            <span class="material-symbols-rounded">{{ icon }}</span>
        </div>
        <p class="item">
            {{title}}
        </p>
    </div>
</template>

<script>
    export default{
        name:'menuBarItem',
        props: {
            'title': String,
            'icon': String,
        }
    }
</script>
<style lang="scss" scoped>
//стили кнопки
.leftmenu-btn{
    @apply flex flex-row justify-start items-center mt-8 cursor-pointer w-full;
    .item{
        @apply cursor-pointer text-dark-blue font-monst ml-4 text-xl transition-all ease-linear duration-500 delay-1000;
    }
    .lm-icon-btn{
         @apply bg-white w-16 h-16 rounded-xl flex flex-row justify-center items-center text-dark-blue shadow-xl;
        span{
             @apply text-5xl;
        }
    }
    &:hover{
        @apply scale-110;
        .item,.lm-icon-btn{
             @apply text-sm-blue;
        }
        .lm-icon-btn{
            @apply bg-hover-btn-rect;
        }
    }
}

//стили активной кнопки
.active-lm-btn{
    .item,.lm-icon-btn{
        @apply text-active-btn-t
    }
    .lm-icon-btn{
        @apply bg-active-btn-rect;
    }
}

.hidden-leftBar{
    .leftmenu-btn{
        .item{
            @apply hidden;
        }
    }
}
</style>
