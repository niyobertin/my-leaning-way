/*let listOfNumber=[2,23,4,6,10];
console.log( listOfNumber[1])
;console.log( listOfNumber[2]);
console.log( listOfNumber[3]);

let market = (shoops)=>{
    for(i = 0;i<shoops.length;i++){
        console.log(shoops[i]);
    }

}
market(["food","cloths","shooes"]);
let sequence =[1,2,3,4];
console.log("Displaying the number and use push and pop function");
sequence.push(5);
sequence.push(6);
console.log(sequence);
console.log(sequence.pop());
console.log(sequence);
console.log("displaying an object");

let day1=    {
        squirrel:false,
        events:['work','touched tree','pizza','running'],
        
    };
    day1.events.push("playing");
    Object.assign(day1,{task:['cutting trees','washing cloths','coocking food']});
    console.log(day1);
console.log(day1.squirrel);
console.log(day1.wolf);
console.log(day1.events);
console.log('displaying the element of arry event with the help of loop');
console.log(day1.events[1]);
for(i=0;i<day1.events.length;i++){
    console.log(day1.events[i]);
}

*/
// Create a function which takes two strings, and returns one string 
// ex: it takes "yves", and "Iraguha", it returns "Iraguha Yves"
console.log("A function which takes two string and retrn one sting");


function myName(fname,lname){
    return fname + lname;
}
console.log(myName("Iraguha","yves"));

// Create a function which removes the last letter of a string 
// ex: if you give it "Ello", it returns "Ell"
console.log("A function which remove the last letter to a string");

let myString = (remove)=>{
 let newString = remove.slice(0,remove.length - 1);
 return newString;
}
console.log(myString("Ello"));

// Create a function which inverts a string 
// ex: if you give it "hello", it returns "olleh"
console.log("A function which inverts a string")
let reverse = (word)=>{
    return word.split("").reverse().join("");
}
console.log(reverse("hello"));




// Create a function which returns the number of vowels, and consnants which are in a string? 
// ex: it takes "notebook", it returns {vowels:4, consonants:4}
console.log("A function which returns the number of vowels, and consnants which are in a string");

const consonants = ['b','c','d','f','g','h','j','k','l','m','n','r','p','q','s','t','v','w','x','y','z'];
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function countLetters(sentence) {
  let counts = 0;
  let count = 0;
  for(let i = 0; i < vowels.length; i++) {
    if(vowels.includes(sentence[i])) {
      counts++;
    }
  }
  for(let i = 0; i < consonants.length; i++) {
    if(consonants.includes(sentence[i])) {
      count++;
    }
  }
  return console.log("The number of consonants:",count),
  console.log("The number of vowels: ",counts);
  
}

countLetters("notebook");


// Create a function which accepts two numbers, and returns their sum
// ex: if you give it 5, and 7, it will return 12 
console.log('a function which return sum of two numbers');
let sum = (num1,num2) =>{
    return num1+ num2;
}

console.log(sum(5,7));


// create a function which compares two numbers and returns the big number
// ex: if you give it 7, and 23, it returns 23.
console.log("function which take two number and return the big number ") 
let bigNumber = (numberA,numberB) =>{
    if(numberA > numberB){
        return numberA;
    }else{
        return numberB;
    }
}
console.log(bigNumber(7,23));

// create a function which calculates the sum of 18 numbers from 1 up to 18. 
console.log("a function which calculates the sum of 18 numbers from 1 up to 18.")
let add = (num)=>{
    let solution = 0;
    for(num = 0; num <=18;num++){
       solution +=num; 
    }
    return solution;
}
console.log(add());


// Create a function which takes an array of strings and return the largest string in that array 
// ex: ['hello world','karamoja','biraro','birere'] => 'hello world'
console.log("a function which takes an array of strings and return the largest string in that array");
let myArray = (myWords) =>{
  
    let maxStri = myWords[0].length;
    let ans = myWords[0];
  for(i= 0; i < myWords.length; i++){
      let maxim = myWords[i].length;
      if(maxim > maxStri){
          ans = myWords[i];
          maxStri = maxim;
      }
     
  } 
  return ans;
  
}
console.log(myArray(['hello world','karamoja','biraro','birere']));



