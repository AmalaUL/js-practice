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

//2. Can you explain the difference between Array.isArray() and typeof operator in determining an array?
    /* Array.isArray() check if the given input is array or not. it returns true for Array or else false. 
       typeof operator checks the type of datatypes like Number, String, boolean, object etc. 
       for array it comes under Object in JS so best to use Array.isArray()*/

       console.log(typeof array);//object

//3. What is the difference between map() and forEach() in JavaScript?
    /* forEach() - to iterate an array and changes the existing array
       map() -  it returns new array by taking each element in the array based on the code/operation. */


//4. What is the time complexity of the push(), pop(), shift(), and unshift() methods of an array?
/*push() / pop() → O(1) — fast at the end
shift() / unshift() → O(n) — slower at the start (because of shifting) */


//Practical / Coding:
//5. Write a function that removes duplicate values from an array.

    function removeDuplicates(arr){
        const newArr = [...new Set(arr)];//set will hold only unique values and converting it back to array
        return newArr;
    }
    console.log(removeDuplicates([1,2,3,4,2,3,5,6,7,7]));//[1, 2, 3, 4,5, 6, 7]

        
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
//let deepCopyOfarr1 = JSON.parse(JSON.stringify(arr1)); //this also working and spread operator also works 
deepCopyOfarr1 =[...arr1]
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

