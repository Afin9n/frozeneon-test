import Vue from 'vue'
import Vuex from 'vuex'

import npmPackage from './NpmPackage'

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'development',
    modules: {
        npmPackage,
    }
})

