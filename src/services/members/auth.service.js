const { post, get } = require('./methods')

const login = async (username, password) => {
    const body = {
        action: 'userLogin',
        username,
        password
    }
    return await post(body)
}

const register = async (username, email, password) => {
    const body = {
        action: 'register',
        username,
        email,
        password
    }
    return await post(body)
}

const profile = async (user_id) => {
    const body = {
        action: 'profile',
        user_id
    }
    return await get(body)
}


module.exports =  {
    login,
    register,
    profile
}
