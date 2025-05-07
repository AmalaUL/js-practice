//Q1. How do you create an object in JavaScript? List 2 ways.

//object literals
let user ={
    name: "employeeOne",
    age: 30,
    salary: 45000
}
console.log(user);

//object constructor
let userOne = new Object();
userOne.firstName = "employee";
userOne.age = 35;
userOne["salary"] =50000;
console.log(userOne);

//Q2. What is the difference between dot notation and bracket notation to access properties?

/* dot notation is used to access the properties of objects when it is valid. Bracket notation can be used
to access when key has space or special character or key is dynamic*/
console.log(user.age)//using dot notation 30
userOne["last Name"] = 'tester'//added new propert with space
console.log(userOne);
console.log(userOne["last Name"]);//tester

//Q3: How can you check if a property exists in an object? (name all possible ways)

//method 1 
console.log(user.city)//undefined
//method 2
//console.log(user?.city)//undefined
//method 3
console.log("city" in user);//false
console.log("salary" in user);//true

//Q4. How do you delete a property from an object?
delete userOne["last Name"];
console.log(userOne)//last name key is deleted

//Q5. What is the difference between Object.keys(), Object.values(), and Object.entries()?

/*Object.keys() -- To  print all keys from an Object in array format & to iterate with only keys of an object.
Object.values() -- To  print all values from an Object in array format & to print or iterate with only values of an object.
Object.entries() -- To  print both keys & values from an Object in array format & to iterate with both */

//print in array format
console.log(Object.keys(user))//[ 'name', 'age', 'salary' ]
console.log(Object.values(user))//[ 'employeeOne', 30, 45000 ]
console.log(Object.entries(user))//[ [ 'name', 'employeeOne' ], [ 'age', 30 ], [ 'salary', 45000 ] ]

//iterate only keys
Object.keys(user).forEach((keys)=>{
    console.log(keys); //name age salary
})

//iterate all values from user Object
Object.values(user).forEach((value)=>{
    console.log(value); 
})//output employeeOne 30 45000 

//iterate both keys and values from user Object
for(let[key,value] of Object.entries(user)){
    console.log(key + " : "+ value);
}

//Q6. How do you add a method to an existing object?
userOne.lastName ="Two"; //adding new property to existing object
console.log(userOne);
userOne.fullName = function(){
    return `Employee full name is ${this.firstName} + ${this.lastName}`;
}

console.log(userOne.fullName());
console.log(userOne);//fullName function added

//Q7: Explain the this keyword in object methods
/* this keyword refers to current object. Check Q6.answer. this keyword refers to UserOne object and this.firstname
gets the fristName of userOne object. */
