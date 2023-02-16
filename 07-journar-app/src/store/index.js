import { createStore } from "vuex";

import JournalModule from '../modules/daybook/store/journal'
const store = createStore({
    modules:{
        journal:JournalModule
    }
})

export default store