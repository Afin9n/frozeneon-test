import * as types from '../actions.types'

export default {
    [types.FETCH_PACKAGE]: ({commit}, params) => {
        return new Promise((resolve, reject) => {
            fetch(`https://data.jsdelivr.com/v1/package/npm/${params}`)
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    if (data.versions) {
                        commit(types.FETCH_VERSIONS, {searchValue:params, versions: data.versions});
                        return resolve();
                    }
                    commit(types.FETCH_PACKAGE, data.files);
                    resolve();
                })
                .catch(err => {
                    console.error(err);
                    reject()
                })
        })
    },
}