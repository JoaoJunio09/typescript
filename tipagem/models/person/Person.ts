import Address from "./Address.js";
import Phone from "./Phone.js";

class Person {
	name: string;
	age: number;
	phones: Phone[];
	address: Address;
	
	constructor(name: string, age: number, phones: Phone[], address: Address) {
		this.name = name;
		this.age = age;
		this.phones = phones;
		this.address = address;
	}

	falar() {
		return `Olá ${this.name}, você tem ${this.age} anos`;
	}

	exibirTelefones() {
		let mensagem = "Meus números são: ";
		this.phones.forEach(phone => {
			mensagem += `(${phone.ddd})-${phone.number} `;
		});
		return mensagem;
	}
}

export default Person;