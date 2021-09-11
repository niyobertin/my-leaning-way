//13. Write a JavaScript function to retrieve all the names of object's own and inherited properties.

class Peaple{
    constructor(fname,lname,age){
        this.fname = fname;
        this.lname = lname;
        this.age= age;
        // this.summary = function(){
        //     return 'this is my summary';
        // }
    }
}

class Student extends Peaple{
    constructor(fname,lname,age,grade){
        super(fname,lname,age);
        this.grade =grade;
    }
}

const student1 = new Student('kagabo','Eric',12,2);
function getObjectKeys(input){
    let prop = Object.keys(input);
    return prop;
    
}
getObjectKeys(student1)
// 14. Write a JavaScript function to retrieve all the values of an object's properties.
function getObjectValues(input){
    let valu = Object.values(input);
    return valu;
}
getObjectValues(student1);
// 15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.

function keyPair(input){
    let enter = Object.entries(input);
    return enter;
}
keyPair(student1);

const person ={name:'hello world'}

keyPair(person)

//16. Write a JavaScript function to get a copy of the object where the keys have become 
//the values and the values the keys.

function flipKeysAndValues(input){
    const keys = getObjectKeys(input);
    const values = getObjectValues(input);
    const newObject = {};

    for (let i=0;i<keys.length;i++){
        newObject[values[i]] = keys[i]
    }

    return newObject;
}




//17. Write a JavaScript function to check whether an object contains given property. 
//const student1 = new Student('kagabo','Eric',12,2);


function hasKey(st,key){
    if(st[key]!==undefined){
        return true
    }return false

}
console.log(hasKey(student1,'red'));

//Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. 
//Otherwise, return "there is no 7 in the array".
//  let number =0;
// function testingThePresenceOf7(input){
    
//       input.forEach(element =>{
//           if(element ===7){
//               return "Boom"
//           }else{
//               return "there is no 7 in the array"
//           }
//       })   
        
//  } 
// testingThePresenceOf7();

//Create a function that takes a number discs as an argument and returns 
//the minimum amount of steps needed to complete the game.



//Create a function which returns the number of true values there are in an array

function countTrueValues(input){
    let trueValue = 0;
    input.forEach(element => {
        if(element ===true){
            trueValue+=1;
        }
    });
    return trueValue;   
    }
    

countTrueValues([true,true,false]);

// Create a function that takes numbers b and m as arguments and returns the derivative
// of the function f(x)=x^b with respect to x evaluated at x=m, where b and m are constants.

// Examples
// derivative(1, 4) ➞ 1

// derivative(3, -2) ➞ 12

// derivative(4, -3) ➞ -108

function testingDerivative(b,m){
    let x,derrive;
    const process = b*x^(b-1);
    x = m;
     derrive = process * m;
     return derrive;
     
}
testingDerivative();

// Create a function that takes a "base number" as an argument. This function should return another function which 
// takes a new argument, and returns the sum of the "base number" and the new argument.

function takeBaseNumber(baseNumber){
    let makePlusFunction = function(addNumber){
        return baseNumber + addNumber;
    }
    return makePlusFunction(5);
}
 takeBaseNumber();
 //Create a function that concatenates n input arrays, where n is variable

//  function concatinateArray(input){
//      let newArray=[];
//      let k= newArray.concat([1,2],[3,4],[1,3,67,8,9,0,3]);
//      newArray.push(k);
//      console.log(newArray)
     
//  }
//  concatinateArray();


// Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. 
// The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter()
//  (2*PI*r) which give both respective areas and perimeter (circumference)

class Circle{
    constructor(radius){
        this.radius = radius;
    
    this.getArea=function(){
        return Math.PI * radius*this.radius;
    }
    this.getPerimeter = function(){
        return 2*(Math.PI * radius);
    }

}
}

const myCicle = new Circle(11);
myCicle.getArea();
myCicle.getPerimeter();