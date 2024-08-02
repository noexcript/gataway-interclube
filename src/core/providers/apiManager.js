const axios = require("axios")

 const apiManager = axios.create({
    baseURL: process.env.API_URL,
    responseType: 'json',
    withCredentials: true
})

module.exports =  apiManager