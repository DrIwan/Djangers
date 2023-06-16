<template>
    <!-- Это список -->
    <buttonWorker
        v-for="item in array"
    >
        {{item.name}}
    </buttonWorker>
    <!-- Это кнопочки для перемещения по страничкам-->
    <div class="btns">
        <button
            class=""
            v-for="p in pagination.pages"
            @click.prevent="setPage(p)"
        >
            {{p}}
        </button>
    </div>
</template>

  <script>
import { slice, range } from 'lodash'

    export default {
    data: {
        array:
        [
            { id: 1, name: 123123 },
            { id: 2, name: 123123 },
            { id: 3, name: 123123 },
        ],
        perPage: 3,
        pagination: {},

    },
    computed: {
        collection(){
            return this.paginate(this.data);
        }
    },
    methods:{
        setPage(p){
            this.pagination = this.paginator(this.data.length, p);
        },
        paginate(data){
            return slice(data, this.pagination.startIndex, this.pagination.endIndex + 1);
        },
        paginator(totalItems, currentPage){
            var startIndex = (currentPage -1) * perPage;
            endIndex = Math.min(startIndex + this.perPage -1, totalItems -1);

            return{
                currentPage: currentPage,
                startIndex: startIndex,
                endIndex: endIndex,
                pages: range(1, Math.ceil(totalItems / this.perPage) + 1),
            };
        }
    },
    created(){
        this.setPage(1)
    },
}
  </script>
