import * as types from '../actions.types'

export default {
    [types.FETCH_PACKAGE]: (state, packageFile) => {
        state.packageFile = packageFile
    },
    [types.FETCH_VERSIONS]: (state, data) => {
        state.versions = data.versions.map((version) => {
            return {
                name: data.searchValue,
                version
            }
        })
    },
}