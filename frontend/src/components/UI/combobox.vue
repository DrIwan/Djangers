<template>
    <div class="combo-box" v-on:click="openMenu">
                    <select
                        required placeholder=" "
                        :class="isOpen? 's-main' : 's-main hidden'">
                            <option value="man">Мужской</option>
                            <option value="woman">Женский</option>
                    </select>
                    <div class="select-b">
                        Мужской
                    </div>
                    <ul class="custom-select hidden">
                        <li class="custom-option active-option" rel="man" v-on:click="onClickmenu"><div class="line"></div>Мужской</li>
                        <li class="custom-option" rel="woman" v-on:click="onClickmenu"><div class="line l-2"></div>Женский</li>
                    </ul>

                    <div class="icon-select"><span class="material-symbols-rounded">expand_more</span></div>
                    <label>{{ title }}</label>
    </div>
</template>
<style scoped>
    @import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,500,0,0);
</style>
<script>
    export default{
        name: 'comboBox',
        data(){
            return{
               isOpen: false,
            }
        },
        methods:{
            onClickmenu(){

            },
            openMenu(){

            }
        },
        props: ['title']

    }
</script>
