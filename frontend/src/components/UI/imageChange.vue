<template>
    <div class="img-ch">
        <input class="img-input" type="file" id="avatar" name="avatar" accept="image/png, image/jpeg">
        <img :src=picture_src class="img-icon"/>
        <div class="focus">
            <span class="material-symbols-rounded">add</span>
        </div>
    </div>
</template>
<script>
export default{
        name: 'imageChange',
        props:{
            'picture_src': {
                type: String,
            }
        }
    }
</script>
<style lang="scss" scoped>
  @import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,500,0,0);
.img-ch{
    @apply flex flex-row justify-center items-center w-[400px] h-[400px];
    & > *{
        @apply absolute;
    }
    .img-input{
        @apply rounded-2xl w-[400px] h-[400px];
    }
    .img-icon{
        @apply rounded-2xl w-[400px] h-[400px] pointer-events-none;
    }
    .focus{
        @apply hidden rounded-2xl pointer-events-none text-white border-white border-4 w-[350px] h-[350px] border-dashed;
        span{
            @apply text-7xl;
        }
    }
    &:hover{
        .img-icon{
             @apply brightness-50;
        }
        .focus{
            @apply flex flex-col justify-center items-center;
        }
    }
}
</style>
