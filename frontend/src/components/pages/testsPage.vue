<template>
     <leftMenuBar   @toggleClass="toggleOpen($event)"></leftMenuBar>
     <div :class="LBisOpen? 'container': 'container big-container'">
            <headerPg></headerPg>
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


