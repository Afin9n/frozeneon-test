<template>
    <div class="search-block">
        <v-text-field ref="searchInput" label="Enter package name" @keyup.enter.native="onSearch"
                      v-model="search"></v-text-field>
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
    import {mapGetters} from 'vuex'
    import {FETCH_PACKAGE} from "../store/actions.types";

    export default {
        name: "Search",
        data() {
            return {
                search: null,
                showAlert: false,
                timeout: 2000,
                text: 'No data available for this request'
            }
        },
        computed: {
            ...mapGetters([
                'searchValue'
            ])
        },
        methods: {
            onSearch() {
                if (!this.search) {
                    return this.$refs.searchInput.focus();
                }
                if (this.search === this.searchValue) {
                    return null;
                }
                store.dispatch(FETCH_PACKAGE, this.search)
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