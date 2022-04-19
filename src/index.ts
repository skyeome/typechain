const sayHi = (name:string, age:number, gender:string):string =>{
  return `Hello ${name}, you are ${age} years old, you are ${gender}`;
}
console.log(sayHi("S.K Kim", 30, "male"));
// error가 발생한다. sayHi("S.K Kim", "30", "male");
export {};