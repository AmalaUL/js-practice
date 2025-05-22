//1. Array Destructuring
const numbers = [1, 2, 3, 4, 5];
let [first, second, ...rest] = numbers;
console.log(first);//1
console.log(second);//2
console.log(rest);//[3,4,5] collects all rest of the elements into one array

//2. Object Destructuring + Renaming
const person = { firstName: 'John', lastName: 'Doe', age: 30 };
let {firstName: fName, age} = person;
console.log(fName);//John
console.log(age);//30

//3. Rest Parameters
//Write a function sumAll that accepts any number of arguments and returns their sum.
function sumAll(...nums){
    return nums.reduce((acc,num)=> num+acc,0);
}

console.log(sumAll(1,2,3,4)); // 10

//4. Arrow Functions + Implicit Return
 const square = (n) => n * n;
 console.log(square(5));//25

 //5. Template Literals
 const name = 'Alice';
 const ageOfPerson = 25;
console.log(`My name is ${name} and I am ${ageOfPerson} years old.`) //My name is Alice and I am 25 years old.

  
  //ES6 — Set 2 Questions

  //6. let vs const vs var
  var x = 1;
  let y = 2;
  const z = 3;
  
  x = 10;
  y = 20;
   //z = 30;  // Uncomment this line and explain what happens - we get TypeError as reassignment cant be done for cost variable. 
  console.log(x, y, z);

  // 7. Spread Operator
//Write a function that merges two arrays using the spread operator.
const array1 = [1,2,3];
const array2 =[3,4,5,6];
const mergedArray = [...array1,...array2]; //[1,2,3,3,4,5,6];
console.log(mergedArray);

  //8. Default Parameters
  /*Write a function greet that takes name (default = "Guest") and returns "Hello, <name>!".
Test with greet("Alice") and greet(). */
function greet(name ='Guest'){
    return `Hello ${name}!`;
}
console.log(greet("Alice"));//Hello Alice!
console.log(greet());//Hello Guest!

//9. Object Property Shorthand
const nameOfPerson = "Bob";
const ageOfAbovePerson = 40;
const objectOne ={nameOfPerson,ageOfAbovePerson};
console.log(objectOne);//{ nameOfPerson: 'Bob', ageOfAbovePerson: 40 }

//10. for...of loop
//Given an array [10, 20, 30], print each element using for...of.
let array3 =[10,20,30];
for(let num of array3){
    console.log(num); //10 20 30
}

//ES6 set 3 questions
//11. Destructuring with Default Values
const user = { name: 'Emma', age: 28 };
let {name: userName, age: userAge, userCountry='Unknown'} = user;
console.log(userName);//Emma
console.log(userAge);//28
console.log(userCountry);//unknown
console.log(user.name);//Emma


//12. Swap Two Variables (Using Destructuring)
let a = 5, b = 10;
// swap a and b here
[a,b ]= [b,a]
console.log(a); // → 10
console.log(b); // → 5

//13. Merge Two Objects (Spread Operator)
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObjects = {...obj1,...obj2};
console.log(mergedObjects);//{a: 1, b: 3, c: 4} // b will be overwritten

// dont want to override keep the first one

function keepOriginalKey(obj1,obj2){
    let merged ={...obj1};
    for(let key in obj2){
        if(!(key in merged)){
            merged[key] = obj2[key]
        }
    }
    return merged;
}

console.log(keepOriginalKey(obj1,obj2));//{ a: 1, b: 2, c: 4 }

//want both values for the key

function keepBothValuesOfKey(obj1,obj2){
    let merged ={...obj1};
    for(let key in obj2){
        if(key in merged){
            merged[key] = [merged[key],obj2[key]];
        }else{
            merged[key] = obj2[key];
        }
    }
    return merged;
}
console.log(keepBothValuesOfKey(obj1,obj2));//{ a: 1, b: [ 2, 3 ], c: 4 }

//14. Function that Accepts Any Arguments + Logs Count & Values (Rest + for...of)

function logArgument(...args){
    console.log(`Arguments count: ${args.length}`);//Arguments count: 3
    for(let value of args){
        console.log(value);//1 hello true
    }
}
logArgument(1, 'hello', true);

//15: Tricky: Cloning an Object with Nested Properties (Spread Operator Limit)

const person1 = {
    name: 'John',
    address: {
      city: 'NY',
      country: 'USA'
    }
  };
  
  const clonePerson = {...person1};
  clonePerson.address.city='California';
  console.log(clonePerson);//{ name: 'John', address: { city: 'California', country: 'USA' } }
  console.log(person1);//{ name: 'John', address: { city: 'California', country: 'USA' } }

  /*city changed in both original and clone copy because spread operator does only shallow copy which means
  both clone & original objects shares same reference so it does not work for nested objects and changing clone will 
  affect original object as well.
  deep copy helps to solve this issue it will create separate refernce for both clone and original and modifying clone will 
  not impact original object. we have to use JSON.parse(JSON.stringfy(objname))*/







