//Set 1: Arrays (JS)
//Theory:

//1. What are the different ways to create an array in JavaScript?   
    //Method 1: Array literal
        let array = [1,2,3,4];
        console.log(array);//[ 1, 2, 3, 4 ]
    //Method 2: Array Constructor
        let fruits = new Array();
        fruits.push('apple');
        fruits.push('banana');
        console.log(fruits); //[ 'apple', 'banana' ]
    //Method 3: Array.from
    let a1 = Array.from('hello');//[ 'h', 'e', 'l', 'l', 'o' ]
    console.log(a1);
    //Method 3: Array.of
    let a2 =Array.of(5,10,13);//[ 5, 10, 13 ]
    console.log(a2);

//2. Can you explain the difference between Array.isArray() and typeof operator in determining an array?
    /* Array.isArray() check if the given input is array or not. it returns true for Array or else false. 
       typeof operator checks the type of datatypes like Number, String, boolean, object etc. 
       for array it comes under Object in JS so best to use Array.isArray()*/

       console.log(typeof array);//object
       console.log(Array.isArray(array));//true

//3. What is the difference between map() and forEach() in JavaScript?
    /* forEach() - to iterate an array and does not return anything.  changes the existing array if we perform any callback func
       map() -  returns an array by applying the callback function to each item in the original array. */
    array.forEach((num)=>console.log(num*2));//if we make any operation it changes the original array
    const doubleNum =array.map((num)=>num*2); 
    console.log(doubleNum);// creates new array [ 2, 4, 6, 8 ]


//4. What is the time complexity of the push(), pop(), shift(), and unshift() methods of an array?
/*push() / pop() → O(1) — fast at the end.it means constant time, which doesn’t change 
as the size of the array increases.

shift() / unshift() → O(n) — slower at the start (because of shifting) .it means linear time, 
where the operation’s time grows proportionally with the size of the array.

*/
array.push(8);//added 8 at last
array.pop();//removed 8 at last (so no movement of array)
console.log("............after push and pop..........");
console.log(array);//[1,2,3,4]

console.log("............after shift and unshift..........");
array.shift();//removed 1
array.unshift(0);//added 0
console.log(array);//[0, 2, 3, 4 ]


//Practical / Coding:
//5. Write a function that removes duplicate values from an array.

    function removeDuplicates(arr){
        const newArr = [...new Set(arr)];//set will hold only unique values and converting it back to array
        return newArr;
    }
    console.log(removeDuplicates([1,2,3,4,2,3,5,6,7,7]));//[1, 2, 3, 4,5, 6, 7]
    console.log(removeDuplicates([])); // []
    console.log(removeDuplicates([1, 1, 1, 1])); // [1]
    console.log(removeDuplicates([1, 2, 3])); // [1, 2, 3]

        
//6. Given an array of numbers, write a function that returns the sum of the numbers, but only if the numbers are even.
function sumEvenNumbers(arr) {
   return arr.filter((item) => item % 2===0).reduce((acc,num)=>num+acc,0);
}
console.log(sumEvenNumbers([1,2,3,4,5,6,7,8]))//20


//7. Explain the difference between shallow copy and deep copy in arrays. How would you create a deep copy of an array?
/* shallow copy - clone an array and it creates same reference for both original and cloned arrays.so, changes
in cloned will impact original.

deep copy - clone an array but  it creates different reference for both original and cloned arrays.so, changes
in cloned will impact original. */

//creating deepcopy of an array
console.log(".....deep copy.....")
let arr1 = [1,2,3,4,[5,6]];
let deepCopyOfarr1 = JSON.parse(JSON.stringify(arr1)); 
console.log(deepCopyOfarr1);//[ 1, 2, 3, 4, [ 5, 6 ] ]
deepCopyOfarr1[4] =[100,300];
deepCopyOfarr1[1] =200;
console.log(deepCopyOfarr1);//[ 1, 200, 3, 4, [ 100, 300 ] ]
console.log(arr1);//[ 1, 2, 3, 4, [ 5, 6 ] ] original array not changed

