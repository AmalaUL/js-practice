//Step 1 — Function Declaration & Function Expression
//function declaration

function fullName(firstName, lastName){
    return `My name is ${firstName} ${lastName}`;
}

console.log(fullName("Tom","Jerry"));//My name is Tom Jerry

//function Expression

let sum = function(a,b,c){
    return `The total is: ${a+b+c}`;
}
console.log(sum(10,20,30));//The total is: 60

//Step 2 — Arrow Functions
//Write an arrow function with 2 params and explicit return
const multiplyNumber = (a,b) => {
    return a*b;
}
console.log(multiplyNumber(6,7));//42

//Write an arrow function with 1 param and implicit return
const sayHi = (name) => `Hi ${name}`;
console.log(sayHi("chatgpt"));//Hi chatgpt

//Write an arrow function with no param
const greet =() => console.log("hello world");
greet(); //hello world

//Step 3 — Default Parameters + Rest Parameters
//default param
const greetings = (name ='anonymous')=>{
    return `Hello ${name}`;
}

console.log(greetings("Megha"));//Hello Megha
console.log(greetings());//Hello anonymous

//Rest Param

function evenNum(...nums) {
    return nums.filter((num)=> num%2===0);
}

console.log(evenNum(1,2,3,4,5,6,7,8,9));//[2,4,6,8]

//Step 4: Callback Functions (simple + practical)
//A callback is a function that is passed as an argument to another function, and executed inside that function.

function numbersValidate (a,b,operation){
   return operation(a,b);
}

function total(x,y){
    return x+y;
}
console.log(numbersValidate(5,6,total));//11 total is callback function

//Challenge 1: Find Even Numbers
//The rest parameter (...num) must always be the last parameter in the function definition.

function numCheck(callback,...num){
    return callback(num);
}

function findEvenNums(nums){
    return nums.filter((num)=> num%2 === 0);
}
console.log(numCheck(findEvenNums,1,2,3,4,5,7,8));//[2,4,8]

//Challenge 2: Reverse String with Callback
function reverseString(text, callback){
    return callback(text);
}

function reverseText(txt){
    return txt.split('').reverse().join('');
}

console.log(reverseString("Mother",reverseText));//rehtoM

//Challenge 3: Multiply Numbers in Array
function multiplyNumbers(operation, ...numbers){
    return operation(numbers);
}

function mulNum(number){
  return   number.reduce((acc, num) => acc*num,number[0]);    
}

console.log(multiplyNumbers(mulNum,1,2,3,4)); //24

//Challenge 4: Sum of Squares
function sumOfSquares(operation,...num){
    return operation(num);
}

function sumOfSquarsNum(num){
    return num.map((ele)=>ele*ele).reduce((acc,num)=> acc+num,0);
}
console.log(sumOfSquares(sumOfSquarsNum,1,2,3,4));//30

//Challenge 5: String Length Comparator
function compareStringLength(textOne, textTwo, callback){
    return callback(textOne,textTwo);
}

function compareStringLen(str1, str2){
    if(str1.length > str2.length){
        return str1;
    }else{
        return str2;
    }
}
console.log(compareStringLength("apple", "banana",compareStringLen));//banana

//Challenge 6: Filter Out Negative Numbers
function filterNegativeNumbers(array,callback){
    return callback(array);
}

function filterNegativeNum(arr){
    return arr.filter((ele)=> ele > 0)
}
console.log(filterNegativeNumbers([1,-2,3,-4,5],filterNegativeNum));//[1,3,5]

//Bonus Challenge: Custom map() Function
 
/*Write a function customStartsWithFilter(array, letter, callback)
The function should return all strings in the array that start with the given letter
Use the callback to check the condition.*/
// Wrapper function
function customStartsWithFilter(array, letter, callback){
    return callback(array,letter)
}
// Actual filter logic as callback
function stringFilterWithLetter(array,letter){
   return array.filter((text) => text.startsWith(letter));
}
console.log(customStartsWithFilter(["apple", "banana", "avocado", "cherry"], "a", stringFilterWithLetter));//[ 'apple', 'avocado' ]

