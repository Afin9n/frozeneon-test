<template>
    <v-row justify="center">
        <v-dialog
                v-model="dialogState"
                width="1000px"
        >
            <v-card>
                <v-card-title>
                    <span class="headline">Detail package info</span>
                </v-card-title>
                <v-card-text>
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                            <tr>
                                <th class="text-left">
                                    Type
                                </th>
                                <th class="text-left">
                                    Name
                                </th>
                                <th class="text-left">
                                    Hash
                                </th>
                                <th class="text-left">
                                    Time
                                </th>
                                <th class="text-left">
                                    Size
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr
                                    v-for="item in packageFile"
                                    :key="item.name"
                            >
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
                            @click="dialogState = false"
                    >
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
            return {}
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

<style scoped>

</style>