

import state from './state'
import * as actions from './actions'
import * as mutation from './mutations'
import * as getters from './getters'

const JournalModule={
    namespaced:true,
    state,
    actions,
    mutation,
    getters
}

export default JournalModule