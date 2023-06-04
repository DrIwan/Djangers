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

        props: ['title', 'icon',],
    }
</script>
