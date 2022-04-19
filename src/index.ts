interface Human{
  name:string;
  age:number;
  gender:string;
}

const person = {
  name:"S.K Kim",
  age:30,
  gender:"male"
}

const sayHi = (person: Human):string => {
  return `Hello ${person.name}, you are ${person.age} years old, you are ${person.gender}!`;
}

console.log(sayHi(person));

export {};