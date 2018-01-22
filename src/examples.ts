interface Person {
  name: string;
  age: number;
}

function sortByName(arr: Person[]) {
  var result = arr.slice(0);
  result.sort((a, b) => a.name.localeCompare(b.name));
  return result;
}

sortByName([{ name: "Lukas", age: 29 }, { name: "Marion", age: 28 }]);

class Greeter {
  constructor(private name: string) {}

  sayHello() {
    console.log(`Hello ${this.initials()}`);
  }

  private initials() {
    return this.name
      .split(" ")
      .map(s => s[0] + ".")
      .join(" ");
  }
}

new Greeter("Lukas Elmer").sayHello();
