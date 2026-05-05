import { IPhone } from "./interfaces/person/IPhone";
import { IPerson } from "./interfaces/person/IPerson";

let phone0: IPhone = {
	ddd: '17',
	number: '997034070'
};

let phone1: IPhone = {
	ddd: '17',
	number: '988138913'
};

let person0: IPerson = { 
	name: "João Junio", 
	age: 17,
	phones: [ phone0, phone1 ],
	address: {
		addressName: 'Rua Marechal Castelo Brancho',
		number: '353'
	}
};

let person1: IPerson = { 
	name: "Laura", 
	age: 17,
	phones: [],
	address: {
		addressName: 'Rua Maria Oliveira',
		number: '467'
	}
};

let people: IPerson[];

people = [ person0, person1 ];

console.log(people);