<template>
    <v-row justify="center">
        <v-dialog
                v-model="dialogState"
                :width="modalWidth">
            <v-card>
                <v-card-title>
                    <span class="headline">Detail package info</span>
                </v-card-title>
                <v-card-text>
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                            <tr class="detail-heading">
                                <th>Type</th>
                                <th>Name</th>
                                <th>Hash</th>
                                <th>Time</th>
                                <th>Size</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(item, index) in packageFile" :key="index">
                                <td>{{ item.type }}</td>
                                <td>{{ item.name }}</td>
                                <td>{{ item.hash }}</td>
                                <td>{{ item.time }}</td>
                                <td>{{ item.size }}</td>
                            </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            text
                            @click="dialogState = false">
                        Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "DetailsModal",
        data() {
            return {
                modalWidth: '1000px'
            }
        },
        props: ['dialog'],
        computed: {
            ...mapGetters([
                'packageFile'
            ]),
            dialogState: {
                get: function () {
                    return this.dialog
                },
                set: function (value) {
                    this.$emit('dialogClose', value)
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .detail-heading {
        th {
            text-align: left;
        }
    }
</style>