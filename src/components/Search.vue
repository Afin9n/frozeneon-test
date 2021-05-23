<template>
    <div class="search-block">
        <v-text-field ref="search" label="Enter package name" @keyup.enter.native="onSearch"
                      v-model="searchValue"></v-text-field>
        <v-btn elevation="2" @click="onSearch">Search</v-btn>
        <v-snackbar
                v-model="showAlert"
                :timeout="timeout"
                color="red"
                absolute
                right
                top >
            {{ text }}
        </v-snackbar>
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
                showAlert: false,
                timeout: 2000,
                text: 'No data available for this request'
            }
        },
        methods: {
            onSearch() {
                if (!this.searchValue) {
                    return this.$refs.search.focus();
                }
                store.dispatch(FETCH_PACKAGE, this.searchValue)
                    .catch(() => {
                        this.showAlert = true;
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .search-block {
        margin-bottom: 50px;
    }
</style>