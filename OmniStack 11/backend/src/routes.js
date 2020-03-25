const express = require("express");

const OngController = require("./controllers/OngControllers");
const IncidentsController = require("./controllers/IncidentControllers");
const ProfileControllers = require("./controllers/ProfileControllers");
const SessionControllers = require("./controllers/SessionsControllers")

const routes = express.Router();

routes.post('/sessions',SessionControllers.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.post("/incidents", IncidentsController.create);
routes.get("/incidents", IncidentsController.index);
routes.delete("/incidents/:id", IncidentsController.delete);

routes.get('/profile' ,ProfileControllers.index);

module.exports = routes;
