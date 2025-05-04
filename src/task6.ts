// :::: Write a function that uses the rest operator for variable-length arguments ::::

const addNumbers = (...numbers : number[]) =>{
  const sum = numbers.reduce((total, number) => total + number , 0);
  console.log(sum)
}
addNumbers(1, 2, 3, 4, 5)