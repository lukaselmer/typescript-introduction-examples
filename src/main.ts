interface Person {
  name: string;
  age: number;
}

export function sortByName(arr: Person[]) {
  var result = arr.slice(0);
  result.sort((a, b) => a.name.localeCompare(b.name));
  return result;
}

class Greeter {
  constructor(private name: string) {}

  sayHello() {
    console.log("Hello " + this.name);
  }
}

const g = new Greeter("Web Zürich");
console.log(g.name);
