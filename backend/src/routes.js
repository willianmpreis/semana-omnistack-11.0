const express = require('express') //Micro-framework utilizado
const { celebrate, Segments, Joi } = require ('celebrate') //Validações


const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.get('/ongs', OngController.index)
routes.post(
    '/ongs',
     celebrate({
         [Segments.BODY]: Joi.object().keys({
             name: Joi.string().required(),
             email: Joi.string().required().email(),
             whatsapp: Joi.string().min(10),
             city: Joi.string().required(),
             uf: Joi.string().required().length(2)
         })
     }),
      OngController.create
)

routes.post(
    '/sessions',
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            id: Joi.string().required(),
        })
    }),
    SessionController.create
)

routes.get(
    '/profile',
    celebrate({
        [Segments.HEADERS]: Joi.object({authorization: Joi.string().required()}).unknown()
    }),    
    ProfileController.index
)

routes.get(
    '/incidents',
    celebrate({[Segments.QUERY]: Joi.object().keys({ page: Joi.number()})}),
    IncidentController.index
)
routes.post(
    '/incidents',
    celebrate({
        [Segments.HEADERS]: Joi.object({authorization: Joi.string().required()}).unknown(), 
        [Segments.BODY]: Joi.object().keys({
             title: Joi.string().required(),
             description: Joi.string().required(),
             value: Joi.number().min(0.01)
         })
     }),
    IncidentController.create
)
routes.delete(
    '/incidents/:id',
    celebrate({
        [Segments.HEADERS]: Joi.object({authorization: Joi.string().required()}).unknown(),
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.number().required()
        })
    }),    
    IncidentController.delete
)

module.exports = routes