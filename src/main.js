function sortByName(arr) {
    var result = arr.slice(0);
    result.sort(function(a, b) {
      return a.name.localCompare(b.name);
    });
    return result;
  }

  // interface Person {
  //   name: string;
  //   age: number;
  // }

  // class Greeter {
  //   name: string;
  //   sayHello() {
  //     console.log("Hello " + this.name);
  //   }
  // }
