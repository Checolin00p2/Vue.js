

import state from './state'
import * as actions from './actions'
import * as mutation from './mutation'
import * as getters from './getters'

const myCustomModule={
    namespaced:true,
    state,
    actions,
    mutation,
    getters
}

export default myCustomModule