//creating shallow copy
console.log(".....shallow copy.....")
let arr2 = [1,2,3,4,[5,6]];
let shallowCopyOfarr2 = arr2;
console.log(shallowCopyOfarr2);//[ 1, 2, 3, 4, [ 5, 6 ] ]
shallowCopyOfarr2[1]=200;
console.log(shallowCopyOfarr2);//[ 1,200, 3, 4, [ 5, 6 ] ]
console.log(arr2);//[ 1,200, 3, 4, [ 5, 6 ] ] original array  changed

//Set 2: Objects (JS)
//Theory:

//8. What is the difference between Object.freeze() and Object.seal() in JavaScript?
    /*Object.freeze() - it will freeze the object and wont allow you to add/modify/delete the properties in the object. 
    Oject.seal() - it will allow you to modify the property but cant add/delete it */
    let p1 = {
        name: "June",
        age: 56,
        city: "cbe"
    }

    let p2 = Object.freeze({...p1});
    p2.age =40;
    p2.state ="TN";
    delete p2.city;
    console.log(p2)//it is same as p1. No change { name: 'June', age: 56, city: 'cbe' }

/*Spread operator made a copy of p1, so you could try freeze on one copy and seal on another.
❌ Without spread, once you freeze p1, you cannot reuse p1 for seal 
(because it's already frozen). You’d need to make another object. */

    let p3 = Object.seal({...p1});
    p3.age =40;
    p3.state ="TN";
    delete p3.city;
    console.log(p3)//it is same as p1. but age alone updated as 40 { name: 'June', age: 40, city: 'cbe' }

//9. Explain the concept of prototypal inheritance in JavaScript.
/*Prototypal inheritance is a feature in JavaScript where an object can inherit properties
 and methods from another object through its prototype chain. 
 We can use Object.create() to set up inheritance between objects. */

 let vehicle ={
     start: function(){
         console.log("Vehicle started");
    }
 }
let car = Object.create(vehicle);
car.start();//Vehicle started
car.wheels =4; 
console.log(car);//{ wheels: 4 }
car.start();//Vehicle started
console.log(car.wheels);//4

//10. What is the purpose of the this keyword in JavaScript objects?
//this keyword refers to an object the method is called on.. 
let p4 = {
    firstName: "Raj",
    lastName: "Malhotra",
    fullName: function(){
        console.log(`FullName is: ${this.firstName} ${this.lastName}`); 
    }
}

p4.fullName();//this refers to p4 here. FullName is: Raj Malhotra

//11. How can you check if a property exists in an object in JavaScript? Give both ways.
//Method 1: hasOwnProperty() checks only the object’s own properties
console.log(p4.hasOwnProperty('lastName'));//true
console.log(p4.hasOwnProperty('age'));//false
console.log(p4.hasOwnProperty('toString'));//false

//Method 2: prop' in obj checks both own and inherited properties.
console.log('lastName' in p4);//true
console.log('age' in p4);//false
console.log('toString' in p4);//true tostring is inherited property of p4 object.

//Practical / Coding:

/*12. Write a function that accepts two objects and merges them into one. 
     Ensure that no properties are overwritten (i.e., non-destructive merge). */
     function mergeObjects(obj1, obj2) {
          return  {...obj1,...obj2};//using spread operator for merging.if same keys are available then it will be overwritten
      }

     console.log(mergeObjects({ a: 1 }, { b: 2 })); // { a: 1, b: 2 }
     console.log(mergeObjects({ a: 1 , b:10}, { b: 2 })); // { a: 1, b: 2 } b is overwritten
     //non destructive merge
     function mergeWithoutOverwrite(obj1,obj2){
        let merged ={...obj1};
        for(let key in obj2){
            if(!(key in merged)){
                merged[key]= obj2[key] ;
            }
        }
        return merged
     }
     console.log(mergeWithoutOverwrite({ a: 1 , b:10}, { b: 2 })); //{ a: 1, b: 10 }

     //store both values in b
     function mergeObjectsKeepBoth(obj1,obj2){
        let merged ={...obj1};
        for(let key in obj2){
            if(key in merged){
                merged[key]= [merged[key],obj2[key] ];//store both values in array
            }else{
                meged[key] = obj2[key];
            }
        }
        return merged
     }
     console.log(mergeObjectsKeepBoth({ a: 1 , b:10}, { b: 2 })); //{ a: 1, b: [ 10, 2 ] }

