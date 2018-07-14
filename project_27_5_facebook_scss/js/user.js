class User1 {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }

    get fullname() {
        return `${this.name} ${this.lastname}`;
    }
}

module.exports = User1;