const express = require('express'); //requerimos express para usar una ruta
const router = express.Router();  //inicualizamos la ruta 

const user = require('../models/usuarios'); //consuminos la ruta en la cual esta el obj de la base de datos

router.get('/', async  (req,res) =>{
 const users = await user.find(); //traemos los datos desde la database
  console.log(users);
    res.render('../views/index.ejs',{
        users  
    });
});

router.post('/add', async  (req,res)=>{
    
    const usernew = new user (req.body);   // almacenamos los datos del formulario en la base de datos
   await usernew.save(); //para que se almacene los obj en la database
    res.redirect('/');  //redirecciona a la ruta raiz
  
});

router.get('/Eliminar/:iduser', async  (req,res) =>{     //eliminar
    const {iduser} = req.params;
    await user.remove({_id : iduser});
    const users = await user.find(); //traemos los datos desde la database
    res.render('../views/index.ejs',{
        users
    });
});

router.get('/Edit/:iduser', async (req,res)=>{          //editar
     const {iduser} = req.params;
     const users = await user.findById(iduser);
     
     res.render('../views/formulario.ejs',{
         users
     });
     
});

router.post('/Edit/:iduser', async(req,res)=>{
    const {iduser} = req.params;
    await  user.update({_id: iduser}, req.body);
    res.redirect('/'); //editado renderisar a la ruta raiz

});

module.exports = router;  //exportamos ruta