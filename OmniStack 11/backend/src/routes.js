const express = require("express");
const { celebrate , Segments , Joi } = require('celebrate')

const OngController = require("./controllers/OngControllers");
const IncidentsController = require("./controllers/IncidentControllers");
const ProfileControllers = require("./controllers/ProfileControllers");
const SessionControllers = require("./controllers/SessionsControllers")

const routes = express.Router();

routes.post('/sessions',SessionControllers.create);

routes.get("/ongs", OngController.index);

routes.post("/ongs", celebrate({
  [Segments.BODY] : Joi.object().keys({
    name:Joi.string().required(),
    email:Joi.string().required().email(),
    whatsapp:Joi.string().required().min(10).max(11),
    city:Joi.string().required(),
    uf:Joi.string().required().length(2)
  })
}) ,OngController.create);

routes.post("/incidents", IncidentsController.create);

routes.get("/incidents", celebrate({
  [Segments.QUERY]: Joi.object().keys({
    pages : Joi.number(),
  })
}),IncidentsController.index);

routes.delete("/incidents/:id", celebrate({
  [Segments.PARAMS] : Joi.object().keys({
    id: Joi.number().required(),
  })

}),IncidentsController.delete);

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({authorization : Joi.string().required(),}).keys().unknown(),



}) ,ProfileControllers.index);

module.exports = routes;
