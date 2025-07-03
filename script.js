'use strict';
/*
let tasks = ['Wash Plate', 'Sweep', 'Read']
tasks[1] = 'Mop Floor';
console.log(tasks);
*/

// Problem Statement

// Task 1

/*
    let chores = [
  "Wash clothes",
  "Clean the kitchen",
  "Clean the bathroom",
  "Buy soap",
  "Arrange books"
];

let cleanCount = 0;

for (let i = 0; i < chores.length; i++) {
 
  console.log(`${i + 1}. ${chores[i]}`);

  if (chores[i].includes("Clean")) {
    cleanCount++;
  }
}
console.log(`Number of chores that include the word "clean": ${cleanCount}`);
*/

// Task 2

/*
let tasks = [
  "Team meeting at 9am",
  "Exercise for 30 minutes",
  "Reply to emails",
  "Lunch with mentor",
  "Client meeting at 2pm",
  "Evening Exercise"
];


let meeting = 0;
let exercise = 0;

for ( let i = 0; i < tasks.length; i++){
  if(tasks[i].includes("meeting")){
    console.log(`You have a meeting: ${tasks[i]}`)
  } else if (tasks[i].includes("Exercise")){
    console.log(`Stay fit!: ${tasks[i]}`)
  } else {
    console.log(`-${tasks[i]}`)
  }

  if(tasks[i].includes("meeting")){
    meeting++;
  } else if(tasks[i].includes("Exercise")){
    exercise++
  }
}


console.log(
  `Total Task: ${tasks.length}
Meeting: ${meeting}
Exercise tasks: ${exercise}`
)
*/

// Bonus Task

/*let formatStringSpace = 'I    Am  a    softWaRe   DeVEloPer   '
let cleaned = formatStringSpace.trim().replace(/\s+/g, " ");
console.log(cleaned);

let formatStringLower = "I    Am  a    softWaRe   DeVEloPer";
let lower = formatStringLower.toLowerCase();
console.log(lower);

let formatStringCapitalize = "I    Am  a    softWaRe   DeVEloPer";
let capitalized = formatStringCapitalize.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
console.log(capitalized); 
*/

/*
// Task 3
const formatString = function(str){
              //USE THIS// or...
  //  let formatStringSpace = str.trim();
  //  let formatStringLower = formatStringSpace.toLowerCase();
  //  let formatStringCapitalize = formatStringLower.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
 
             //OR THIS ↓↓↓↓↓↓
   const format = str.trim().replace(/\s+/g, " ").toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")

   return format
}

console.log(formatString(" I    Am  a    softWaRe   DeVEloPer "))

*/










