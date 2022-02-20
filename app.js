const player = {
  name: { firstName: "Mashrafe", lastName: "Murtaza" },
  age: 38,
  type: ["al-rounder", "captain",['masters']],
};

// const [,captain] = player.type;
// console.log(captain);

const { firstName } = player.name;
console.log();

// let firstName = "Mashrafe";
// const lastName = "Murtaza";
// const age = 38;
// console.log(`full name : ${firstName} ${lastName} age is ${70 - age};`);

// const dividedByFive = num => num / 5;
// console.log(dividedByFive(57));

const addWithTwo = (x, y) => {
  let result1 = x + 2;
  let result2 = y + 2;
  let result = result1 * result2;
  return result;
};
console.log(addWithTwo(3, 3));

const multiply = (x, y, z) => {
  let result = x * y * z;
  return result;
};
console.log(multiply(3, 3, 3));

const Arr = [3, 7, 1, 6, 8];
const arrResult = Arr.map((num) => num * 5);
console.log(arrResult);

const arrResult1 = Arr.filter((num) => num % 2 == 1);
console.log(arrResult1);

const [, , three] = Arr;
console.log(three);
