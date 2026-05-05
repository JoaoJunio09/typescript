"use strict";
class Armazenador {
    salvarObjeto(objToSave) {
        console.log('Objeto salvo!', objToSave);
    }
    deletarObjeto(objToDelete) {
        console.log('Objeto deletado!', objToDelete);
    }
    substituirObjeto(objOriginal, objNovo) {
        console.log('Objeto ', objOriginal, 'substituido por ', objNovo);
    }
}
const arm = new Armazenador();
arm.deletarObjeto({ nome: 'João Junio', idade: 17 });
arm.substituirObjeto({ nome: 'João Junio', idade: 17 }, { nome: 'João Junio Trindade Castro', idade: 17, pais: 'Brasil' });
