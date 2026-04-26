"use strict";
const funcComCallback = (name, age, cbFn) => {
    const text = `Olá, meu nome é ${name} e eu tenho ${age} anos de idade.`;
    cbFn(text);
};
funcComCallback('Felipe', 26, (text) => {
    console.log('Eu sou o Callback ' + text);
});
