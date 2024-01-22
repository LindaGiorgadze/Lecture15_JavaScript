const numbers = [4, 2, 6, 9, 10, 21];

// console.log(numbers);

numbers.sort((a, b) => {
  //   console.log(a-b);
  return a - b;
});

console.log(numbers);

const users = [
  {
    name: "Giorgi",
    age: 30
  },
  {
    name: "Nino",
    age: 10
  },
  {
    name: "Luka",
    age: 40
  },
  {
    name: "Mariam",
    age: 36
  }
];

users.sort((a, b) => {
  //   console.log(a, b);
  return a.name.localeCompare(b.name);
});

// console.log(users);

const numbers2 = [175, 50, 25, 50];

const initialValue = 20;

const newNumbers2 = numbers2.reduce((total, num) => {
  console.log("Total: ", total, "Num: ", num);
  return total + num;
}, initialValue);

// console.log(newNumbers2);
