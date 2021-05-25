  const path = require('path'); 
  const express = require('express');  // requerimos express
  const morgan = require ('morgan');
  const app =  express(); // app es para inicializar 
  const mongoose = require ('mongoose'); //requerimos mongoose para la base de datos


  //conectamos la base de datos
  mongoose.connect('mongodb+srv://Alejandro:1007703016@cluster0.9gyev.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', //url de la base de datos
  {
     useNewUrlParser: true, useUnifiedTopology: true,
  }).then(db => console.log('conexion a la base de datos exitosa'))
  .catch(err =>console-log (err) )
  
  
   
  //importar rutas
  const indexroutes = require('./routes/index'); // vamos a la carpeta routes y importamos el archivo donde estan las rutas el cual es index

  //que nuestro servidor escoja el puerto en el que corra en caso de que no, se ejecuta en el puerton 3000
  app.set ('port', process.env.PORT || 4000); 
  app.set('views',path.join(__dirname + '/views')); //configura la ruta a las carpetas de views
  app.set('view engine', 'ejs'); //buscar los archivos ejs


  //midelware funcion que se ejecuta antes de llegar a las rutas
  app.use (morgan('dev'));
  app.use(express.urlencoded({extended: false})); //si aplicamos un formulario esta url los reconoce


  //rutas
  app.use ('/', indexroutes);  //mi ruta raiz y luego va  a index donde estan las rutas en la carpeta routes


  //inicializar server
  app.listen (app.get ('port') , ()=>{
    console.log (`servidor en puerto: ${app.get('port')}`);
  });