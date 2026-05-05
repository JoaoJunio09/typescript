import Person from "./models/person/Person.js";
import Phone from "./models/person/Phone.js";
import Address from "./models/person/Address.js";

let phones: Phone[] = [
	new Phone('17', '997034070'),
	new Phone('17', '988138913'),
]

let address = new Address('Rua Marechal Castelo Branco', '353');

let person0 = new Person("João Junio", 17, phones, address);

console.log(person0);
console.log(person0.falar());
console.log(person0.exibirTelefones());