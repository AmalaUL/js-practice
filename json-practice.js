
/*
//convert JS object to JSON format
const product = {
    id: 101,
    name: "Laptop",
    inStock: true,
    price: 799.99
  };
  
  //converting
  {
      "id" : 101,
      "name" : "Laptop",
      "inStock" : true,
      "price" : 799.99
  }

  //convert JS object to JSON format
  const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    startEngine: function () {
      console.log("Engine started");
    }
  };
const stringify = JSON.stringify(car);
console.log(stringify);  

//converting with space(indentation)
const book = {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    editions: 3,
    greet: function(){
        console.log(`Hello ${this.title}`);
    }
  };
  
  const b1 = JSON.stringify(book,null,4); //4 spaces added before key (indentation)
  console.log(b1);

 //converting with replacer
 const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8
  };
const m1 = JSON.stringify(movie,['title','director'],2);
console.log(m1);   

//JSON Parse
const jsonStr = '{"product":"Book","price":19.99,"inStock":true}';
const obj1 = JSON.parse(jsonStr);
console.log(obj1);//{ product: 'Book', price: 19.99, inStock: true }
console.log(obj1.product);//Book
console.log(obj1.price);//19.99

//invalid json
const badJson = "{product: 'Book', price: 19.99}";
//const obj2 = JSON.parse(badJson);
//console.log(obj2);//SyntaxError: Unexpected token p in JSON at position 1

//use reviver func
const jsonDateStr = '{"event":"Conference","date":"2025-06-15T09:00:00Z"}';
const obj3 = JSON.parse(jsonDateStr,(key, value)=>{
    if(key === 'date'){
       return  new Date(value) ;
  }
  return value;
});
console.log(obj3);//{ event: 'Conference', date: 2025-06-15T09:00:00.000Z }
console.log(obj3.date instanceof Date); //true
console.log(obj3.date.getFullYear()); // 2025
console.log(obj3.date.toLocaleDateString());//6/15/2025
console.log(obj3.date.getDate());      //15

//multiple date fields
const data = `
{
  "name": "Project X",
  "deadline": "2025-12-31T23:59:59Z",
  "createdAt": "2024-01-01T00:00:00Z",
  "status": "ongoing"
}
`;
const obj4 = JSON.parse(data, (key,value)=>{
    if(typeof value === "string" && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?Z$/.test(value)){
        return new Date(value);
    }
    return value;
})

console.log(obj4.deadline instanceof Date);//true
console.log(obj4.createdAt instanceof Date); //true 
console.log(obj4.createdAt.toLocaleString());//1/1/2024, 5:30:00 AM


//accessing nested JSON data
const data1 = `
{
    "product": "Smartphone",
    "specs": {
      "manufacturer": "XYZ Corp",
      "features": ["Bluetooth", "5G", "Waterproof"],
      "dimensions": {
        "width": 70,
        "height": 150,
        "depth": 7.5
      }
    }  
}
`;
const d1 = JSON.parse(data1);
console.log(d1.specs.manufacturer);//XYZ Corp
console.log(d1.specs.features[1]);//5G
console.log(d1.specs.dimensions.height);//150

const data2 = `
{
    "library": "City Library",
  "books": [
    { "title": "Book A", "author": "Author A", "available": true },
    { "title": "Book B", "author": "Author B", "available": false }
  ]  
}
`;
const d2 = JSON.parse(data2);
console.log(d2.books[0].title);//Book A
console.log(d2.books[1]? true: false);//true
console.log(d2.books[1].available);//false

//using optional chaining
// const employee = `{
//     id: 123,
//     personal: {
//       name: "John",
//       contacts: {
//         email: "john@example.com",
//         phone: "555-1234"
//       }
//     }
//   }`;
    //const e1 = JSON.parse(employee);
    // console.log(e1.personal?.contacts?.phone);//
    //console.log(e1.personal?.contacts?.office);//

  const data3 =  `{
    "a": {
        "b": {
          "c": 42
        }
      }  
}
`; 
const d3 = JSON.parse(data3);
  
  function safeGet(obj,path){
      let current =obj;
      for(let i=0; i<path.length; i++){
          if(current === undefined || current === null){
              return undefined;
          }
         current = current[path[i]];
      }
      return current;
  }
  
  console.log(safeGet(d3, ['a', 'b', 'c'])); // 42  
  console.log(safeGet(d3, ['a', 'x', 'c'])); // undefined
  
  //localstorage
  const todo = {
    task: "Finish JavaScript JSON module",
    done: false
  };
  
localStorage.setItem("todo", JSON.stringify(todo));
let list1 = JSON.parse(localStorage.getItem(todo));
console.log(list1);
console.log(ist1.done);


//JSON with API
const fetch =require('.node/fetch');
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())  // parse JSON response
  .then(users => {
    console.log(users);                // array of user objects
    users.forEach(user => {
      console.log(`${user.name} - ${user.email}`);
    });
  })
  .catch(error => {
    console.error('Error fetching users:', error);
  });

*/
  console.log(typeof typeof 1);
  console.log(0 || 'hello' && 42 || null);
