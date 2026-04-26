class Person {
    constructor(name, age, phones, address) {
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
