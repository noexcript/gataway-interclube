
const { memberApi } = require('../../core/providers/endpoints'),
   { requestApi} = require('../');


const base = memberApi

const get = async (items = null) => {
    const method = 'GET';
    return await requestApi(base, method, null, items);
}
const post = async (body) => {
    const method = 'POST';
    return await requestApi(base, method, body);
}
const put = async (id, body) => {
    const method = 'PUT';
    return await requestApi(base, method, body);
}
const delete_ = async (body) => {
    const method = 'DELETE';
    return await requestApi(base, method);
}


module.exports = {
    get,
    post,
    put,
    delete_
}