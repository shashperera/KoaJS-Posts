//Import Koa
const Koa = require('Koa');
//Import body-parser
const bodyParser = require('koa-bodyparser');
//Importing the routes
const postRoutes = require('./routes/posts.routes');

//Start App
const app = new Koa();

//Using body parser
app.use(bodyParser());

//Registering the routes
app.use(postRoutes.routes()).use(postRoutes.allowedMethods());

//Setup the port
app.listen(3000);
console.log("Application is now running on port 3000");