//Step 5 — Function Hoisting & IIFE (Immediately Invoked Function Expression)

/*Function declarations are hoisted fully (both name and body).
Function expressions and arrow functions are NOT fully hoisted (only variable name is hoisted with value undefined).*/

//function declaration - hoisted
greetPerson("God");//Hello God

function greetPerson(name){
    console.log(`Hello ${name}`);
}

//function expression - not hoisted
//greetHi("God");//ReferenceError: Cannot access 'greetHi' before initialization

let greetHi = function(name){
    console.log(`Hi ${name}`);
}

/*//IIFE - This is a function that executes immediately after creation.
(function(name){
    console.log("hello " + name);
})("Sanjana");

//Arrow function without paramter
(() =>{
    console.log("IIFE Hi");
})();
//Arrow function with paramter
((a,b) =>{
    console.log(a+b);
})(5,6);

*/
//step 6: Higher Order Function(HOF)
//A function that accepts another function as an argument, or returns a function, or both.

function filterByLength(arr,callback){
    let result=[];
    for(let item of arr){
       if(callback(item)){
            result.push(item);
       }
   };
   return result;
}

function isLongWord(word){
    return word.length > 5;
}

console.log(filterByLength(['apple','banana','kiwi','avocado','cherry'],isLongWord));//[ 'banana', 'avocado', 'cherry' ]

//another way
function filterByLengthAW(arr,callback){
    return callback(arr);
}

function isLongWordAW(word){
    return word.filter((item)=> item.length > 5);
}
console.log(filterByLengthAW(['apple','banana','kiwi','avocado','cherry'],isLongWordAW));//[ 'banana', 'avocado', 'cherry' ]

//challenge 2
function filterGreaterThan(arr,callback,thershold){
    let result =[];
    arr.forEach((item)=>{
        if(callback(item,thershold)){
            result.push(item)
        }
    })
    return result;
}

function isGreaterThan(number, thershold){
    return number > thershold;
}
console.log(filterGreaterThan([5,12,8,130,44],isGreaterThan, 20));//[ 130, 44]

//challenge 3
//Write a higher-order function that filters all strings from an array that have at least N vowels.

function filterByVowelCount(array, minVowelCount, callback){
        let result=[];
        array.forEach((item)=>{
           if(callback(item, minVowelCount)){
               result.push(item);
           }
        })
        return result;
}

function minVowelCountFn(word, minCount){
    let vowels =['a','e','i','o','u'];
  return word.split('').filter(char => vowels.includes(char)).length >= minCount
           
    
}
//console.log(minVowelCountFn(3));

console.log(filterByVowelCount(['apple','banana','grape','mango','papaya'], 3, minVowelCountFn));//[ 'banana', 'papaya' ]

//Step 7:  closure
/*A closure is a function that retains access to its lexical scope, 
even when the function is executed outside of that scope.

How does this happen?
When a function is declared, it has access to variables from the outer scope
in which it was created. Even if that function is called outside that scope, 
it can still access those variables. */

function outsideFunction(count){
    console.log("count of outer function is "+ count);
     return{
     increment(){
        count+=10;//closure happens here. inner function using outer function variable
        console.log("increment of 10: " + count);
    },
     decrement(){
        count-=10;
        console.log("decrement of 10: "+ count);
    }
}
}
const countNum =outsideFunction(1);//outer function execution is over
countNum.increment(); //11 but it takes the count as 1 and increase it
countNum.decrement();//1

//Challenge 1 — Counter with Custom Step
function createCounter(count){
    let step =0;
    return {
        increment: function(){
            step +=count ;
            console.log(step);
        },
        decrement: function(){
            step -=count;
            console.log(step);
        }
    }
}

const counter = createCounter(5);
counter.increment();//5
counter.increment();//10
counter.decrement();//5

