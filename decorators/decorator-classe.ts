
function Log(classe: any) {
	console.log('Log classe', classe);
}

@Log
class Pessoa1 {
	nome: string = 'João Junio';
	idade: number = 17;

	falar() {
		console.log(`Olá, me chamo ${this.nome} e tenho ${this.idade} anos de idade`);
	}
}

console.log(Pessoa1.prototype);