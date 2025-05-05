
//..............................practice 1...............................
let array = [5,6,7,8,9];
//access first element through index
console.log(array[0]);//5
//access last element through index
console.log(array[array.length-1]);
//add an element to the last
array.push(100);
console.log(array);
//add an element to the first
array.unshift(2);
console.log(array);
//remove an element from last 
array.pop();
console.log(array);
//remove an element from first 
array.shift();
console.log(array);
//remove element based on index
array.splice(1,3,88,99)//1 -start index; 3- delete 3 elements; replace with 2 elements 88 and 99
console.log(array);
//portion of an array based on index and end index doesn't include
const sliceArray = array.slice(1,3)//start index 1 and end index 3 which means elements from index 1(88) and 2(99) will be a subset.
console.log(sliceArray);

//..............................practice 2...............................
//Exercise 1: Print first + last element
let arrayOne = [45,66,77,88,99,100];
//method 1
console.log(arrayOne[0]);//print first element through index
console.log(arrayOne[arrayOne.length-1])//print last element through index directly
//method 2 (iterate through for of loop)
for(const[index,value] of arrayOne.entries()){
    if(index ===0 || index === arrayOne.length-1){
        console.log(value);
    }
}

//Exercise 2: Add element at index 2
let arrayTwo = [4,2,5,6,7,8,9];
arrayTwo.splice(2,0,33)//start index 2; delet count: 0; adding new element 33 at index 2;
console.log(arrayTwo);

//Exercise 3: Remove value = 20
let arrayThree = [3,4,5,20,33,45,66,78,89];
for(let i=0; i <arrayThree.length; i++){
    index = arrayThree.indexOf(20);
    if(arrayThree[i] ===20){
        arrayThree.splice(index,1)
    }
}
console.log(arrayThree);

//Exercise 4: Reverse array
//method 1
let arrayFour = [56,67,78,89,99,110];
let reverserArray =[];
for(let i=arrayFour.length-1; i >=0; i--){
    reverserArray.push(arrayFour[i])
}
console.log(reverserArray);
//method 2:
console.log(arrayFour.reverse());

//Sum of array elements
//method 1
let arrayFive =[4,5,3,6,7,90,43]
let total = 0;
for(i=0;i<arrayFive.length;i++){
    total +=arrayFive[i]
}
console.log(total);

//method 2
let sum= arrayFive.reduce((total,num)=> total+num,0);
console.log(sum);

