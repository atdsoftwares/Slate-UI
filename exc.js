const input = [
  { name: "Sreekanth", age: 30, gender: "M" },
  { name: "Sai", age: 30, gender: "M" },
  { name: "Shaik", age: 30, gender: "F" },
  { name: "Sreekanth", age: 24, gender: "M" },
  { name: "Sai", age: 21, gender: "F" },
];

const customSort = (person1, person2) => {
  if (person1.name < person2.name) {
    return -1;
  } else if (person2.name > person1.name) {
    return 1;
  } else {
    if (person1.age < person2.age) {
      return -1;
    } else {
      return 1;
    }
  }
  return 0;
};
console.log(input.sort(customSort));
