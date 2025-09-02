const fruits = ['apple','banana','grapes'];

// for is nothing but for each in JS

//of - show the value of fruits
for(let f of fruits){
    console.log(f);
}
//in - shows the index
//for(let f in fruits){
// to show the value we can use indx    
for(let indx in fruits){

    console.log(fruits[indx]);
}



// map() - used to transform each item in the array
const newfruit = fruits.map((f, indx) => `${indx} - ${f}`);

console.log(newfruit);

//spreade Operator - Expands the array
let num2 = [10,20,30];

const mergeArray = [...fruits,...num2]

console.log(mergeArray);

//rest Operator - collrcts multiple elements in array
function add(a,b, ...restNum){
    let result= a+b;
    for(let r in restNum){
        result = result+r;
    }
    console.log(result)
}

add(10,20,30,50,100,200);

//Destructuring - 

let books = [{bookName: 'Angular', bookId:101}, {bookName: 'React', bookId:102}]

books.push([{bookName:'.Net core', bookId:103}]);
let  [book1,book2,...restbooks] = books;
console.log(book1.bookName);
console.log(book2.bookName);
console.log(restbooks[0]);



