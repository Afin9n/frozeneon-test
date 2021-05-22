<template>
    <v-footer v-bind="localAttrs" :padless="padless">
        <v-card flat tile width="100%" class="grey darken-2 text-center">
            <v-card-text>
                <div class="container footer__wrapper">
                    <div class="footer__info">
                        <p class="footer__name">Sakhridzh Ruslan</p>
                        <a class="footer__link" href="https://github.com/Afin9n" target="_blank">github.com</a>
                    </div>
                    <img class="footer__avatar" src="../assets/avatar.jpg" alt="photo">
                </div>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                localAttrs: {
                    fixed: true
                },
                padless: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .footer {
        &__wrapper {
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }

        &__avatar {
            max-width: 75px;
            border-radius: 50%;
        }

        &__name {
            margin: 0;
            color: #fff;
        }

        &__link {
            color: #fff;
        }

        &__info {
            margin-right: 40px;
            text-align: right;
        }
    }
</style>