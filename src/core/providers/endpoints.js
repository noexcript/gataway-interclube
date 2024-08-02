require('dotenv').config()

const memberApi =  process.env.API_MEMBER

if(!memberApi){
    console.log('Sem end-points da api de sócio')
    process.exit(1)
}

module.exports = {
    memberApi
} 