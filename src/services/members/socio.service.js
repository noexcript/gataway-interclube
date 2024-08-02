const { post, get } = require('./methods')


const register = async (user_id, nome_completo, morada, naturalidade, contacto, foto, bi) => {
    const body = {
        action: 'member',
        avatat: foto,
        fname: nome_completo,
        address: contacto,
        user_files: bi,
        city: morada,
        state: naturalidade,
        user_id
    }
    return await post(body)
}




module.exports = {
  
    register,
    
}



// const form = new FormData()
// form.append('action', 'member');
// form.append('fname', nome_completo);
// form.append('address', contacto);
// form.append('city', morada);
// form.append('state', naturalidade);
// form.append('user_id', user_id);

// console.log(foto)
// if (foto) {
//     form.append('avatar', foto[0].buffer, {
//         filename: foto[0].originalname,
//         contentType: foto[0].mimetype
//     });
// }
// console.log(bi)
// if (bi) {
//     form.append('user_files', bi[0].buffer, {
//         filename: bi[0].originalname,
//         contentType: bi[0].mimetype
//     });
// }
