"use strict";
const log = (param) => {
};
const test = {
    name: 'João Junio',
    age: 17,
    model: 'Ford',
    dateFabrication: '19/01/2009'
};
const test2 = {
    name: 'João Junio',
    age: 17
};
const log2 = (param) => {
    if ('name' in param) {
        console.log(param.name);
    }
    else {
        console.log(param.model);
    }
};
const logPerson = (param) => {
    console.log(param.name);
};
const logCar = (param) => {
    console.log(param.model);
};