//Challenge 2 — Limited Counter
function createLimitedCounter(limit){
    let count = 0;
      return function(){
            if(count < limit){
            count++;
            console.log(count);
            }else{
                console.log('Limit reached');
            }
        }
        
}
const limitedCounter = createLimitedCounter(3);

limitedCounter() // 1
limitedCounter(); // 2
limitedCounter(); // 3
limitedCounter(); // Limit reached
limitedCounter(); // Limit reached

//Challenge 3 — Password Protector (Closure)
function createPasswordChecker(secretPassword){
      return function (password) {   
        if(secretPassword === password){
            console.log('Access granted');
        }else{
            console.log('Access denied');
        }
    }
    
}
let checkPassword = createPasswordChecker('secret123'); //assigning password during runtime (flexible)
checkPassword('guess'); //Access deniend
checkPassword('secret123');//Access granted

//Challenge 4 — Private Bank Account

function createBankAccount(initialBalance){
    let balance =initialBalance;
    return {
        deposit: function(amount){
            balance = balance + amount;
            console.log("Balance: " +balance);
        },
        withdraw: (amount) => {
           if(balance >= amount) {
               balance = balance - amount;
               console.log("Balance: "+balance);
           }else{
               console.log('Insufficient balance');
           }
        },
        checkBalance: () =>{
            console.log("Balance: " +balance);
        }
    }
}

const myAccount = createBankAccount(100);

myAccount.checkBalance();   // Balance: 100
myAccount.deposit(50);      // Balance: 150
myAccount.withdraw(70);     // Balance: 80
myAccount.withdraw(100);    // Insufficient balance
myAccount.checkBalance();   // Balance: 80

//Challenge 5 — Customizable Multiplier Generator
function createMultiplier(factor){
    return function(num){
          return num * factor;
    }
}

const double = createMultiplier(2);
console.log(double(5));   // 10

const triple = createMultiplier(3);
console.log(triple(4)); //12

//step 8: Call,Bpply, Bind
//call (method borrowing from another object via call and forcing this to take current object properties)
const students = {
    details: function(college, city) {
      console.log(this.name + " from " + college + ", " + city);
    }
  };
  
  const student1 = {
    name: "Megha"
  };

  students.details.call(student1,"IIT","Delhi");//Megha from IIT, Delhi
  //Task 1
  const student = {
      name: "Alice",
      age: 22,
      greet: function(){
          return "Hello, " + this.name;
      },
      introduce: function(college,city){
          return this.name + " studies at " + college + " in " + city;
      }
  }

  const teacher ={
      name: "Mr.John",
      age: 45
  }

  console.log(student.greet.call(teacher));//Hello, Mr.John
  console.log(student.introduce.call(teacher,"IIT","Delhi"));//Mr.John studies at IIT in Delhi

  //Challenge 3: Borrowing a Method (Advanced Use Case)
  /*Why use call()?
We want to borrow the slice() method from Array
and force it to work on arguments (even though arguments is not an array).

This is where call() comes in: */


  function showArguments() {
    const args = Array.prototype.slice.call(arguments);
    console.log(args);
  }
  showArguments(1,2,3,4);

  //Challenge 4: Borrowing Method for a Custom Object

  const arrayLikeObject = {
    0: "a",
    1: "b",
    2: "c",
    length: 3
  };
  
    const joiners = Array.prototype.join.call(arrayLikeObject,"-");
     console.log(joiners);//a-b-c
     

     //Challenge 5: Using call() to Borrow Math.max
    const numbers = [5, 9, 2, 7, 1];
    const result = Math.max.call(...numbers);//use spread operator to consider as indivial element 
    console.log(result);//9

    //apply()
    /*apply() calls a function, just like call() does.

The difference is in how you pass arguments.

Syntax: 
functionName.apply(thisArg, [arg1, arg2, ...]);
thisArg → value of this inside the function

Second argument → array (or array-like) of arguments */
//Challenge 1: same student teacher 
console.log(student.introduce.apply(teacher,["IIT","Delhi"]));//Mr.John studies at IIT in Delhi

