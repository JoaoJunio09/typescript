class Obj {
	nome: string | undefined;
	idade: number | undefined
}

let meuObjeto: Obj = {
	nome: 'João',
	idade: 17
};

meuObjeto.nome = "João Junio";

console.log(meuObjeto);

let meuObjeto2: { [key: string]: string } = {
	nome: 'João',
	pais: 'Brasil'
};

console.log(meuObjeto2);