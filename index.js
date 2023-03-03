
// ******************************** QUESTION 3 ************************************
let subjects;
function subjectsToTake(classGroup) {
   if (classGroup === "Science") {
      subjects = ['English', ' Mathematics', ' Physics', ' Chemistry', ' Biology', ' Technical Drawing'];
   }
   else if (classGroup === "Social Science") {
      subjects = ['English', ' Mathematics', ' Accounting', ' Commerce', ' Marketing', ' Geography'];
   }
   else if (classGroup === "Arts") {
      subjects = ['English', ' Mathematics', ' Government', ' Economics', ' Literature', ' History'];
   }
   else {
      subjects = ['English and Mathematics']
   }
   return subjects;
}
console.log('Welcome Bolatito, the subjects you will take are: ' + subjectsToTake("Arts"))

// Testing the program further with these
console.log("\n");
console.log('Welcome Bioye, the subjects you will take are: ' + subjectsToTake("Science") + "\n");
console.log('Welcome Dada, the subjects you will take are: ' + subjectsToTake("Social Science") + "\n");
console.log('Welcome Chibuzor, the subjects you will take are: ' + subjectsToTake("Commercial"));
console.log("\n");



// **************************** QUESTION 5 *****************************************
//******** Method One *********/

function nearestPowerOf2(num) {
   for (let i = 0; i <= num; i++) {
      let biggerPower = 2 ** i;

      if (biggerPower === num) {
         return num;
      }
      else if (biggerPower > num) {
         let smallerPower = 2 ** (i - 1);
         let lowerDifference = Math.abs(num - smallerPower);
         let upperDifference = Math.abs(num - biggerPower); 
         if ((lowerDifference === upperDifference) || (lowerDifference < upperDifference)) 
         { return smallerPower; } 
         else { return biggerPower; }
      }
   }
}
const testNumbers = [50, 40, 8, 12, 16, 0, 1, 78, 120, 360, 500, 48, 18, 6, 3];
for (const num of testNumbers) {
   if (num <= 0) { 
      console.log(`The number ${num} is invalid, only positive numbers are allowed`); continue; 
   }
let pwr = nearestPowerOf2(num);
console.log("The number", pwr, "is the power of 2 nearest to", num);
}


//******** Method Two *********/
console.log("\n");    // Separating the output from the previous
let num = 50;
//Testing the code with other values
// num = 6;
// num = 100;
// num = 8;
// num = 0;
// num = -5;
// num = 40;
function nearestPowerOf2(num) {
   let roundDown = Math.floor(Math.log2(num));
   let roundUp = Math.ceil(Math.log2(num)); 
   let lowerPower = 2 ** roundDown;
   let upperPower = 2 ** roundUp;

   if (lowerPower === num) { return num; }
   else if ((Math.abs(num - lowerPower) === Math.abs(num - upperPower)) || (Math.abs(num - lowerPower) < Math.abs(num - upperPower))) {
      return lowerPower;
   }
   else { return upperPower; }
}

let pwr = nearestPowerOf2(num);
if (num <= 0) {
   console.log(`${num} is invalid. Enter a positive number`)
}
else {
   console.log("The number", pwr, "is the power of 2 nearest to", num);
}
