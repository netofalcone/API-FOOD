import Vue from 'vue'

export const userKey = '__knowledge_user';
export const baseApiUrl = 'http://localhost:3000';

export function showError(e) {
    if (e && e.respose && e.respose.data) {
       Vue.toasted.global.defaultError ({msg : e.respose.data})
    } else if (typeof e === 'string') {
        Vue.toasted.global.defaultError({msg : e})
    } else {
        Vue.toasted.global.defaultError()
    }
}

export default { baseApiUrl, showError, userKey}
    
