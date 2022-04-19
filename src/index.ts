class Human{
  public name:string;
  public age:number;
  public gender:string;
  constructor(name:string, age:number, gender:string){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const kim = new Human("S.K Kim",30,"male");

const sayHi = (person: Human):string => {
  return `Hello ${person.name}, you are ${person.age} years old, you are ${person.gender}!`;
}

console.log(sayHi(kim));

export {};