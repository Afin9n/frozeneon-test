<template>
    <div class="search-block">
            <v-text-field label="Enter package name" @keyup.enter.native="onSearch" v-model="searchValue"></v-text-field>
        <v-btn elevation="2" @click="onSearch"
        >Search
        </v-btn>
    </div>
</template>

<script>
    import store from '../store';
    import {FETCH_PACKAGE} from "../store/actions.types";

    export default {
        name: "Search",
        data() {
            return {
                searchValue: null,
            }
        },
        methods: {
            onSearch() {
                store.dispatch(FETCH_PACKAGE, this.searchValue)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .search-block {
        margin-bottom: 50px;
    }
</style>