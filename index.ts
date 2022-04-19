const name = "Sk kim",
  age = 30,
  gender = "male";

//매개변수를 선택적으로 받으려면 뒤에 ?를 붙여주면 된다.
const sayHi = (name, age, gender?)=>{
  console.log(`Hello ${name}, you are ${age} years old, you are ${gender}`);
}
sayHi(name, age);
export {};