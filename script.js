'use strict';
/*
let tasks = ['Wash Plate', 'Sweep', 'Read']
tasks[1] = 'Mop Floor';
console.log(tasks);
*/

// Problem Statement

//Task 1

// let chores = [
//   "Wash clothes",
//   "Clean the kitchen",
//   "Clean the bathroom",
//   "Buy soap",
//   "Arrange books"
// ];

// let cleanCount = 0;

// for (let i = 0; i < chores.length; i++) {
 
//   console.log(`${i + 1}. ${chores[i]}`);

//   if (chores[i].includes("Clean")) {
//     cleanCount++;
//   }
// }


// console.log(`Number of chores that include the word "clean": ${cleanCount}`);

//Task 2

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
    console.log(`${tasks[i]}`)
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
