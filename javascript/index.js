let listOfNumber=[2,23,4,6,10];
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



