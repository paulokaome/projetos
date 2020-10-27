const express = require('express');
const { uuid ,isUuid } = require('uuidv4');


const app = express();
app.use(express.json());

/**
 * Métodos HTTP:
 * 
 * GET: Busca Informação do Back-end(1 uu várias informações);
 * POST: Criar Infomação no Back-end;
 * PUT/PATCH: Altera uma informação no Back-end;
 * DELETE: Para deleter uma infomação;
 */

 /**
  * Tipos de Parametros 
  * 
  * Query Params: Filtros e Paginação (base_url/projects?title=react&owner=paulo) ,title e owner = é o que  ele quer buscar e react e paulo e qual info ele quer filtrar , ou seja ele quer buscar titulo react em que o dono seja o paulo,lembrando que para juntar parametro com parametro se usa o & comercial.
  * 
  * Route Params: Identifcar Recurso Para Atualizar ou Deleter.
  * 
  * Request Body: Conteúdo na hora de criar ou atualizar o usuario.(Essas informações vem atraves de JSON)!
  */

  /**
   * Middleware:
   * 
   * Interceptador de requisições que interrompe totalmente uma requisição ou alterar dados da requisação.
   * 
   */

const projects = [];

function logResquest(resquest , response , next ){
  const { method , url } = resquest;

  const logoLabel = `[${method.toUpperCase()} ${url} ]`

  console.log(logoLabel);

  return next()
}

function CheckId(resquest , response , next){
  const { id } = resquest.params

  if (!isUuid(id)) {
      return response.status(400).json({erro: "Id incorrect"})
  }

  return next();
}


app.get('/projects',logResquest, (request, response) => {
  const {title} = request.query;

  const results = title ? projects.filter(project => project.title.includes(title)) : projects
  /** project filter vai filtrar os valores do array até achar um que o titulo compartilhe da palavra que foi
   * usada para pesquisa !!
   */
  return response.json(results)
});

app.post('/projects', (request, response) => {
  const {title , owner} = request.body

  const project = { id : uuid() , title , owner}

  projects.push(project)

  response.status(200).json(project)
  
})

app.put('/projects/:id', (request, response) => {
  const { id } = request.params
  const {title , owner} = request.body
  
  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
      return response.status(400).json({message: "Project not found"})
  }

  const project = {
    id,
    title,
    owner
  }

  projects[projectIndex] = project

  return response.status(200).json(project)

})

app.delete('/projects/:id', CheckId , (request, response) => {
  const { id } = request.params
  
  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
      return response.status(400).json({message: "Project not found"})
  }

  projects.splice(projectIndex , 1)

  return response.status(204).send()
})


app.listen(3333, () => {
  console.log("Back-end Started !🚀");
});