<template>
     <leftMenuBar numActive="2"  @toggleClass="toggleOpen($event)"></leftMenuBar>
    <div :class="LBisOpen? 'container': 'container big-container'">
            <headerPg numActive="2"></headerPg>
            <h2 class="name-page">Попытка</h2>

    </div>
</template>

<script>
    export default{
        data(){
            return{
                LBisOpen: false,
            }
        },
        methods:{
            toggleOpen(inf){
                this.LBisOpen = inf;
            }
        },
    }
</script>