//Challenge 2: same mirror math max
const applyResult = Math.max.apply(null,numbers);
console.log(applyResult);//9

//Challenge 3: 
const arrayLikeObjects = {
    0: 10,
    1: 20,
    2: 30,
    length: 3
  };
  
  const sliceApply = Array.prototype.slice.apply(arrayLikeObjects);
  console.log(sliceApply);//[10,20,30]

  //Challenge 4:
  const personOne = {
    firstName: "Alice",
    lastName: "Johnson",
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + " from " + city + ", " + country;
    }
  };
  
  const anotherPerson = {
    firstName: "Bob",
    lastName: "Smith"
  };
  const funcApply = personOne.fullName.apply(anotherPerson,["Paris","France"]);
  console.log(funcApply);//Bob Smith from Paris, France

  //Bind
  /*What is bind()?
bind() is a method that creates a new function.
It sets the this context permanently for the new function.
It also allows you to pass initial arguments (optional).

Syntax:
const newFunction = originalFunction.bind(thisArg[, arg1[, arg2[, ...]]]);
thisArg: The value to which the this keyword should refer inside the new function.

arg1, arg2, ...: Optional arguments that will be prepended to the arguments passed when the new function is called.

bind() is mainly used when you want to create a function that will 
later be called with a specific this context, but you don't want to invoke it immediately.

*/
//Task 1
const employee = {
    name: "John Doe",
    position: "Developer",
    introduce: function(city, country) {
      return `${this.name}, a ${this.position}, from ${city}, ${country}`;
    }
  };
  
  // Complete the code here using bind() to create a new function

  const newFunctionEmployee = employee.introduce.bind({name: "Bob",position: "Tester"},"New York", "USA");
  console.log(newFunctionEmployee());//Bob, a Tester, from New York, USA

  //Task 2
const user = {
    name: "Alice",
    sayHello: function(greeting) {
      return `${greeting}, ${this.name}`;
    }
  };

  const userFunc = user.sayHello.bind({name: "Charlie"});
  console.log(userFunc("Good Morning"));//Good Morning, Charlie

//Step 9: Memoization?
/*It’s a performance optimization technique.
It caches the result of a function call,
so if the same input is provided again —
we return the cached result instead of recalculating.

Why is it useful?
✅ Speeds up expensive functions (like recursion, heavy calculations)
✅ Avoids repeated work
✅ Very common in dynamic programming, API caching, etc. */

//Task 1: Write a memoized version of a function that calculates the sum of an array of numbers.
function calculateArray(){
    let cache ={};//prefer to use object
return function(arr){
    const key = JSON.stringify(arr);//converting the input array to string as cache is an object
    if(key in cache){
        console.log("fetching from cache..");
        return cache[key];
    }else{
        console.log("calculate..");
        sum = arr.reduce((acc,num)=>acc+num,0);
        cache[key] =sum;//though the sum is number, its stored as stringfy array
        return sum;
    }
}
}

const calcArr = calculateArray();
console.log(calcArr([1,2,3,4])); // calculate .. 10
console.log(calcArr([1,2,3,4]));// fetching from cache .. 10
console.log(calcArr([5,6,4]));//calculate .. 15

//Challenge 2:Memoize a function that multiplies 2 numbers (a, b).
function multiplies(){
    let cache ={};
    return function(a,b){
        //const key = a+','+b;//composite key (string key)
        const key = JSON.stringify([a,b])//safer to use
        if(key in cache){
            console.log("Fetching from cache...");
            return cache[key];
        }else{
            console.log("Calculating...");
            return cache[key] = a * b;
        }
    }
}

const multiply = multiplies();
console.log(multiply(2, 3)); // Calculating... 6
console.log(multiply(2, 3)); // Fetching from cache... 6
console.log(multiply(3, 4)); // Calculating... 12