//13. Given an object, write a function that returns the keys of the object sorted alphabetically.

     function sortObjectKeys(obj) {
       return  Object.keys(obj).sort();      
     }
         
     console.log(sortObjectKeys({ b: 1, a: 2 })); // ['a', 'b']
     console.log(sortObjectKeys({ })); // []

//14. Write a function that checks if an object is empty (i.e., it has no own properties).
     
     let p5={};
     function isObjectEmpty(obj) {
        return  Object.keys(obj).length ===0;  
     }
         
     console.log(isObjectEmpty(p4));//false
     console.log(isObjectEmpty(p5));//true


//Set 3: Functions (JS)
//Theory:

//15. What is the difference between function declaration and function expression?
//17. What is hoisting in JavaScript? How does it affect functions?

//function declaration
greet('Tom');//Function declarations are hoisted fully (both name and body). Hello Tom

function greet(name){
    console.log('Hello ' + name);
}
greet('Tom');//Hello Tom

//function expression - assign the function to a variable.Function expressions are hoisted as variables, but not initialized (so using before definition throws error).
//greetings("jerry"); //error.Cannot access 'greetings' before initialization

const greetings = function(name){
    console.log('Hi ' + name);
}

greetings("I am there"); //Hi I am there

//16. Explain closures in JavaScript with an example.
/*21. Write a function that demonstrates the use of closures by creating a function
 that returns another function. The returned function should calculate the product of two numbers. */

 //closure - inner function use variables of outer function(lexical env) even after  outer function is executed

function calculate(a){
    return function (b) {
        return a*b;//innerfunction using variable a of calculate function
    }
}
let product = calculate(3);
console.log(product(2));//6

//18. What does call(), apply(), and bind() do? What’s the difference between them?
//call() - Method borrowing from another object and forcing this to refer current object and it runs immediately.it takes arguments individually
//apply() - same as call but it takes arguments in array
//bind() - returns new function and execute it later. 

