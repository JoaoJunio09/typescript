// Interfaces
interface Person<T> {
	name: T,
	age: T,
	toSpeak: (param: T) => T
}

interface Funcionario<T> extends Person<T> {
	salario: number
}

const person: Person<string> = {
	name: 'João Junio',
	age: '17',
	toSpeak: (param: string) => {
		return 'retorno';
	}
};

// Extends
type MinimoPessoa<T extends Person<string>> = T;

const funcionario: MinimoPessoa<Funcionario<string>> = {
	name: 'João Junio',
	age: '17',
	toSpeak: (param: string) => {
		return 'retorno'
	},
	salario: 8000
}

// Keyof
type Chaves<T> = keyof T;

const chavesPessoa: Chaves<Person<string>> = 'name';

type TiposDasChaves<T> = T[keyof T];

const tiposChavesPessoa: TiposDasChaves<Person<string>> = () => '';

// In
type ObjDinamico<T> = { [K in keyof T]: T[K] };

const obj: ObjDinamico<{ salario: number, status: boolean }> = {
	salario: 8000,
	status: true
};

interface Teste { salario: number, status: boolean };

function transformarObjeto<T, U extends T[keyof T]>(obj: T, transFn: (item: T[keyof T]) => U): { [K in keyof T]: U } {
	const novoObj = {} as { [K in keyof T]: U };

	return novoObj;
}

const teste: Teste = {
	salario: 1000,
	status: true
}

transformarObjeto(teste, (item) => {
	return 2+2;
});