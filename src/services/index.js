const axios = require('axios');

const getHeaders = () => {
    return {
        'Content-Type': 'application/json',
    };
};

const requestApi = async (baseURL, method = 'POST', body = null, items = null) => {
   
    const apiManager = axios.create({
        responseType: 'json',
        
    });
    
    try {
        const response = await apiManager(baseURL, {
            method: method,
            params: items,
            headers: getHeaders(),
            data: JSON.stringify(body)
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        } else {
            return { message: "An error occurred", error: error.message };
        }
    }
};

const get = async (url, items = null) => {
    console.log(items)
    const method = 'GET';
    return await requestApi(url, method, items, null, items);
}
const post = async (url, body) => {
    const method = 'POST';
    return await requestApi(url, method, body);
}
const put = async (url, id, body) => {
    const method = 'PUT';
    return await requestApi(url, method, body);
}
const delete_ = async (url) => {
    const method = 'DELETE';
    return await requestApi(url, method);
}


module.exports = {
    requestApi,
    get,
    post,
    put,
    delete_
}

