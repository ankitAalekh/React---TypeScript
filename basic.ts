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

//Functions and Types

function add(a:number,b:number){
    return a+b;
}

function print(value:any){
    console.log(value);
}


//Generics

// function insertAtBeginning(array:any[], value:any){
//     const newArray = [value, ...array];
//     return newArray;
// }

// const demoArray = [1,2,3]
// const updatedArray = insertAtBeginning(demoArray,-1)

// updatedArray[0].split('');

// Generics

function insertAtBeginning<T>(array:T[], value:T){
        const newArray = [value, ...array];
        return newArray;
    }
    
    const demoArray = [1,2,3]
    const updatedArray = insertAtBeginning(demoArray,-1)
  const stringArray = insertAtBeginning(['a','b'],'d')  
    // updatedArray[0].split('');