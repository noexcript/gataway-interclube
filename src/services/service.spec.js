
const {requestApi} = require('./index')


describe('Request to end-point api', () => {

    it('Should let do a request to http:localhost/members/view/front/api.php', async () => {
        const api = "http://localhost/members/view/front/api.php"

        const result = await requestApi(api, 'GET', { action: '/' })

        expect(result.message).toBe('Hello World');
    })
})