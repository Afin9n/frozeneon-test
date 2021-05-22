<template>
    <v-app>
        <div class="page">
            <div class="container">
                <Search data-app></Search>
                <Table></Table>
            </div>
            <Footer></Footer>
        </div>
    </v-app>
</template>

<script>
    import Search from './components/Search';
    import Table from "./components/Table";
    import Footer from "./components/Footer";

    export default {
        name: 'App',

        components: {
            Footer,
            Table,
            Search,
        },

        data: () => ({
            //
        }),
    };
</script>

<style lang="scss">
    .container {
        max-width: 1300px;
        width: 100%;
        margin: 0 auto;
        padding: 0 15px;
    }

    .page {
        padding: 15px 0 135px;
    }


</style>
