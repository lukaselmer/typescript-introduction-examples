"use strict";
function sortByName(arr) {
    var result = arr.slice(0);
    result.sort((a, b) => a.name.localeCompare(b.name));
    return result;
}
sortByName([{ name: "Lukas", age: 29 }, { name: "Marion", age: 28 }]);
class Greeter {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello ${this.initials()}`);
    }
    initials() {
        return this.name
            .split(" ")
            .map(s => s[0] + ".")
            .join(" ");
    }
}
new Greeter("Lukas Elmer").sayHello();
