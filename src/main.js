"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sortByName(arr) {
    var result = arr.slice(0);
    result.sort((a, b) => a.name.localeCompare(b.name));
    return result;
}
exports.sortByName = sortByName;
class Greeter {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log("Hello " + this.name);
    }
}
const g = new Greeter("Web Zürich");
console.log(g.name);
