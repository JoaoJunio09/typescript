class Armazenador<T, U> {
	salvarObjeto(objToSave: T) {
		console.log('Objeto salvo!', objToSave);
	}

	deletarObjeto(objToDelete: T) {
		console.log('Objeto deletado!', objToDelete);
	}

	substituirObjeto(objOriginal: T, objNovo: U) {
		console.log('Objeto ', objOriginal, 'substituido por ', objNovo);
	}
}

type Pessoa = { nome: string, idade: number };
type PessoaNova = { nome: string, idade: number, pais: string };

const arm: Armazenador<Pessoa, PessoaNova> = new Armazenador();

arm.deletarObjeto({ nome: 'João Junio', idade: 17 });

arm.substituirObjeto({ nome: 'João Junio', idade: 17 }, { nome: 'João Junio Trindade Castro', idade: 17, pais: 'Brasil' });