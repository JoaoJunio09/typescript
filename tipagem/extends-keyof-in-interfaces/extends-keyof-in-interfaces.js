"use strict";
const person = {
    name: 'João Junio',
    age: '17',
    toSpeak: (param) => {
        return 'retorno';
    }
};
const funcionario = {
    name: 'João Junio',
    age: '17',
    toSpeak: (param) => {
        return 'retorno';
    },
    salario: 8000
};
const chavesPessoa = 'name';
const tiposChavesPessoa = () => '';
const obj = {
    salario: 8000,
    status: true
};
;
function transformarObjeto(obj, transFn) {
    const novoObj = {};
    return novoObj;
}
const teste = {
    salario: 1000,
    status: true
};
transformarObjeto(teste, (item) => {
    return 2 + 2;
});
