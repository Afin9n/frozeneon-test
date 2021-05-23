<template>
    <div>
        <v-data-table
                @click:row="openDetailsModal"
                :headers="headers"
                :items="versions"
                :items-per-page="10"
                class="package-table">
        </v-data-table>
        <DetailsModal @dialogClose="dialogClose" :dialog="dialog"></DetailsModal>
    </div>
</template>

<script>

    import {mapGetters} from 'vuex'
    import DetailsModal from './modals/DetailsModal'
    import store from "../store";
    import {FETCH_PACKAGE} from "../store/actions.types";

    export default {
        name: "Table",
        data() {
            return {
                headers: [
                    { text: 'Name', value: 'name', align: 'left', width: '50%' },
                    { text: 'Version', value: 'version', align: 'left' },
                ],
                dialog: false
            }
        },
        components:{
            DetailsModal
        },
        computed: {
            ...mapGetters([
                'versions'
            ])
        },
        methods: {
            openDetailsModal(value) {
                store.dispatch(FETCH_PACKAGE, `${value.name}@${value.version}`)
                .then(() => {
                    this.dialog = true;
                })
            },
            dialogClose(val) {
                this.dialog = val;
            }
        }
    }
</script>

<style lang="scss">
    .package-table {
        &:hover {
            cursor: pointer;
        }
    }

    .v-data-footer__select {
        margin-right: 0!important;
    }
</style>