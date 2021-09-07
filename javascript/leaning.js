function Person(name) {
    this.name = name;
    this.greeting = function() {
      alert('Hi! I\'m ' + this.name + '.');
    };
  };
  let person1 = new Person('Bob');
let person2 = new Person('Sarah');

//my object

function School(teachers,workers,student){
    this.teachers = teachers;
    this.workers = workers;
    this.student = function(name,age,grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
    };
    this.student("bertin",20,4);
};
let school2 = new School("20",23,);
//CLASS IN JS
let animal= class{
constructor(name, age){
    this.name=name;
    this.age;
}

}
let myAnimal = new animal('gaju',12);
console.log('My cow is named',myAnimal);

//4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. Go to the editor

/*var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];*/

   let library = function(author,title,readingStatus){
     this.author = author;
     this.title = title;
     this.readingStatus = readingStatus;
   };
   
   let readingStart1 = new library('Bill Gates','The Road Ahead',true);
   let readingStart2 = new library('Suzane Collins','Mockingjay: The final bok of Hunger games',false);
   let readingStart3 = new library('Steven Jobs','Walter Isaacson',true);
  
   let book1 = "The book you can read is " + readingStart1.title + "  by " + readingStart1.author ;
   let book2 = "The book you can read is " + readingStart2.title + " by " + readingStart2.author ;
   let book3 = "The book you can read is " + readingStart3.title + " by " + readingStart3.author;

   console.log(book1);
   console.log(book2);
   console.log(book3);

   /*5. Write a JavaScript program to get the volume of a Cylinder with four decimal
    places using object classes.
Volume of a cylinder : V = πr2h
where r is the radius and h is the height of the cylinder*/


  let Cylinder = function(height,diameter){
    let radius = diameter/2;
    let volume = Math.PI*height*radius*radius;
    return volume;
    
  };
  Cylinder(7,4);
  console.log(Cylinder(7,4));