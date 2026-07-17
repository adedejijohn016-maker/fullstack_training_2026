// const score = 72;

// if (score >= 90) {
//   console.log("A - Excellent");
// } else if (score >= 80) {
//   console.log("B - Good");
// } else if (score >= 70) {
//   console.log("C - Satisfactory");
// } else if (score >= 60) {
//   console.log("D - Needs Improvement");
// } else {
//   console.log("F - Please see your teacher");
// }


// functions
// name functions and arrow functions

// console.log("Hello, Aishat!");


// function greet (name) {
//   console.log(`Hello ${name}! welcome back to your portal`);
// }

// greet('adedeji');
 

// function addFivePlusFive (num){
//   console.log(5 + parseInt(`${num}`) + 5);
// } 

// addFivePlusFive(20);

// const addFivePlusFive = (v) => {
//   return 5 + parseInt(`${v}`) + 5;
// }




// function CalculateAge(birthYear) {
//   const currentYear = new Date().getFullYear();
//   const by = Number(birthYear);
//   if (!Number.isFinite(by) || by <= 0) {
//     return null;
//   }
//   return currentYear - by;
// }

// console.log(CalculateAge(2002));






// Helper that logs the computed age when a year is provided (imputed)
// function getAgeFromInput(yearInput) {
//   const age = CalculateAge(yearInput);
//   if (age === null) {
//     console.log('Please provide a valid birth year.');
//     return null;
//   }
//   console.log(`You are ${age} years old.`);
//   return age;
// }

// getAgeFromInput(2002);


// const tasks = ["bath", "eat", "write code", "sleep"];

// tasks.push("workout");

// tasks.pop("workout");

// tasks.unshift("meditate");

// tasks.shift("meditate");


const colors = ["red", "green", "blue", "yellow", "black", "indigo",];
// for (let i = 0; i < colors.length; i++) {
//   console.log(i, colors[i]);
// }


const scores = [90, 80, 70, 60, 50, 40, 30, 20, 10];
for (const score of scores) {
  console.log(`Your score is ${score}`);
}