let p6 = {
    name:"Tina",
    age: 22,
    message: function(city, state) {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old from ${city} in ${state}`);    
    }
}

let p7 ={
    name: "Pooja",
    age: 23
}

p6.message.call(p7,"cbe", "TN" );//this refers p7 object, passing arguments individually
//Hi, my name is ppoja and I am 23 years old from cbe in TN

p6.message.apply(p7,["NJ", "USA"]);//Hi, my name is Pooja and I am 23 years old from NJ in USA

const introduce = p6.message.bind(p7,"cbe", "TN" );
introduce();//Hi, my name is Pooja and I am 23 years old from cbe in TN

//Practical / Coding:

/*19. Write a function that accepts a number and returns a memoized version of a function 
that calculates the factorial of the number.*/

function factorialMemoized() {
    let cache ={};
     function fact(n){
        if(n in cache){
            console.log('retrieved from cache');
            return cache[n];
        }
        if(n===0 ||n===1){
            cache[n]=1;
            return 1;  
        }
            
        let result = n * fact(n-1)
        cache[n]=result;
        return result;   
}
return fact;
}
const memoizedFactorial = factorialMemoized();
console.log(memoizedFactorial(5)); // 120
console.log(memoizedFactorial(5)); // 120

/*20. Write a function to implement currying that accepts a number and 
returns a function that accepts another number and returns the sum of both numbers.*/

function sum(a) {
    return function (b) {
        return a+b;
    }     
}
  
console.log(sum(2)(3)); // 5

//21. Given an array of integers, write a function to return the two numbers that add up to a target sum.
//(Example of Array + Object usage for optimal solution)

// function targetSum(arr, targetNum){
//     let target =[];
//     for(let i=0;i<arr.length; i++){
//         if(arr[i]+arr[i+1]=== targetNum){//this condition works fine for adjacent indexes.
//             target.push(arr[i],arr[i+1]); 
//         }
//     }
//     return target;
// }


function targetSum(arr, targetNum){
        let target =[];
        for(let i=0;i<arr.length; i++){
            for(let j=i+1; j <arr.length; j++) //complexity is O(n2)
                if(arr[i]+arr[j]=== targetNum){
                target.push(arr[i],arr[j]); 
            }
        }
        return target;
    }
console.log(targetSum([2,7,11,15],9))//[ 2, 7 ]
console.log(targetSum([3, 2, 4],6));;//[ 2, 4 ]
console.log(targetSum([1,2,3,4,5],7));//[2,5,3,4]
console.log(targetSum([1, 5, 3, 2], 6));//  [ 1, 5 ]

//optimal version with Object

function targetedSum(arr, targetNum) {
    let map = {};  // to store numbers seen

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let complement = targetNum - current;

        if (map[complement] !== undefined) {
            return [complement, current];
        }

        map[current] = i; // store number and its index
    }

    return [];  // return empty if no pair found
}


//22. What will be the output of this code? Explain why.

const persons = {
    name: "Alice",
    greet: function() {
      console.log("Hello, " + this.name);
    }
  };
  
  const greetFn = persons.greet;
  greetFn(); //Hello undefined . this depends on HOW the function is called, not where it was defined.
  const greetFns= persons.greet.bind(persons);
  greetFns (); // Hello, Alice

  //23. Write a pure function to reverse a string.
//(A pure function means → no side-effects, same input always gives same output)

function reverseString(word){
    return String(word).split('').reverse().join('');
}

console.log(reverseString("mother"));//rehtom
console.log(reverseString(321))//123

//24.What will be the output of this code? Why?

console.log([1, 2] == [1, 2]);  //false array or objects cant be compared directly. 
console.log({ a: 1 } == { a: 1 });//false Arrays & objects are reference types 

//25.Write a curried function that multiplies 3 numbers together.
function multiply(a){
    return function(b) {
        return function(c) {
            return a*b*c;
        }
    }
}
console.log(multiply(2)(3)(4));//24


//26. What is destructuring?
//Give one example of array destructuring and one of object destructuring.
/*destructing is extracting the properties of an array/object. */

let [a,b,...c]= ['apple' ,'banana','kiwi','grapes','orange'];
console.log(a);//apple
console.log(b);//banana
console.log(c);//['kiwi','grapes','orange']

let pers ={
    firstName: "Rahul",
    lastName: "shetty",
    age: 23
}
let{firstName: fName, lastName, age } =pers;
console.log(fName);//Rahul
console.log(lastName);//shetty
console.log(age);//23

7//27. Write a function to flatten a nested array.
let a5 =[1, [2, [3, 4]], 5]
console.log(a5.flat(3));//[1,2,3,4,5]
let a6 =[1, [2, [3, 4]], 5,[6,7],[9,10,11],12]
console.log(a6.flat(Infinity));//if not sure of how many nested then use infinity

//[1, [2, [3, 4]], 5] → [1, 2, 3, 4, 5]

//28. What is the difference between == and === in JavaScript?
/* == - loose equality. it checks only values not the type because of type coercion it converts the type and validate.
=== - strict equality. it checks both value and type.*/
console.log(2=='2')//true
console.log(2==='2')//false

//29. How does Object.assign() work?
//Does it do deep copy or shallow copy?
//Object.assign() - used to copy of an object
let staff = {
    id: 1,
    name: 'staffone',
    details: {
        city: "patna",
        country: "India"
    }
}
/*shallow Copy - copied top layers of properties and create same refernce for nested objects 
for both original and cloned version. so, modifying nested cloned objects will update original object */

let newObject = Object.assign({},staff);
newObject.details.city ='CBE';
console.log(newObject);//{ id: 1, name: 'staffone', details: { city: 'CBE', country: 'India' } }
console.log(staff);//{ id: 1, name: 'staffone', details: { city: 'CBE', country: 'India' } }

//deep copy - create separate reference for both clone/original. modifying clone will not affect original
let deepObject = JSON.parse(JSON.stringify(staff));
deepObject.details.city ='Kanpur';
console.log(deepObject);//{ id: 1, name: 'staffone', details: { city: 'Kanpur', country: 'India' } }
console.log(staff);//{ id: 1, name: 'staffone', details: { city: 'CBE', country: 'India' } }


//30. What is the output and why?

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}// 3 3 3. due to var (function scoped), the value of i after loop is 3, and that value is captured in all timeouts. usinh let it shows 0 1 2

//31
function display(a, b, ...rest) {//collect evrything left over into one thing
    console.log(a);
    console.log(b);
    console.log(rest);
  }
  
  let nums = [1, 2, 3, 4, 5];
  display(...nums); // 1 2 [3,4,5]//spread is breaking an array into arguments
  
