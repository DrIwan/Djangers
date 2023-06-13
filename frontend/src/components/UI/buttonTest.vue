<template>
    <div class="block-test">
        <p class="title-test">{{ title }}</p>
        <button class="btn-test"><span class="material-symbols-rounded">arrow_forward</span></button>
    </div>
</template>
<!--СВОЙСТВО УСПЕШНО/ПРОВАЛЕНО (boolean)-->
<script>
 export default{
        name: 'buttonTest',
        props: ['title'],
    }
</script>
<style lang="scss" scoped>
.block-test{
    @apply cursor-pointer border-[1px] border-white shadow-lg w-full h-20 rounded-xl p-4 flex flex-row justify-between items-center mt-2 font-monst text-dark-blue;
    background: linear-gradient(303.7deg, rgba(255, 255, 255, 0.69) 0.17%, rgba(255, 255, 255, 0.49) 42.99%, rgba(255, 255, 255, 0.25) 98.03%);
    &:hover {
        @apply bg-gradient-to-r from-active-btn-rect/10 to-active-btn-rect/30 border-active-btn-rect -translate-y-1;
        .btn-test{
            @apply bg-gradient-to-r from-active-btn-rect/10 to-active-btn-rect/30 border-active-btn-rect;
         }
    }
    .title-test{
        @apply text-3xl w-10/12 truncate;
    }
    .btn-test{
        @apply border-[1px] border-white shadow-lg p-3 rounded-xl flex flex-row justify-center items-center;
        background: linear-gradient(303.7deg, rgba(255, 255, 255, 0.69) 0.17%, rgba(255, 255, 255, 0.49) 42.99%, rgba(255, 255, 255, 0.25) 98.03%);
    }
}
.success{
    @apply bg-gradient-to-r from-success-block/20 to-success-block/60 border-success-block;
    .title-test{
        @apply text-success-text;
    }
}
.fail{
    @apply bg-gradient-to-r from-fail-color/10 to-fail-color/30 border-fail-color;
    .title-test{
        @apply text-fail-color;
    }
}
.close{
    @apply bg-gradient-to-r from-active-btn-rect/10 to-active-btn-rect/30 border-active-btn-rect;
    .title-test{
        @apply text-close-color;
    }
}

</style>
