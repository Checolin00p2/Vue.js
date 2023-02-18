import axios from "axios";

const journalApi = axios.create({
    baseURL: 'https://vue-curse-63ee2-default-rtdb.firebaseio.com'
})

export default journalApi