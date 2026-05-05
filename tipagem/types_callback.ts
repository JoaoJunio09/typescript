type FuncCallback = (text: string) => void;

const funcComCallback = (name: string, age: number, cbFn: FuncCallback) => {
	const text = `Olá, meu nome é ${name} e eu tenho ${age} anos de idade.`;

	cbFn(text);
}

funcComCallback('Felipe', 26, (text: string) => {
	console.log('Eu sou o Callback ' + text);
});