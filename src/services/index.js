const apiManager = require("../core/providers/apiManager")

const getHeaders = () => {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
}


const request = async (url, method = 'POST', body = null, items = null) => {
    try {
        return await apiManager(`${$url}`, {
            method: method,
            params: items,
            headers: getHeaders(),
            data: body
        })
    } catch (error) {
        return error.response.data
    }
}

const get = async (url, items = null) => {
    const method = 'GET';
    return await request(url, method, null, items);
}
const post = async (url, body) => {
    const method = 'POST';
    return await request(url, method, body);
}
const put = async (url, id, body) => {
    const method = 'PUT';
    return await request(url, method, body);
}
const delete_ = async (url) => {
    const method = 'DELETE';
    return await request(url, method);
}


module.exports = {
    request,
    get,
    post,
    put,
    delete_
}

