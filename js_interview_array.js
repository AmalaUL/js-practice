//Core Basics

//1. How do you create an array in JavaScript? Give 2 methods.
    //method 1 - array literal
let arrayOne = [1,2,3,4];
    //method 2 - array constructor
let arrayTwo = new Array(5,6,7,8,9,10);

//2. How do you access the first and last element of an array?
    // accessing first element 
 console.log(arrayOne[0]); //Output: 1
    // accessing last element
 console.log(arrayOne[arrayOne.length-1]); //Output: 4

//3. What’s the difference between push() and unshift()?
arrayOne.push(5)//adding element at last
console.log(arrayOne);// output [1,2,3,4,5]
arrayOne.unshift(0);//adding element at first
console.log(arrayOne);// output [0,1,2,3,4,5]

//4. What’s the difference between pop() and shift()?
arrayOne.pop()//remove last element
console.log(arrayOne);// output [0,1,2,3,4]
arrayOne.shift();//remove first element
console.log(arrayOne);// output [1,2,3,4]

//5. What does slice(start, end) do?
let slicedArray = arrayOne.slice(1,3)// 1 is start index; 3 is end index but that does not include, it takes previous index. new array will be created starting index 1 and 2
console.log(slicedArray); //output [2,3]

//6. What does splice(start, deleteCount, ...items) do?
arrayTwo.splice(2,3,77,88)//start index: 2; deleted count items: 3; replace with 2 items: 77 & 88
console.log(arrayTwo); //output [ 5, 6, 77, 88, 10 ]

//7. How do you check the length of an array?
//length should be used
console.log(arrayTwo.length); //output 5

//8. How do you loop through an array and print each element?
//we have few methods to iterate.
//method 1 - forEach
arrayTwo.forEach((item)=>{
    console.log(item); 
})

//method 2 -  for of
for(i of arrayTwo){
    console.log(i); //loop through items
}

//method 3 -for loop with length
for(i=0; i<arrayTwo.length;i++){
    console.log(arrayTwo[i]);
}

//9. How do you check if an array contains a value?
console.log(Array.isArray(arrayTwo)); //this is to check if it is array
let arrayThree =[];
console.log(Array.isArray(arrayThree)); //true
//to check if array contains value
console.log(arrayThree.length>0?true: false);//false
console.log(arrayTwo.length>0?true: false);//true

//10. What’s the difference between an array and an object in JS?

/*array contains list of elements. ex:
let fruits = ['grapes','apple','orange'] ;

Object contains key value pair. it can have arrays,functions, nested objects etc.
let user ={
    name: 'Tom',
    age: 34,
    skill: 'JS'
} */

//Intermediate Level
//1. How do you flatten a nested array?
let nestedArray = [1,2,[3,4]]; //single nested array
let flatArray= nestedArray.flat();
console.log(flatArray); //output [1,2,3,4]

let multipleNestedArray = [1,2,[3,4,[55,6,77],8,9,[10,11],12]];
let flattenArray = multipleNestedArray.flat(3);
console.log(flattenArray); //output [1,  2, 3, 4, 55, 6, 77, 8, 9, 10, 11, 12]

//2. What is the difference between map() and forEach()?
//map gives new array based on operation we perform for each element in the array. ex:
let mappedArray = arrayOne.map((ele)=>ele*ele);
console.log(arrayOne); //output [ 1, 2, 3, 4 ] -- original array not changed
console.log(mappedArray);//output [ 1, 4, 9, 16 ]

//forEach - it iterates over each element of an existing array.
arrayOne.forEach((ele)=>{
    console.log(ele*ele);
});

//3. How can you remove duplicates from an array?
let duplicateArray = [1,2,4,5,6,4,5,6,7,8,7,2,1];
let uniqueArray = [...new Set(duplicateArray)]; //set will have unique values. using spread operator converts it back to array format.
console.log(uniqueArray);

//4. How do you find the maximum value in an array?
let newArray =[2,4,9,10,35,45,3,66,7,88,0,1];
//method 1 
let maxValue = newArray[0];//assigning first value
for(let i=0;i<newArray.length;i++){
  if(newArray[i]>maxValue){
      maxValue = newArray[i]
  }else if(newArray[i] < maxValue){
      maxValue = maxValue;
  }
}
console.log(maxValue);//output 88

 //method 2 using reduce
 let maxNumber = (array)=>{
    return array.reduce((max, num)=>{
        if(num > max){
            return num;
        }else {
            return max;
        }
    },array[0]) 
 }  
 console.log(maxNumber(newArray)) ;//output 88

//5. How do you sort an array of numbers in ascending order?
//sort() method does not work for NewArray. it will list all numbers started with 1 and then 2 so on. 
function sortArray(array){
if (array.length < 2) return array;

let pivotNumber = array[array.length-1]; //taking last element as pivot

let leftArray =[]; //declaring empty array
let rightArray =[];

for(let i=0;i<array.length-1;i++){ //keeping pivotnumber outside loop 
    if(array[i] < pivotNumber){
        leftArray.push(array[i]) //0
    }else{
        rightArray.push(array[i]) //rest all
    }
    
}
let sortedArray =  sortArray(leftArray).concat(pivotNumber,sortArray(rightArray));
return sortedArray;
}

console.log(sortArray(newArray));


//6. What does the reduce() method do?
/*reduce menthod helps to return single number based on operation.
 it will have accumulator and item to go through each element in the array.
 refer the above max number calculation example*/

 //7. How do you check if all elements meet a condition?
 let allConditionArray = newArray.every((ele)=> ele > 18)//returns true if all elements are met a condition
 console.log(allConditionArray);

 //8. How do you check if at least one element meets a condition?
 let oneConditionArray = newArray.some((ele)=> ele > 18)//returns true if one element met a condition
 console.log(oneConditionArray);

 //9. How do you find the index of the first occurrence of a value?
let arr =[1,2,3,4,2,5,6,2];
console.log(arr.indexOf(2))//output 1

//10. How do you merge (combine) two arrays?
//using spread operator
let arr1 =[1,2,3,4];
let arr2 =[5,6,7,8];
let arr3 =[...arr1,...arr2];
console.log(arr3);// [1,2,3,4,5,6,7,8]
//using concat
let arr4 = arr1.concat(arr2);
console.log(arr4);// [1,2,3,4,5,6,7,8]
