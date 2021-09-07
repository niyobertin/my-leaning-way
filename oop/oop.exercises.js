//13. Write a JavaScript function to retrieve all the names of object's own and inherited properties.

class Peaple{
    constructor(fname,lname,age){
        this.fname = fname;
        this.lname = lname;
        this.age= age;
        this.summary = function(){
            return 'this is my summary';
        }
    }
}

class Student extends Peaple{
    constructor(fname,lname,age,grade){
        super(fname,lname,age);
        this.grade =grade;
    }
}

const student1 = new Student('kagabo','Eric',12,2);
function objectProperty(){
    let prop = Object.keys(student1);
    return prop;
    
}
objectProperty();
// 14. Write a JavaScript function to retrieve all the values of an object's properties.
function objectValues(){
    let valu = Object.values(student1);
    return valu;
}
objectValues();
// 15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.

function keyPair(){
    let enter = Object.entries(student1);
    return enter;
}
keyPair();

//16. Write a JavaScript function to get a copy of the object where the keys have become 
//the values and the values the keys.





//17. Write a JavaScript function to check whether an object contains given property. 
//const student1 = new Student('kagabo','Eric',12,2);


function hasKey(st,key){
    return st !==null && hasOwnProperty.call(st,key);

}
console.log(hasKey(student1,'red'));

//18. Write a JavaScript function to check whether a given value is a DOM element



