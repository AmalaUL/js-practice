//Task 1 - synchronous call back
/*Write a function calculate(num1, num2, callback)
– It adds num1 + num2
– Then calls callback and passes the sum */

function calculate(num1,num2,callback){
    console.log(`num1: ${num1} ; num2: ${num2}`);
    callback(num1,num2);
}

function sum(number1,number2){
    let result  = number1 + number2;
    console.log(`sum of the numbers: ${result}`);
}

calculate(3,4,sum);//num1: 3 ; num2: 4 sum of the numbers: 7

//asynchronous call back
function delayedSum(num1,num2,callback){
    console.log('adding num1 and num2')//this one printed first
    let result = num1+num2;
    setTimeout (function () {
        callback(result);   
    },3000)
    console.log('msg display after sum');//this one print second as callback has 3 seconds delay. though it is written after callback.
}

function showSum(total){
    console.log("Sum of numbers: " +total);//finally this one printed as Sum of Numbers: 11 after 3 seconds
}

delayedSum(5,6,showSum);

//callback hell
function print(){
    setTimeout (function() {
        console.log('step 1 ');
        setTimeout (function () {
            console.log('step 2 ');
            setTimeout( function(){
                console.log('step 3 ');
            },1000)       
        },1000)    
    },1000)   
}
print();