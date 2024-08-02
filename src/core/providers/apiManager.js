const axios = require("axios")
export const apiManager = base => {
    return axios.create({
        baseURL: base,
        responseType: 'json',
        withCredentials: true
    })
} 