//Step 10: Currying
/*Converting a function that takes multiple arguments into a sequence of functions that take one argument at a time.*/

//example
function add(a,b){
    return a+b;
}//normal function
console.log(add(2,3));
function curriedAdd(a){
    return function (b){
        return a+b;
    }
}
console.log(curriedAdd(2)(3));

//challenge 1: Write a curried function greet that works like this:
function greeting(greetMessage){
    return function(name){
        return `${greetMessage}, ${name}`;
    }
}

console.log(greeting("Hello")("Alice")); // "Hello, Alice"
console.log(greeting("Good Morning")("Bob")); // "Good Morning, Bob"

//challenge 2: greetWithLocation 3 param
function greetWithLocation (greetMessage){
   return function(name){
    return function(location){
            return `${greetMessage}, ${name} from ${location}`;
        }
    }
}

console.log(greetWithLocation("Hello")("Alice")("Paris"));// Output: "Hello, Alice from Paris"

//challenge 3: 
function sumNumbers(a, b, c) { return a + b + c; }
function curry(fn) {
    return function curried(...args) {
      console.log('Collected args:', args);
  
      if (args.length >= fn.length) {
        // Once we have enough args — execute!
        return fn(...args);
      } else {
        // Otherwise return a NEW curried function that remembers args so far
        return function(...nextArgs) {
          return curried(...args, ...nextArgs);  // accumulate
        };
      }
    };
  }
  

const curriedSum = curry(sumNumbers);
console.log(curriedSum(1));
console.log(curriedSum(1)(2));
console.log(curriedSum(1)(2)(3));

//Step 11: Function Overloading
/*Even though JavaScript doesn’t support true overloading like Java/C++,
we simulate overloading by checking:

Number of arguments → using arguments.length

Type of arguments → using typeof, Array.isArray(), etc.*/
function describePerson(name,age,city){
    if(arguments.length === 1){
        console.log(`Name: ${name}`);
    }else if(arguments.length === 2){
        console.log(`Name: ${name}, Age: ${age}`);
    }else if(arguments.length >= 3){
        console.log(`Name: ${name}, Age: ${age}, City:${city}`);
    }else{
        console.log("Invalid Input");
    }
}

describePerson("Alice");//Name: Alice
describePerson("Alice", 25);//Name: Alice, Age: 25
describePerson("Alice",25, "Paris");//Name: Alice, Age: 25, City:Paris
describePerson();//Invalid Input

//Task 2:
function processInput (input){
    if(typeof input === 'number'){
        console.log(`Number: ${input}`);
    }else if(typeof input === 'string'){
        console.log(`String: ${input}`);
    }else if(Array.isArray(input)){
        console.log(`Array of length ${input.length}`);
    }else{
        console.log("No input provided");
    }
}

processInput(5);//Number: 5
processInput("Hello");//String: Hello
processInput([1, 2, 3]);//Array of length 3
processInput();//No input provided

//Task 3
function calculation(a,b){
    if(typeof a === 'number' && typeof b === 'number' && arguments.length === 2){
        const sum = a + b;
        return sum;
    }else if (Array.isArray(a) && arguments.length === 1){
       sumOfArray = a.reduce((acc,num)=>acc+num,0);
       return sumOfArray;
    }else if(typeof a === 'string' && typeof b === 'number' && arguments.length === 2){
         let text ='';
        for(let i=0; i < b ; i++){
              text =text+a;
        }
        return text;
    }else{
        return "invalid input"
    }

}
console.log(calculation(2, 3));          // 5
console.log(calculation([1,2,3,4]));     // 10
console.log(calculation('Hi', 3));       // "HiHiHi"
console.log(calculation(true));          // "Invalid input"
console.log(calculation(2, 3,4));        // "Invalid input"
console.log(calculation([1,2,3,4], [3,4])); // "Invalid input"