console.log(participants()[Math.floor(participants().length * Math.random())]);

function participants() {
  return `Person A
  Person B
  Person C`.split('\n');
}
