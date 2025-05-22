const { promises } = require("dns");
const { default: fetch } = require("node-fetch");
const { AbortController } = require('node-fetch');

/*
//Challenge 1: Simple async return
async function sayHi(){
    return 'Hi there';
}

sayHi()
   .then(result => console.log(result));

//Challenge 2: Error Handling in Async Function
async function throwProblem(){
    throw new Error("Something went wrong!");
}   
throwProblem()
    .catch(error => console.log("Error:", error.message));


//Challenge 3: Return a value after a delay using setTimeout inside an async function
async function delayedMessage(){
   return new Promise((resolve) =>{
        setTimeout(()=>{
       resolve('This is delayed');
   },2000)
});   
}    
delayedMessage().then(result => console.log(result));//This is delayed

//Challenge 4: Mixing async function + multiple setTimeout calls

async function multiStepTask(){
    try{
        const ms1 = await new  Promise(resolve => setTimeout(resolve,1000,"Step 1 done"));
        const ms2 = await new  Promise(resolve => setTimeout(resolve,2000,"Step 2 done"));
        console.log(ms1);////Step 1 done
        console.log(ms2);//Step 2 done
    }catch(error){
        console.log(error);
    }
}
multiStepTask();

//Await Challenge -1
function waitAndReturn(value, delay =1000) {
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(value);
        },delay)
    })
}

async function useAwait(){
    const result = await waitAndReturn("Learning await");
    console.log(result);
}
useAwait();//Learning await displayed after 1 sec

//Await Challenge 2: Sequential Await Steps
async function runSteps() {
     const step1 = await waitAndReturn("Step 1 completed");
     console.log(step1);
     const step2 = await waitAndReturn("Step 2 completed");
     console.log(step2);
     const step3 = await waitAndReturn("Step 3 completed");
     console.log(step3);
}
runSteps();


//Await Challenge 3: Sequential vs Parallel Execution

function waitAndReturn(value, delay =1000) {
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(value);
        },delay)
    })
}
async function sequentialFetch(){
    const userData = await waitAndReturn("Fetching user data", 2000);//The first await pauses execution of the next line of code until the first promise is resolved, then the second one starts
    const userOrders = await waitAndReturn("Fetching orders",2000);
    console.log(userData);
    console.log(userOrders);
}

async function parallelFetch(){//this is called parallel execution
    const userPromise = waitAndReturn("userPromise", 2000);//start immediately 
    const orderPromise = waitAndReturn("orderPromise", 2000);//start immediately 
    const user = await userPromise; //await ensures you’re getting the result when both have finished.
    const order = await orderPromise;
    console.log(user);
    console.log(order);
}
sequentialFetch();
parallelFetch();
//output
//userPromise
//orderPromise
//Fetching user data
//Fetching orders



//Fetch API - Challenge: Basic Fetch Call
async function fetchPosts(){
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if(!response.ok){
        throw new Error(`HTTP ERROR-Status:  ${response.status}- ${error.message}`);
    }

    const res = await response.json();//fetch does not auto parse thats the reason for using json
    console.log(res);
}catch(error){
    console.log(error)
}
}

fetchPosts();//results fetched


//fetch POST API
async function createNewPost() {
try{
    const postData = { //creating object
        title: "My New Post",
        body: "This is the content of my new post.",
        userId: 1
    }

const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
});

if(!response.ok){
    throw new Error (`HTTP Error -Status: ${response.status}`);
}

const res = await response.json();
console.log(res);

}catch(error){
    console.log('Error: ' + error.message);
}
}
createNewPost();
//output
//{
   // title: 'My New Post',
   // body: 'This is the content of my new post.',
   // userId: 1,
   // id: 101
  //}


//Challenge: Fetch Multiple Posts with Promise.all  
async function fetchMultiplePosts() {
    try{
    const post1 = fetch('https://jsonplaceholder.typicode.com/posts/1');
    const post2 = fetch('https://jsonplaceholder.typicode.com/posts/2');
    const post3 = fetch('https://jsonplaceholder.typicode.com/posts/3');

    const response = await Promise.all([post1,post2,post3]);
    const res = await Promise.all(response.map(result => result.json()));

    console.log(res);
    }catch(error){
        console.log('Error: '+ error.message);
    }
}

fetchMultiplePosts();

//Scenario: Let's simulate an example where we fetch a list of users and their posts.
async function fetchDataAndPost(){
    try{
    const post1 = fetch('https://jsonplaceholder.typicode.com/users');
    const post2 = fetch('https://jsonplaceholder.typicode.com/posts');

    const response = await Promise.all([post1,post2]);
    const res = await Promise.all(response.map(result =>{
        if(!result.ok){
            throw new Error(`HTTP Error code: ${result.status}`);
        }
         return result.json();
        
    }));
    console.log(res); // Log the data of users and posts

}catch(error){
    console.log('Error: ' +error.message);
}
}

fetchDataAndPost();

//interview questions
//1. What is the purpose of the async keyword in JavaScript?
//async keyword - declaring asynchronous function and it uses await and always returns a Promise. 
//returning async function is same as resolving promise.

//2.What does await do? Can it be used outside an async function?
//await will pause the execution untill promise resolved. await will make a look like
//codes are executing in seqential order. await cant be used outside of an async function. 

//3. What is returned by an async function?
//async alwayds return Promises

//4. How does await work with non-Promise values?
//below program looks like not a promise but it returns a prmoise
async function greet(){
    return 'Hi';
}
console.log(greet());//Promise { 'Hi' }

//5. How would you handle errors in an async function?
//we should use try catch block inside async function. errors will be handed in catch block.
async function fetchUser(){
    try{
        const response = await fetch('api url');
        if(!response.ok){
            throw new Error (`HTTP Error Status: ${data.status}`);
        }

        const data = await response.json();
        console.log(data);
    }catch(error){
        console.log('Caught Error: ' + error);//error handles here//TypeError: Only absolute URLs are supported
    }
}
fetchUser();

//6. What is the difference between Promise.then() chaining and using await? Which is better and why?urn
//Promise.then() -> resolving the promise and return value to next then.each then will have return value
//await -> we dont need to use then in await. await automatically resovles Promises. 
//asyn await is easy  for readability and maintainability.its advanced version of Promises.

//7. Can you explain the difference between sequential and parallel execution using await? Provide a code example.
//Sequential execution - await will wait for each asynchrounous task to be completed.next one will start after completing first task and runs in sequential. Execution time will be longer and it useful when task are interdepdentent.
//Parallel execution - all task will start immediately in parallel so execution time will be less. it is useful when task are not dependant. 
 function wait(value, delay=1000){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(value);
        },delay)
    })
}
//sequential execution
async function execA(){//overall it takes 4 seconds 
        const p1 = await wait('Step One', 2000);//2 minutes delay
        const p2 = await wait('Step Two', 2000); //again 2 minutes delay. it will start after Step One
        console.log(p1);
        console.log(p2);
}
//Parallel execution
async function execB(){//overall it takes 2 seconds 
    const p1 =  wait('Step Three', 2000);//both p3 and p4 task will start immediately
    const p2 =  wait('Step Four', 2000); 
    const p3 =  await p1;
    const p4 =  await p2;
    console.log(p3);
    console.log(p4);
}

execA();// Step One Step Two - this one prints in this order of ExecB results. 
execB(); // result of execB prints first. Step Three Step Four

//8. What does Promise.all() do when used with await? How is it different from sequential await calls?
//Promise.all () -it can be used when more than one promised need to be resolved and those can be done in parallel. 
//it is used to wrap all the responses/result of all promises. It wont wait for each promise(like sequential) but it awaits
// to wrap all results together in an array when we use await along with promise.all
async function allPromises(){
    try{
        const call1 = fetch('url1');
        const call2 = fetch('url2');
        const response = await Promise.all([call1,call2]);
        const result = await Promise.all(response.map(res=> res.json()));//parsing json
        console.log(result);
    }catch(error){
        console.log(error);
    }
}
allPromises();

//9. What happens if one of the Promises in Promise.all() fails? How would you handle that?
//Promise.all() gives result only if all promises are resolved otherwise error will be printed as soon if one of the promise got rejected.it will nadled in catch block

//10. How does JavaScript handle multiple await calls inside a loop (e.g., for, forEach)? 
//What's the right pattern to await multiple calls in a loop?
let postIds = [1, 2, 4];
async function fetchTitle(postId){
    try{
        for(let id of postId){
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            if(!response.ok){
                throw new Error(`HTTP Error Status: ${response.status}`);
            }
            const result = await response.json();
            console.log(`${id} : ${result.title}`);
        }
}catch(error){
    console.log('Caught Error:' +error);
}
}
fetchTitle(postIds);
//1 : sunt aut facere repellat provident occaecati excepturi optio reprehenderit
//2 : qui est esse
//4 : eum et est occaecati

 postIds = [3, 7, 10];
async function fetchPost(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const result = await response.json();
    return result;
}
async function fetchTitlesSequentially(postIds) {
    for (const id of postIds) {
        const post = await fetchPost(id);
        console.log(`${id} : ${post.title}`);
    }
}
fetchTitlesSequentially(postIds);
//output:
//3 : ea molestias quasi exercitationem repellat qui ipsa sit aut
//7 : magnam facilis autem
//10 : optio molestias id quia eum

async function fail() {
    await Promise.reject(new Error("Boom!")); // ❌ no try/catch
  }
  
  fail();//UnhandledPromiseRejectionWarning: Error: Boom!
 */ 

let controller = null;
async function fetchProduct(searchTerm){
    try{
    // Abort previous request if still running

    if (controller) {
            controller.abort();
    }
    
    // New controller for this request
    controller = new AbortController();
    const signal = controller.signal;
    
    const response = await fetch(`https://fakestoreapi.com/products/search?q=${searchTerm}`,{signal});
    if(!response.ok){
        throw new Error(`HTTP Error Status: ${response.status}`);
    }
    const result = await response.json();
    console.log(`Search for "${searchTerm}" returned ${result.length} items`);
    result.forEach((item) => {
      console.log(`→ ${item.title}`);
    });


    }catch(error){
        if(error.name === 'AbortError'){
            console.log('fetch request cancelled');
        }else{
        console.log('Caught Error: ' + error);
        }
    }

}

fetchProduct('shirt');//Caught Error: ReferenceError: AbortController is not defined
setTimeout(() => fetchProduct('shoes'), 300); // Cancels previous
setTimeout(() => fetchProduct('bag'), 600);   // Cancels previous
