//step 1 - create object(key value pair)

let person ={
    firstName : "Tom",
    lastName : "Jerry",
    age : 35,
    country: "USA",
    state: "NewJersy"
}

//print properties with dot notation
console.log(person.lastName); //output Jerry
console.log(person.age);//output 35

//print properties with bracket notation
console.log(person["country"]);//output USA
console.log(person["firstName"]);//output Tom

//Step 2 — Create + Access + Modify Objects 

//add new property to existing objects
person.email ="tom.jerry@yahoo.com";
console.log(person);

//modify the value of state
person.state ="California";
console.log(person)//printing whole object
console.log(person.state)//printing value of state alone

// delete country from person object
delete person.country
console.log(person); //country is removed

//check if key/property is exists
console.log("email" in person);//true
console.log("country" in person);//false

//to print only keys in arrays from object use object.keys
console.log(Object.keys(person));

//to print only values in arrays of object use object.values
console.log(Object.values(person));

//to print both keys & values in arrays of an object use object.entries
console.log(Object.entries(person));

//Step 3 — Iterating Over Object Properties

//to iterate over keys in object
// classic for in loop
for(let key in person){
    console.log(key);
}
//to iteration value of keys in for in loop
for(let key in person){
    console.log(person[key]);
}
//object.keys
Object.keys(person).forEach((key)=>{
    //console.log(key);//will print only keys of object
    console.log(key +":" + person[key]);//will print both keys and values
})

//to iterate over object entries with both key and value
for(let[key,value] of Object.entries(person)){
    console.log(key, value);
}

//to iterate values with Object.values
Object.values(person).forEach((value)=>{
    console.log(value);
})

//Step 4 — Object Methods & this keyword 
//adding methods to existing object

person.greet = function(){
    console.log("Hello I am " + this.firstName);
};
console.log(person);
person.greet();//Hello I am Tom

person.birthYear =function(){
    return new Date().getFullYear() - this.age;
}
console.log(person);
console.log(person.birthYear());//1990

//Step 5: Destructuring + Spread 
let {firstName, state} = person;
console.log(firstName);//Tom
console.log(state);//California

//with alias
let{age:personAge, lastName:LName} = person;
console.log(personAge);//35
console.log(LName);//Jerry

//copy person object
let newPerson = {...person};
console.log(newPerson);
newPerson.gender ="Male";
console.log(newPerson);//gender key is not added
console.log(newPerson.gender);//Male
console.log(person); //gender key is not added

//Step 6: Object Freeze and Object Seal
//freeze - it wont allow you to modify/add/delete any properties from an object.

/*
let frozenPersonObject = Object.freeze(person);//this will freeze original person object
console.log(frozenPersonObject);
person.gender="Female";
console.log(person);//gender is not added
console.log(person.gender);//undefined
*/

let frozenPerson = Object.freeze({...person})//taking a copy of person object.
console.log(frozenPerson);
frozenPerson.age = 45; //age not modified
frozenPerson.gender ="Female";//gender not added
delete frozenPerson.state; //state not deleted

console.log(frozenPerson);//same as before
console.log(frozenPerson.age);//35
console.log(frozenPerson.gender);//undefined as it is not added
console.log(frozenPerson.state);//California as it is not deleted

//add gender to original person object
person.gender='Female';
console.log(person)//gender is added

//Object seal allows to modify the value and will not allow to add/delete
let sealedPerson = Object.seal({...person});
sealedPerson.age =67;//age updated
sealedPerson.zipCode ='1312GB';//zipCode not added
delete sealedPerson.state;//state not deleted

console.log(sealedPerson);//this will have gender as it was added to original person object
console.log(sealedPerson.age);//67
console.log(sealedPerson.zipCode);//undefined
console.log(sealedPerson.state);//California

//Step 7: Optional Chaining and Object shorthand
//optional chaining - to avoid crash when we try to access object properties when object does not exist(null/undefined). 
//it won't throw any type error if property is not available.
//if Object exists both gives undefined
console.log(person.city);//undefined 
//console.log(person?.city);//undefined 

let personOne = null;
//console.log(personOne.city);//error
//console.log(personOne?.city)//undefined no error

//object shorthand (when variable name and key name are same)
let fullName = "Tom A. Jerry";
let currentAge = 45;
let currentCountry = "London";

let staff ={fullName,currentAge,currentCountry};
console.log(staff.currentAge);//45
console.log(staff); //{ fullName: 'Tom A. Jerry', currentAge: 45, currentCountry: 'London' }

//merge 2 objects
const objA = { name: "Tom", age: 30 };
const objB = { age: 40, city: "London" };
const objMerge = Object.assign({},objA,objB);
console.log(objMerge);

//check property is exist directly in the object
const car = { brand: "Toyota", year: 2020 };
console.log(car.hasOwnProperty('brand'));//true
console.log(car.hasOwnProperty('color'));//false
console.log(car.hasOwnProperty('toString'));//false
console.log('toString' in car);//true

//computed property
//Allows dynamic keys inside object literal using [].
let key ='score';
let prop ='city'
let user1 ={
    name:'John',
    age: 32,
    [key] : 60,
    [prop]: 'NJ'
}
console.log(user1);

//object.defineproperty() - control the property of object
// create new object with read only. user can modify the value
let book ={
    name: "JS Guide" 
}

Object.defineProperty(book, 'year',{
    value: 2024,
    writable: false,
    enumerable: true
});

book.year = 2025;
console.log(book);//{ name: 'JS Guide', year: 2024 }

Object.defineProperty(book, 'secretCode',{
    value: 9999,
    writable: false,
    enumerable: false,
    configurable: true
});
console.log(book);//secretcode does not appear

delete book.year;//by default configurable is false so cant delete property
console.log(book)

Object.defineProperty(book, 'vision',{
    value: 'success',
    writable: true,
    enumerable: true,
    configurable: true
});
console.log(book);//vision does  appear
delete book.vision;//allwoed since configurable is true
console.log(book);

//adding multiple properties in object define property
let cars ={};

Object.defineProperties(cars,{
    brand :{
        value: "Toyota",
        writable: true,
        enumerable: true
    },
    year: {
        value: 2022,
        writable: false,
        enumerable: true
    }
});

console.log(cars);//{ brand: 'Toyota', year: 2022 }
cars.brand= 'BMW';
cars.year= 2025;
console.log(cars);//{ brand: 'BMW', year: 2022 }

Object.defineProperty(cars,'color',{
    value: "White",
    writable: true,
    enumerable : true,
    configurable: false
})
console.log(cars);
cars.color='Black';//update color as black
console.log(cars);
delete cars.color;//wont allow
console.log(cars);

//redefine property again
// Object.defineProperty(cars,'color',{
//     enumerable: false
// })//TypeError: Cannot redefine property: color

console.log(Object.getOwnPropertyDescriptors(cars));//print all properties in cars object
console.log(Object.getOwnPropertyDescriptor(cars,'year'));//print  year property from cars

/*Object.getOwnPropertyDescriptors():
Useful when you want to check the configuration of all the properties in an object, 
including attributes like writable, enumerable, and configurable. 
You can use this to inspect the object’s properties and ensure the descriptors are set correctly for your needs.

Object.getOwnPropertyDescriptor():
Useful when you need to inspect a specific property and check its descriptors.
 This is helpful when working with single property definitions or modifications
  (e.g., to check if a property is writable before modifying it). */

