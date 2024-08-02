
const {login, register} = require('./auth.service')


describe('Auth', () => {

    it('should return "Login successfull" for correct credentials', async () => {
        const result = await login('francisco.fa720@gmail.com', "12345678")
        
        expect(result.type).toBe('success')
    })

    it('should able to create new user', async()=>{

        const body =  {
            username: 'MauroK',
            email: 'mauro@gmail.com',
            password: 'abcdefgh',
        }
        const result =  await register(body.username, body.email, body.password)

        expect(result.type).toBe('success')
    })
})