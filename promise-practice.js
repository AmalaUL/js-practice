const fetch = require('node-fetch');
//Task 1
//Write a Promise that checks if a number is even or odd.
//If even → resolve with "Even number"
//If odd → reject with "Odd number" 
/*
function checkEvenNum(num){
return new Promise(function(resolve,reject){
        if(num%2===0){
            resolve('Even Number');
        }else{
            reject('Odd/Prime Number');
        }   
})
}

checkEvenNum(6)
    .then(result=> console.log(result))
    .catch(error => console.log(error));

checkEvenNum(9)
    .then(result=> console.log(result))
    .catch(error => console.log(error));

//Task 2 : Write a function called isPositiveNumber(num) that returns a Promise:

function isPositiveNumber(num){
    return new Promise((resolve,reject) =>{
        if(num > 0){
            resolve('Positive Number');
        }else if(num<=0){
            reject('Zero  or Negative Number');
        }
    })
}

isPositiveNumber(8)
    .then(result => console.log(result))//Positive Number
    .catch(error => console.log(error))
    .finally(()=> console.log('number checked'));
isPositiveNumber(0)
    .then(result => console.log(result))
    .catch(error => console.log(error))//Zero  or Negative Number 
    .finally(()=> console.log('number checked'));
isPositiveNumber(-9)
    .then(result => console.log(result))
    .catch(error => console.log(error))//Zero  or Negative Number   
    .finally(()=> console.log('number checked')); 

//What is the difference between .then() and .catch()?

// then() will be triggered if resolved is done    
//catch() will be triggered if it is rejected and it will catch the error

// what will be the output
Promise.resolve('Done!')
  .then(result => {
    console.log(result);//Done!
    return 'Next Step';
  })
  .then(next => console.log(next));//Next Step

//Output Prediction (Rejection)

Promise.reject('Error occurred!')
  .then(result => console.log(result))
  .catch(error => console.log(error));//Error Occurred!

 //True/False — Quick
//A Promise can be in both fulfilled and rejected states at the same time. (True / False?). false promise can be either fullfilled or rejected from pending.

//Write a Promise that resolves to "Task Completed" after 2 seconds.

new Promise((resolve, reject) =>{
       setTimeout(function (){
               resolve('task completed');
           },2000)
       }).then(result => console.log(result));

 
//what happens here?
new Promise((resolve, reject) => {
    reject('Failed!');
  })
  .then(result => console.log(result))
  .finally(() => console.log('Finished!'));//Finished! will be printed
  //UnhandledPromiseRejectionWarning: will occur as catch block is missing when code has reject.

 //what is the output
 
 Promise.resolve(5)
  .then(num => num * 2)
  .then(num => Promise.resolve(num + 3))
  .then(result => console.log(result)); //13

 //what is the outout
 Promise.resolve('Start')
  .then(res => {
    throw new Error('Something went wrong');
  })
  .catch(err => console.log('Caught:', err.message))// Caught: Something went wrong
  .then(() => console.log('After catch block'));//After catch block

  //True / False Quick
//.finally() can modify the resolved or rejected value. (True / False?) false. finally does not care about resolve or reject. it will just close the calls.

//Write a Promise that rejects with "Invalid Input" if number < 0
//Else resolves with "Valid Input".Test with both positive and negative numbers. 

function inputCheck(num){
    return new Promise ((resolve,reject)=>{
        if(num>0){
            resolve('Valid Input');
        }else if(num <=0){
            reject('Invalid Input');
        }
    })
}
    inputCheck(5)
        .then(resut => console.log(result))
        .catch(error => console.log(error));   

    inputCheck(-5)
        .then(resut => console.log(result))
        .catch(error => console.log(error)); 
//what is output
Promise.resolve('Initial Value')
  .finally(() => {
    return 'Changed!'; 
  })
  .then(result => console.log(result));//Initial value will be printed. finally is not triggered because its inside the promise not called after then or catch. is it so?

//direct promise validation

let divisibleCheck = new Promise((resolve,reject)=>{
    let num = 12;
    if(num%3 ===0){
        resolve("divisible by 3");
    }else{
        reject("not divisible by 3");
    }
})
divisibleCheck
    .then(result => console.log(result))//divisible by 3
    .catch(error => console.log(error));

let divisibleCheckBy3 = new Promise((resolve,reject)=>{
        let num = 10;
        if(num%3 ===0){
            resolve("divisible by 3");
        }else{
            reject("not divisible by 3");
        }
    })
divisibleCheckBy3
        .then(result => console.log(result))
        .catch(error => console.log(error));//not divisble by 3    

//promise chaining
//only sync chnaining

Promise.resolve(4)
       .then(num => {
           console.log('Num: ' +num);//4
           return num*2;
        })
        .then(result =>{
            console.log('Num: ' + result);//8
            return result+5;
        })
        .then(secondResult => {
            console.log('Num: ' +secondResult);//13
            return secondResult -3; 
        })
        .then(final => console.log('final Num: ' +final)); //10

//chanllenge 2 mix of sync and async
Promise.resolve(3)
       .then(num => {
           console.log('initial value: ' +num);//initial value: 3
           return num*4;
       })
       .then(secondValue => {
            console.log('second value: ' +secondValue);//second value: 12
            return new Promise(resolve => {
                setTimeout(function(){
                    resolve(secondValue + 10);
                },2000)
            })
       })
       .then(thirdValue =>{
            console.log('third value: ' +thirdValue);//third value: 22
            return thirdValue - 5;
       })
       .then(finalValue => {
            console.log('final value: ' +finalValue);//final value: 17
       })

//challenge 3: only async
Promise.resolve(2)
       .then(num => {
           console.log('Initial Number without delay: '+ num);//Initial Number without delay: 2
           return new Promise(resolve =>{
               setTimeout(()=>{
                   resolve(num*5);
               },1000)
           })
       })       
       .then(secondNumber =>{
           console.log('SecondNumber after 1 sec delay: '+secondNumber);//secondNumber after 1 sec delay: 10
           return new Promise(resolve =>{
            setTimeout(()=>{
                resolve(secondNumber*secondNumber);
            },2000)
        })
       })
       .then(thridNumber=>{
            console.log('thridNumber after 2 seconds delay: '+thridNumber);//thridNumber after 2 seconds delay: 100
            return new Promise(resolve =>{
                 setTimeout(()=>{
                    resolve(thridNumber-7);
                  },1000)
            })
       })
       .then(finalNumber => console.log('finalNumber after 1 second delay: '+finalNumber));//fialNumber after 1 second1 delay: 93


//Topic 6: Error handling in chains
Promise.resolve(10)
  .then(num => {
    console.log(num);//10
    return num * 2;
  })
  .then(result => {
    throw new Error('Something went wrong!');//this will throw error
  })
  .then(next => {
    console.log('This will be skipped');//this will not be printed. rule is error inside then will not allow next then until it reaches catch
  })
  .catch(err => {
    console.log('Caught error:', err.message);//catch will receive error
  })
  .then(() => {
    console.log('Chain continues after catch');//this will be printed as normal flow
  });

  //Returning values from .then()
  Promise.resolve(3)
         .then(num=>{
            console.log('firstNum: '+num);//firstNum: 3
            return num*4;
         })
         .then(secondNum =>{
            console.log('secondNum: '+secondNum);//secondNum: 12
            return new Promise(resolve =>{
                setTimeout(()=>{
                    resolve(secondNum + 5);
                })
            },1000)
         })
         .then(thirdNum => {
            console.log('thirdNum: '+thirdNum);//thirdNum: 17 - this will print after 1 sec
            return thirdNum -2;
         })
         .then(finalNum => console.log('finalNum: '+finalNum));//finalNum: 15

//Promise.all()
//Task 1
const p1 = Promise.resolve('A');
const p2 = Promise.resolve('B');
const p3 = Promise.resolve('C');

Promise.all([p1,p2,p3])
       .then(result => console.log(result))
       .catch(error => console.log(error));  //[ 'A', 'B', 'C' ]
//Task 2 task with delay 
const p4 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('First');
    },1000)
});      
const p5 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('Second');
    },2000)
}); 
const p6 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('Third');
    },3000)
});  

Promise.all([p4,p5,p6])
       .then(result => console.log(result))//[ 'First', 'Second', 'Third' ]
       .catch(error => console.log(error));  

//Promise.all with rejection

const p7 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('One');
    },1000)
});      
const p8 = new Promise((resolve,reject)=>{//resolve need to be given for reject
    setTimeout(()=>{
        reject('Failed');
    },2000)
}); 
const p9 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('Three');
    },3000)
});  

Promise.all([p7,p8,p9])
       .then(result => console.log(result)) 
       .catch(error => console.log(error)); //Failed

//Promise.race()
const p10 = new Promise(resolve => setTimeout(()=>resolve('1-Pass'),1000));
const p11 = new Promise(resolve => setTimeout(()=>resolve('2-Fail'),3000));    
const p12 = new Promise((resolve, reject) => setTimeout(()=>reject('3-Pass'),2000));

Promise.race([p10,p11,p12])
       .then(result => console.log(result)) //1-Pass
       .catch(error => console.log(error)); 


//Promise.allsettled()
const p1 = new Promise(resolve => setTimeout(() => resolve('One'), 1000));
const p2 = new Promise((_, reject) => setTimeout(() => reject('Failed'), 2000));
const p3 = new Promise(resolve => setTimeout(() => resolve('Three'), 1500));

Promise.allSettled([p1, p2, p3])
       .then(results => console.log(results));
//output
[
  { status: 'fulfilled', value: 'One' },
  { status: 'rejected', reason: 'Failed' },
  { status: 'fulfilled', value: 'Three' }
]

//Promise.any()
const p13 = new Promise(resolve => setTimeout(resolve,1000,'p13-Pass'));
const p14 = new Promise((resolve,reject) => setTimeout(reject,2000,'p14-Fail'));
const p15 = new Promise(resolve => setTimeout(resolve,3000,'p15-Pass'));

Promise.any([p13,p14,p15])
       .then(result => console.log(result)) //p13-Pass
       .catch(error => console.log(error));

//Task 2
const p16 = new Promise((resolve,reject) => setTimeout(reject,1000,'p16-Fail'));
const p17 = new Promise((resolve) => setTimeout(resolve,3000,'p17-Pass'));
const p18 = new Promise(resolve => setTimeout(resolve,2000,'p18-Pass'));
       
Promise.any([p16,p17,p18])
              .then(result => console.log(result)) //p18-Pass
              .catch(error => console.log(error));
              
//Task 3
const p19 = new Promise((resolve,reject) => setTimeout(reject,1000,'p19-Fail'));
const p20 = new Promise((resolve,reject) => setTimeout(reject,2000,'p20-Fail'));
const p21 = new Promise((resolve,reject) => setTimeout(reject,3000,'p21-Fail'));
       
Promise.any([p19,p20,p21])
              .then(result => console.log(result)) 
              .catch(error => {
                  console.log(error)
                  console.log(error.errors); // This will log the array of rejections: ['p19-Fail', 'p20-Fail', 'p21-Fail']
              });                    

              
//Promisifying callback - updating old call back func to return promises
function multiplyAsync(a,b){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if (typeof a !== 'number' || typeof b !== 'number') {
                reject("Invalid input");
              } else {
                resolve(a * b);
              }
        },1000)
    })
}

multiplyAsync(7,8)
    .then(result => console.log(result))//56
    .catch(error => console.log(error));

multiplyAsync('Hi',true)
    .then(result => console.log(result))
    .catch(error => console.log(error));   //Invalid input 

//fetchAPI
fetch("https://jsonplaceholder.typicode.com/users/2")
    .then(response =>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error('error' +response.status);
        }
    })
    .then(data => console.log(data))//received response in output
    .catch(error => console.log(error));

//cypress then + native Promises
cy.get('#inputEmail').type('abc@abc.com').then(($input) =>{
    expect($input).to.have.value('abc@abc.com');
    cy.log('Email entered successfully');
})

//Task 1 — Button Click + Assert Text
cy.get('#submitBtn').should('be.visible').click().then(($button)=>{
    expect($button).to.have.text('Submitted');//use expect for text
    cy.log('Button submitted successfully"');
})

//Task 2 -Chaining API + UI
cy.request('GET','https://jsonplaceholder.typicode.com/users/1').then((response)=>{
   let data = response.body;
   cy.get('#nameInput').type(data.name).should('have.value',data.name);
   cy.log('Name entered successfully');
});

//Task 3 -Combining 2 elements
cy.get('input#firstName').type('John').then(($firstName)=>{
    const firstNameVal = $firstName.val();//get value
    cy.get('input#lastName').type('Doe').then(($lastName)=>{
        const lastNameVal = $lastName.val();//get value
        fullName =firstNameVal + " "+ lastNameVal;
        cy.get('#fullName').should('have.value', fullName);
        cy.log('Full name entered correctly"');
    });
 
 //Task 4 — Checkbox Handling
    cy.get('#acceptTerms').should('be.visible').check().then(($checkbox)=>{
        expect($checkbox).to.be.checked;//jquery use expect
        cy.log('Checkbox selected successfully');
    })

//Task 5 — Capture Attribute
cy.get('a#privacyLink').then(($link)=>{
    const href = $link.attr('href');
    expect(href).to.contain('privacy');
    cy.log('Link href validated successfully');
})    

*/
//Promises vs async await
//Fetch user 2 → log their email using async/await
async function fetchUser(){
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users/2');
        const data = await res.json();
        console.log(data.email); 
    }catch(error){
        console.log(error);
    }    
}

fetchUser(); //Shanna@melissa.tv
