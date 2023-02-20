import axios from "axios";

const authApi = axios.create({
    baseURL:'https://identitytoolkit.googleapis.com/v1/accounts',
    params:{
        key:'AIzaSyDmCFzEBHrGYdPnjPiBb3LPwlY2eRJQ5Wc'
    }
})

export default authApi