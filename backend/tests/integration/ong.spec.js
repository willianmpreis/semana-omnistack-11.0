const request = require('supertest')
const app = require('../../src/app')
const connection  = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach( async () => {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll( async () => {
        await connection.migrate.rollback()
        await connection.destroy()
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            //.set('Authorization', '7afcd5d9')
            .send({
                name: "ONG DO TESTE",
                email: "contato@ongdoteste.org.br",
                whatsapp: "3235371440",
                city: "Viçosa",
                uf: "MG"
            })
        
            expect(response.body).toHaveProperty('id')
            expect(response.body.id).toHaveLength(8)
    })
})