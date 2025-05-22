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


//Q8. What is object destructuring? Show an example
//destructing is to unpack object properties into variables.
let {name:fullName, age, salary} = user;
console.log(fullName);//employeeOne
console.log(age);//30
console.log(salary);//45000

//Q9. How can you copy an object in JavaScript? Explain shallow copy vs deep copy.
//copying object can be done through spread operator
let copyUser = {...user};
copyUser.age =67;
console.log(copyUser);
console.log(user);



//above shallowcopy works fine for objects does not have any nested objects.
//create new object with nested object
let home ={
    nameOfHome: 'Ushas',
    ageofHome: 3,
    ownerDetails: {
        name: 'Loganathan',
        age: 72,
        state: 'TN',
        number: [6, 5]
    }
}

//take a shallow copy
/* nested objects will have same reference for both original and clone(copied) objects. so if we modify the value of nested object 
will update original as well */
let shallowCopyHome = {...home};
shallowCopyHome.ownerDetails.state ='KL';
console.log(shallowCopyHome); //state is KL
console.log(home);//state is KL

//take deep copy
let deepCopyHome = JSON.parse(JSON.stringify(home)); //convert to JSON string and parse it back to new object. this will have separate reference for original and copied one.
deepCopyHome.ownerDetails.name ='Logan A';
console.log(deepCopyHome);//OwnerDetailsname is Logan A
console.log(home);//OwnerDetailsname is Loganathan

//Q10. What is the difference between Object.freeze() and Object.seal()?
//Object.freeze() - will not allow to modify/add/delete the properties of an object
let frozenUser = Object.freeze({...user});
frozenUser.name ='test';
frozenUser.gender ='Male';
delete frozenUser.age;
console.log(frozenUser);//same as user. no change
console.log(user);

//Object.seal() - will allow user to modify the property but will not allow to add/delete.
let sealedUser =Object.seal({...user});
sealedUser.name='test';//updated
sealedUser.gender ='Male';
delete sealedUser.age;
console.log(sealedUser);//name is changed to test from employeeOne. rest all same
console.log(user);//name is employeeOne

//Object.assign() - used to copy the object (works as shallowCopy)
let copiedUser = Object.assign({},user);
console.log(copiedUser);

//Q11. How does the spread operator (...) work with objects?
/* spread oerator is used to copy/merge the object.
copy object- refer the above 2 questions. will have example for merge*/
let userThree = {...user,...userOne};
console.log(userThree);
//age and salary value is overwritten with UserOne Object as both object has same properties.

//Q12. What is optional chaining (?.) and why is it useful?
/* optional chaining is to avoid crashing. it gives undefined instead of type error when object does not exist */
let p1 = null;
//console.log(p1.name)//type error. cannot read property 'name' of null
//console.log(p1?.name)//undefined

//Q13. Explain object shorthand syntax with an example.
//it uses when variable and key name are same.
let fName ='test';
let lName ='one';
let id = 2;
let staff = {fName,lName,id};
console.log(staff);

//Q14. What are computed property names in objects? Give an example.
//it handles dynamic keys inside object literals with []
let key = 'score';
let prop ='city';
let staff1 = {
    name: 'staffOne',
    age: 67,
    [key]: 88,
    [prop]: 'NJ'
}
console.log(staff1);

//Q15. What is the difference between hasOwnProperty() and the in operator?
//in checks both own and inherited property
//hasOwnproperty checks only own property(direct)
const obj = { x: 10 , y: 20};

console.log("x" in obj); //true
console.log(obj.hasOwnProperty("x")); //true

console.log("toString" in obj); //true
console.log(obj.hasOwnProperty("toString")); //false



