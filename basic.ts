//Primitives : number, string, boolean
//More complex types: arrays, objects
//Function types, parameters
//Primitives

let age: number;

age = 24;

let username: string;
username = "Ankit";

let isWorking: boolean;
isWorking: true;

//More complex types

let hobbies: string[];
hobbies = ["sketching", "singing"];

//type Aliases

type Person ={
    name:string,
    age:number
}

let person: Person
person = {
  name: "Ankit",
  age: 25,
};

let people: Person[];

//Type Inference

let course = 'React - The Complete Guide';


// Union Type

let courseDetail : string | number = 'React'
courseDetail =12314;

