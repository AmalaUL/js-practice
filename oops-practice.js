
/*
//Object literals
let car ={
    brand: 'Toyato',
    model: 'Camry',
    year : 2020,
    start : function(){
        console.log('car started');
    },
    getDetails: function(){
        console.log(`Car brand is ${this.brand} and model is ${this.model} and Year is ${this.year}`);
    }
}
car.start();//car started
car.getDetails();//Car brand is Toyato and model is Camry and Year is 2020

//Challenge
const book ={
    title : 'Atomic Habits',
    author:'James Clear',
    pages: 320,
    read : true,
    info: function(){
        console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${this.read? 'Yes' : 'No'}`);
    },
    toggleRead: function(){             
        this.read =!this.read;
    }
}
book.info();//Title: Atomic Habits, Author: James Clear, Pages: 320, Read: Yes
book.toggleRead();
book.info();//Title: Atomic Habits, Author: James Clear, Pages: 320, Read: No
book.toggleRead();
book.info();//Title: Atomic Habits, Author: James Clear, Pages: 320, Read: Yes

//Challenge
const contact = {
    name: "John Doe",
    phone: "123-456-7890",
    email: "john@example.com",
    updatePhone : function (newNumber){
    //    let formattedPhoneNumber = newNumber.substr(0,3)+'-'+
    //                               newNumber.substr(3,3)+'-'+ 
    //                               newNumber.substr(6,4);
    //     return this.phone = formattedPhoneNumber;
    //optimized way
    let formatted = `${newNumber.slice(0,3)}-${newNumber.slice(3,6)}-${newNumber.slice(6,10)}`;
    this.phone =formatted;
    return this.phone
    },
    maskEmail: function (){
    //    let substrOfEmailBeforeAt= this.email.substr(0,this.email.indexOf('@'));
    //     let substrOfEmailAfterAt = this.email.substr(this.email.indexOf('@'));
    //     let arrayOFSubstr = substrOfEmailBeforeAt.split('');
        
    //     for(i=0;i<arrayOFSubstr.length;i++){
    //         arrayOFSubstr[i] = '*';
    //     }
    //     return arrayOFSubstr.join('')+(substrOfEmailAfterAt);
    //optimized way
    const atIndex = this.email.indexOf('@');//4
    const masked ='*'.repeat(atIndex);//****
    return masked+this.email.slice(atIndex);
     }
  };
  
  console.log(contact.updatePhone('9876543210'));//987-654-3210
  console.log(contact.maskEmail());//****@example.com
  console.log(contact.phone);//987-654-3210
  console.log(contact.email);//john@example.com


  //Topic 2 - constructor functions
  //Task 1
  function Animal(name,species){//constructor function name starts with capital
    this.name = name;
    this.species = species;
    this.describe = function(){
            console.log(`This is a ${this.species} named ${this.name}`)
    }
  }

  const animalOne = new Animal('Sheru','Tiger');
  const animalTwo = new Animal('Appu','Elephant');

  animalOne.describe();//This is a Tiger named Sheru
  animalTwo.describe();//This is a Elephant named Appu

//Task 2
function BankAccount (accountHolder,balance){
    this.accountHolder = accountHolder;
    this.balance =balance;
    this.deposit = function(amount){
        this.balance += amount;
            console.log(`Deposited: ${amount} and totalBalance now: ${this.balance}`);
    }
    this.withdraw = function(amount){
        if(this.balance >= amount){
            this.balance -= amount;
            console.log(`Withdrawn: ${amount} and totalBalance now: ${this.balance}`);
          }else{
              console.log('Insufficient funds');
          }
    }
    this.getBalance =function(){
        console.log(`Current Balance for ${this.accountHolder}: ${this.balance}`);
    }
}

const acc1 = new BankAccount("Ravi", 1000);

acc1.deposit(500);       // Deposited: 500 and totalBalance now: 1500
acc1.getBalance();       // Current Balance for Ravi: 1500
acc1.withdraw(2000);     // Insufficient funds
acc1.withdraw(1000);     // Withdrawn: 1000 and totalBalance now: 500
acc1.getBalance();       // Current Balance for Ravi: 500


//Interview Question
//Constructor Refactor - convert object lietral to constructor functions
function Student(name,age,marks) {
    this.name =name;
    this.age = age;
    this.marks= marks;
  
    this.getAverage = function () {
      const sum = this.marks.reduce((acc, val) => acc + val, 0);
      let avg = sum / this.marks.length;
      return parseFloat(avg.toFixed(2));
    }
  };
  
const s1 = new Student("Ayesha", 21, [80, 75, 90]);
const s2 = new Student("Rahul", 22, [60, 70, 80]);
console.log(s1.getAverage()); // 81.67
console.log(s2.getAverage()); // 70

//Topic 3 -this keyword
//Task 1
let person ={
    firstName: 'Rithanya',
    lastName: 'Abishek',
    age: 15,
    getFullName: function(){
        console.log(`FullName: ${this.firstName} ${this.lastName}`);
    },
    isAdult: function(){
        console.log(this.age>=18? true: false);    
    }
}

person.isAdult();//false //here this refers to person object
person.isAdult.call({firstName: 'Rithi',lastName: 'Ishu', age: 19});//true here this refers to the object inside call

//Task 2:
const logger ={
    prefix: 'App',
    log: function(message){
        console.log(`LOG - ${[this.prefix]} : ${message}`);
    }
}

logger.log('Something went wrong');//LOG - App : Something went wrong
logger.log.call({prefix: "DB"},  "Connection failed");//LOG - DB : Connection failed

function show() {
    console.log(this); // In a browser: `this` is `window`
  }
  show();


//Prototype
function Persons(name){
    this.name=name;
}
Persons.prototype.greet= function(){
    console.log(`The name is: ${this.name}`);
}

const p1 = new Persons('Riti');
const p2 = new Persons('Rimi');
p1.greet();//The name is: Riti
p2.greet();//The name is: Rimi
console.log(p1.greet === p2.greet); // true when using prototype

//Challenge: Prototype Override Test
function User(name){
    this.name =name;
}

User.prototype.sayHi= function(){
    console.log(`Hi ${this.name}`);
}

const u1 = new User('Tom');
const u2 = new User('Jerry');
console.log(u1.sayHi === u2.sayHi);//true
u1.sayHi = function(){
    console.log(`Hey, I'm ${this.name} - this is a custom hi!`);
}
u1.sayHi();//Hey, I'm Tom - this is a custom hi!
u2.sayHi();//Hi Jerry
console.log(u1.sayHi === u2.sayHi);//false

//Protype Chaining (inherit properties and methods from another object)
const vehicle ={
    move: function(){
        console.log('Vehicle is moved');
    }
}

//using __proto__ (old way)
const car1 ={
    __proto__ : vehicle
}
car1.move();//Vehicle is moved

//using Object.create() (modern JS)
const car2 = Object.create(vehicle);
car2.move();//Vehicle is moved


//Object.setPrototypeOf() - assiging methods of one object to another existing obj
const car3 ={
    name: 'BMW'
}
Object.setPrototypeOf(car3, vehicle);
car3.move();//Vehicle is moved

console.log(Object.getPrototypeOf(car2));//{ move: [Function: move] } //built-in JavaScript method that retrieves the prototype
console.log(Object.getPrototypeOf(car2) === vehicle );//true confirming that car2 inherits from vehile.

//Topi 5- classes
class car{
    constructor(brand,year){
        this.brand =brand;
        this.year= year;
    }
    details(){
        console.log(`Brand: ${this.brand}, Year: ${this.year}`);
    }
}
const c1 = new car('BMW',2025);
c1.details();//Brand: BMW, Year: 2025

//Task
class Book{
    constructor(title,author,year){
        this.title =title;
        this.author=author;
        this.year=year;
    }
getSummary(){
    console.log(`Book  ${this.title} by Authour ${this.author} (${this.year}) `);
}
}

const b1 = new Book('Army', 'ABC',2020);
const b2 = new Book('Navy', 'DEF',2022);
b1.getSummary();//Book  Army by Authour ABC (2020)
b2.getSummary();//Book  Navy by Authour DEF (2022)

//static method inside class
class Converter{
    
    static toCelsius(farenheit){
       const result = (farenheit - 32) * 5/9
        console.log(result);
    }
    toFarenheit(celsius){
        const  result = (celsius * 9/5) + 32
        console.log(result);
    }
}

const convert1 = new Converter();
//convert1.toCelsius(45);//TypeError: convert1.toCelsius is not a function. static method cant be used by instances
convert1.toFarenheit(30);//86
Converter.toCelsius(46);//7.777777777777778

//getters - you can call a method like property
class Rectangle{
    constructor(width,length){
        this.width=width;
        this.length=length;
    }
    get area(){
        return this.width * this.length;
    }
}

const rect = new Rectangle(4,5);
console.log(rect.area);//20 

//setters 
class PersonOne {
    set name(value) {
      this._name = value; // ✅ uses _name internally
    }
  
    get name() {
      return this._name;
    }
  }
  const p6 = new PersonOne();
  p6.name ='Rithu';//we need to assign value for setters separately if we dont have constructor in class
  console.log(p6.name);//Rithu if name is doesnot set then output will be undefined

  class PersonTwo{
      constructor(name){
          this.name =name;
      }
    set name(value) {
        this._name = value; // ✅ uses _name internally
      }
    
      get name() {
        return this._name;
      }
  }

  
  const p7 = new PersonTwo('Rithu');
  console.log(p7.name);//Rithu

  class Staff{
      constructor(name,age){
          this.name=name;
          this.age=age;
      }
      set age(value){
        if (value > 0) {
            this._age = value; // Only assign if valid
          } else {
            console.log("Age must be greater than 0"); // Log error instead of returning
          }
      
      } 
      get age(){
          return this._age;
      }
  }

  const staff1 = new Staff('Alice' ,30);
  console.log(staff1.age);//30
  const staff2 = new Staff('Bob' ,-5);
  console.log(staff2.age);// undefined

  
//class declaration vs class expression

const { DiffieHellmanGroup } = require("crypto");

//class declaration
class Animal1  {
    constructor(name){
        this.name = name;
       
    }
    speak(){
        console.log(`The animal named ${this.name} makes a sound.`);
    }
}

const a1 = new Animal1('Leo');
a1.speak();//The animal named Leo makes a sound.

//class expression
const car4 = class{
    constructor(brand){
        this.brand = brand;
    }
    drive(){
        console.log(`The ${this.brand} car is driving.`);
    }
}

const c4 = new car4('Toyota');
c4.drive();//The Toyota car is driving.

//2.1 - constructor
class Books {
    constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    info(){
        console.log(`Book: ${this.title} by ${this.author} published in ${this.year}`);
    }
}
const books1 = new Books('ABC','WYZ',2025);
books1.info();//Book: ABC by WYZ published in 2025

//2.2. Initializing Object Properties with default values
class Movie{
    constructor(title, director, rating=5){
        this.title = title;
        this.director=director;
        this.rating=rating;
    }
    details(){
        console.log(`Movie: ${this.title}, directed by ${this.director}, rated ${this.rating}/10`)
    }
}
const m1 = new Movie('Sita Ramam', 'testOne', 9.5);
m1.details();//Movie: Sita Ramam, directed by testOne, rated 9.5/10
const m2 = new Movie('NGK', 'TestTwo');
m2.details();//Movie: NGK, directed by TestTwo, rated 5/10

//2.2. Initializing Object Properties with conditional and complex values
class Recipe {
    constructor(name,rating){
        this.name = name || 'untitled'
        this.ingredients =[];
        this.rating = rating > 0 ? rating : 3 ;
    }
    addIngredient(...ingredient) {
        ingredient.forEach((item)=>{
            this.ingredients.push(item);
        })    
    }
    summary() {
        console.log(`Recipe: ${this.name} | Rating: ${this.rating}/5 | Ingredients: ${this.ingredients}`);
    }
}
const r1 = new Recipe('Sambar',4);
r1.addIngredient('Toor dal','Tomato', 'Onion');//Recipe: Sambar | Rating: 4/5 | Ingredients: Toor dal,Tomato,Onion
r1.summary();
const r2 = new Recipe('',-2);
r2.addIngredient('');
r2.summary();//Recipe: untitled | Rating: 3/5 | Ingredients:

//2.3. Instance Methods
class Circle{
    constructor(radius){
        this.radius = radius;
    }
    area(){
        return (Math.PI*this.radius*this.radius).toFixed(2);
    }
    circumference(){
        return (2*Math.PI*this.radius).toFixed(2);        
    }
    describe() {
        console.log(`A circle with radius ${this.radius} has area ${this.area()} and circumference ${this.circumference()}`)
    }

    static info() {
        console.log("Use Circle class to create a circle and get its properties.");
    }
    
}

const c1 = new Circle(5);
c1.describe();//A circle with radius 5 has area 78.54 and circumference 31.42
//c1.info();//TypeError: c1.info is not a function
Circle.info();//Use Circle class to create a circle and get its properties

//Method chaining
class Builder{
    constructor(){
        this.text ="";
    }
    add(str){
        this.text = this.text +' '+str;
        return this; //enables chaining
    }
    upperCase(){
        this.text = this.text.toUpperCase();
        return this;
    }
    print(){
        console.log(this.text.trim());
        return this;
    }
}
const build1 = new Builder();
build1.add('hello').add('world').upperCase().print();

//getters and setters
class Users {
    constructor(age){
        this._age = age;
    }
    get age(){
        return `User is ${this._age} years old`;
    }
    set age(value){
        if(value >= 0){
            this._age = value;
        }
    }
    show(){
        console.log(this._age);
    }
}

const users1 = new Users(67);
console.log(users1.age);//User is 67 years old
users1.age = 30;//setting new value as 30 so this time get age returns 30 instead of 67
console.log(users1.age);//User is 30 years old

//challenge for constructor & methods topic
class BankAccounts{
    constructor(ownerName, initialBalance){
        this._ownerName =ownerName;
        this._balance = initialBalance > 0 ? initialBalance : 0;
    }
    deposit(amount){
        if(amount >=0){
            this._balance += amount;
            return this;
        }  
    }
    withDraw(amount){
        if(this._balance >=amount){
            this._balance -= amount;
            return this;
        }
    }
    showBalance(){
        console.log(`Balance: ${this._balance}`);
        return this;
    }
    get accountSummary(){
        return `Account of ${this._ownerName} has balance $${this._balance}`;
    }
    static bankPolicy(){
        console.log('Minimum opening balance is $0. All deposits must be positive.');
    }
}

const acc = new BankAccounts("Alice",100);
acc.deposit(50).withDraw(30).showBalance();//Balance: 120

console.log(acc.accountSummary);//Account of Alice has balance $120
BankAccounts.bankPolicy();//Minimum opening balance is $0. All deposits must be positive.



//inheritance

class Vehicles{
    start(){
        console.log('Vehicle started');
    }
}

class Van extends Vehicles {
    petrolCheck(){
        console.log('Petrol is filled');
    }
}

const v1 = new Van();
v1.start();//Vehicle started
v1.petrolCheck();//Petrol is filled

//super() keyword
class Appliance {
    constructor(brand){
        this.brand =brand;
    }
}

class WashingMachine extends Appliance{
    constructor(brand, capacity){
        super(brand);
        this.capacity =capacity;
    }
    details(){
        console.log(`Brand: ${this.brand} and Capacity: ${this.capacity}`);

    }
}

const w1 = new  WashingMachine('Bosch', 7);
w1.details();//Brand: Bosch and Capacity: 7

//task 2 for super()
class Employee{
    constructor(name,position){
        this.name = name;
        this.position =position;
    }
    describe(){
        console.log(`Employee: ${this.name}, Position:${this.position}`);
    }
}

class Manager extends Employee{
    constructor(name,position,department){
        super(name,position);
        this.department =department;
    }
    describe(){
        super.describe();
        console.log(`Manages: ${this.department} department`);
    }
}

const m1 = new Manager("Alice", "Developer", "Engineering");
m1.describe();//Employee: Alice, Position:Developer Manages: Engineering department

//multo level inheritance
class Motor{
    start(){
        console.log('Motor Started');
    }
}
class Bus extends Motor{
    drive(){
        console.log('Bus is driving');
    }
}
class ElectricBus extends Bus{
    charge(){
        console.log('Electric bus is charging');
    }
}

const e1 = new ElectricBus();
e1.start();//Motor Started
e1.drive();//Bus is driving
e1.charge();//Electric bus is charging

//instance of
class VehicleOne{}
class CarOne extends VehicleOne{}
class BikeOne extends VehicleOne{}

function checkVehicleType(obj) {
    if(obj instanceof CarOne){
        console.log(`It's a CarOne`);
    }else if(obj instanceof BikeOne){
        console.log(`It's a BikeOne`);
    }else if(obj instanceof VehicleOne){
        console.log(`It's a VehicleOne`);
    }else{
        console.log('Unknown vehicle')
    }

}
const v = new VehicleOne();
const c = new CarOne();
const b = new BikeOne();
console.log(v instanceof VehicleOne);//true direct class
console.log(v instanceof CarOne);//false (child class)
console.log(c instanceof CarOne);//true - direct instance
console.log(c instanceof VehicleOne);//true (parent class)
console.log(c instanceof BikeOne);//false
console.log(b instanceof BikeOne);//true - direct instance
console.log(b instanceof VehicleOne);//true (parent class)
console.log(b instanceof CarOne);//false

checkVehicleType(v); // It's a VehicleOne
checkVehicleType(c); // It's a CarOne
checkVehicleType(b); // It's a BikeOne
checkVehicleType({});//Unknown vehicle
checkVehicleType(Object.create(CarOne.prototype));//It's a CarOne

//method overriding
class Printer {
    print() {
        console.log("Printing a document...");
    }
}

class ColorPrinter extends Printer {
    // override here
    print(){
        super.print();
        console.log('Printing a document using color ink from child class');
    }
}
const cp = new ColorPrinter();
cp.print();//Printing a document...Printing a document using color ink from child class

//static method also can be overridden
class A {
    static sayHi() {
      console.log("Hi from A");
    }
  }
  
  class B extends A {
    static sayHi() {
        super.sayHi();
      console.log("Hi from B");
    }
  }
  
  B.sayHi(); //Hi from A Hi from B
  

  //Encapsulation
  //9.1 Public fields and methods
  class Laptop{
      constructor(brand,model){
          this.brand = brand;
          this.model = model;
      }
      specs(){
          console.log(`Brand: ${this.brand}, Model: ${this.model}`);
      }
  }
  const l1 = new Laptop('Lenova', 'Inspiron 15');
  l1.specs();//Brand: Lenova, Model: Inspiron 15
  
  //9.2 private fields
  class LaptopOne{
    #model; //step 1 declaring private field insde class
    constructor(brand,model){   
        this.brand = brand;
        this.#model = model;//making it as private
    }
    specs(){
        console.log(`Brand: ${this.brand}, Model: ${this.#model}`);
    }
}
const l2 = new LaptopOne('Lenova', 'Inspiron 15');
l2.specs();//Brand: Lenova, Model: Inspiron 15
console.log(l2.brand);//Lenova
console.log(l2.model);//undefined
//console.log(l2.#model);//SyntaxError: Private field '#model' must be declared in an enclosing class

//Getters and setters with private fields
class BankAccountOne {
    #balance =0;
    constructor(owner,balance){
        this.owner =owner;
        this.#balance = balance;
    }
    get balance(){
        return this.#balance;
    }
    set balance(amount){
        if(amount >=0){
            this.#balance = amount;
        }else{
            console.log('Invalid balance');
        }
    }
    deposit(amount){
        this.#balance = this.#balance + amount;
    }
    withdraw(amount){
        if(amount <= this.#balance){
            this.#balance =this.#balance - amount;
        }else{
            console.log('Insufficient funds');
        }

    }
}
const accOne = new BankAccountOne("Alice", 1000);
console.log(accOne.balance); // 1000
accOne.deposit(500);
console.log(accOne.balance); // 1500
accOne.withdraw(2000);       // Insufficient funds
console.log(accOne.balance); // 1500
accOne.balance = -100;       // Invalid balance
console.log(accOne.balance); // 1500

// Static Methods and Properties
class User1 {
    constructor(user,age){
        this.user =user;
        this.age= age;
    }
    greet(){
        console.log(`Hello ${this.user}`);
    }
    static compareAges(user1,user2){
        return user1.age === user2.age;
    }
}
const u1 = new User1("Alice", 34);
const u2 = new User1("Bob", 34);
const u3 = new User1("Eve", 28);
u1.greet();//Hello Alice
console.log(User1.compareAges(u1,u2));//true
console.log(User1.compareAges(u1,u3));//false

//Challenge 1: Basic Static Method Inheritance

class VehicleTwo{
    static identify(){
        return 'I am a vehicle';
    }
}
class CarTwo extends VehicleTwo{
    static identify(){
         return super.identify() + " -> I am a car";
    }
}
//VehicleTwo.identify();//I am a vehicle
//CarTwo.identify();//I am a vehicle

//Challenge 2: Override Static Method 
console.log(VehicleTwo.identify());////I am a vehicle
console.log(CarTwo.identify());//I am a vehicle I am a vehicle -> I am a car

//Challenge 3: Polymorphic Static Factory
class User3{
    constructor(name){
        this.name = name;
    }
    static create(name){
        return new this(name);
    }
    role(){
        return "User3"
    }
}
class AdminUser extends User3{
    role(){
        return "AdminUser"
    }
}
class GuestUser extends User3{
    role(){
        return "GuestUser"
    }   
}
const u = User3.create("Alice");
const admin = AdminUser.create("Bob");
const guest = GuestUser.create("Charlie");

console.log(u.role());     // User3
console.log(admin.role()); // Admin
console.log(guest.role()); // Guest

//Challenge 1: Static Method Calling Another Static Method
class TemperatureConverter {
    static toCelsius(f) {
       return ((f - 32) * 5)/9;
    }
    static toKelvin(f) {
       return this.toCelsius(f) + 273.15;
       
    }
}
console.log(TemperatureConverter.toCelsius(100)); // 37.78
console.log(TemperatureConverter.toKelvin(100));  // 310.93

//Challenge 2: Static Property (Class Field) Counter
class Session{
    static activeCount = 0;
    constructor(){
        Session.activeCount++;
    }
    static getActiveCount(){
        return Session.activeCount;
    }
}
const s1 = new Session();
const s2 = new Session();
console.log(Session.getActiveCount()); // 2

//Computed Properties with Getters
class Rectangle1 {
    #width;
    #height;
    constructor(width,height){
        this.#width =width;
        this.#height =height;
    }
    get area(){
        let result1  = this.#width * this.#height;
        return result1;
    }
    get perimeter(){
        let result2 = 2 * (this.#width + this.#height);
        return result2;
    }
}
const rect = new Rectangle1(5,10);
console.log(rect.area);// 50
console.log(rect.perimeter);//30

//Polymorphism with getters
class Product{
    get discount(){
        return 0;
    }
}
class MemberProduct extends Product{
    get discount(){
        return 10;
    }
}
class PremiumMemberProduct extends Product{
    get discount(){
        return 20;
    }
}
const regular = new Product();
const member = new MemberProduct();
const premium = new PremiumMemberProduct();

console.log(regular.discount); // 0
console.log(member.discount);  // 10
console.log(premium.discount); // 20

//memoization in getters
class UserProfile{
    #firstName;
    #lastName;
    #cached = null;

    constructor(firstName,lastName){
        this.#firstName =firstName;
        this.#lastName =lastName;
    }
    get fullName(){
        if(this.#cached === null){
            console.log('...Computing...');
            this.#cached = this.#computeFullName();
        }
        return this.#cached;
    }
    #computeFullName(){
       return `${this.#firstName} ${this.#lastName}` 
    }
    updateName(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#cached = null; // clear cache
      }
    
}
const user = new UserProfile("Ada", "Lovelace");
console.log(user.fullName); // Ada Lovelace (computed)
console.log(user.fullName); // Ada Lovelace (cached)

user.updateName("Grace", "Hopper");
console.log(user.fullName); // Grace Hopper (re-computed)

//Polymorphism -Challenge: Notification Dispatcher
class Notifications{
    send(){
        throw new Error('send() method should be implemented by subclass');
    }
}
class EmailNotifications extends Notifications{
    constructor(emailId){
        super();
        this.emailId =emailId;
    }
    send(){
        console.log(`Sending email to ${this.emailId}`);
    }
}
class SMSNotifications extends Notifications{
    constructor(phoneNumber){
        super();
        this.phoneNumber =phoneNumber;
    }
    send(){
        console.log(`Sending SMS to ${this.phoneNumber}`);
    }
}
class InAppNotifications extends Notifications{
    constructor(userName){
        super();
        this.userName =userName;
    }
    send(){
        console.log(`Sending in-app message to ${this.userName}`);
    }
}


function sendAll(notifications){
    notifications.forEach((notifier)=> send(notifier));
}

const notifications =[
    new EmailNotifications('user@example.com'),
    new SMSNotifications(1234567890),
    new InAppNotifications('user123')
]

//Sending email to user@example.com
//Sending SMS to 1234567890
//Sending in-app message to user123

//Duck Typing Challenge (mimic of method overloading)
function processPayment(paymentMethod){
    if(typeof paymentMethod.pay === 'function'){
        paymentMethod.pay(150);
    }else{
        console.log('Invalid payment method');
    }
}
const creditCard  ={
    pay : function(amount){
        console.log(`Paid $${amount} with credit card`);
    }
}
const paypal   ={
    pay : function(amount){
        console.log(`Paid $${amount} with paypal`);
    }
}
const cash  ={
    paid : function(){
        console.log(`Paid with cash `);
    }
}

processPayment(creditCard);//Paid $150 with credit card
processPayment(paypal);//Paid $150 with paypal
processPayment(cash);//Invalid payment method

//strategy pattern for above example
class processPayments{
    constructor(paymentMethod){
        this.paymentMethod = paymentMethod;
    }
    pay(amount){
        this.paymentMethod(amount);
    }
}
const creditCardPayment  = (amount) =>{console.log(`Paid $${amount} with credit card`)};
const paypalPayment   = (amount) =>{console.log(`Paid $${amount} with paypal`)};
const cashPayment  =() =>{console.log(`Paid  with cash`)};

const p1 = new processPayments(creditCardPayment);
const p2 = new processPayments(paypalPayment);
const p3 = new processPayments(cashPayment);
p1.pay(150);//Paid $150 with credit card
p2.pay(150);//Paid $150 with paypal
p3.pay();//Paid  with cash
*/
//composition
const canEat = (name) =>{  console.log(`${name} is eating`)};
const canSleep = (name) =>{  console.log(`${name} is sleeping`)};
const canFly = (name) =>{  console.log(`${name} is flyig`)};
const canSwim = (name) =>{  console.log(`${name} is swimming`)};
class Bird{
    constructor(name){
        this.name =name
        this.eat = canEat; 
        this.fly = canFly; 
    }
    canFly(){
        this.fly(this.name);
    }
    canEat(){
        this.eat(this.name);
    }
}
const bird1 = new Bird('cuckoo');
bird1.canFly();//cuckoo is flyig
bird1.canEat();//cuckoo is eating
class Fish{
    constructor(name){
        this.name =name
        this.sleep = canSleep; 
        this.swim = canSwim; 
    }
    canSleep(){
        this.sleep(this.name);
    }
    canSwim(){
        this.swim(this.name);
    }
}
const fish1 = new Fish('JellyFish');
fish1.canSleep();//JellyFish is sleeping
fish1.canSwim();//JellyFish is Swimming