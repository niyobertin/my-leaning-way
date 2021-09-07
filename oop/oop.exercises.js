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
objectProperty();
// 14. Write a JavaScript function to retrieve all the values of an object's properties.
function getObjectValues(input){
    let valu = Object.values(input);
    return valu;
}
objectValues();
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

//18. Write a JavaScript function to check whether a given value is a DOM element



