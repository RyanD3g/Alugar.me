const mongoose = require('mongoose');

const conect_db = async ()=>{
   await mongoose.connect('mongodb+srv://admin:admin@monginho.jttgwdm.mongodb.net/?retryWrites=true&w=majority', (e)=>{
    if(e){
        console.log("[ x ] ERRO AO SE CONECTAR COM O BANCO [ x ]");
    }else{
        console.log("[ + ] CONECTADO COM SUCESSO [ + ]");
    }
   })
}

module.exports = conect_db;