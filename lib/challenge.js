/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */

/*
 * Prompt 1:
 *
 * Create a loop that counts from 0 to 10, printing each number.
 */
console.log("Prompt 1");
for (let i=0; i<=10; i++) {
  console.log(i);
}
/*
 * Prompt 2:
 *
 * Create a loop that prints every even number between 0 and 100.
 */
console.log("Prompt 2");
for (let i=0; i<=100; i++) {
  if ( ((i*3) % 2) == 0) {
    console.log(i);
}
}
/*
 * Prompt 3:
 *
 * Create a loop that counts from -5 to 5, printing each number.
 */
console.log("Prompt 3");
for (let i=-5; i<=5; i++) {
  console.log(i);
}

/*
 * Prompt 4:
 *
 * Create a loop that counts down from 10 to 0, printing each number.
 */
console.log("Prompt 4");
for (let i=10; i>0; i--) {
  console.log(i);
}
/*
 * Prompt 5:
 *
 * Create a loop that counts down from 5 to -5, printing each number.
 */
console.log("Prompt 5");
for (let i=5; i>=-5; i--) {
  console.log(i);
}

/*
 * Prompt 6:
 *
 * Create a loop that counts from 0 to 50 in multiples of 2 (instead of 1),
 * printing each number.
 */
console.log("Prompt 6");
for (let i=0; i<=25; i++) {
  console.log(i*2);
}
/*
 * Prompt 7:
 *
 * For the numbers 0 - 100, print out "I found a [ number ]. High five!" if the
 * number is a multiple of five.
 *
 * Sample Output:
 *   - I found a 5. High five!
 *   - I found a 10. High five!
 */
console.log("Prompt 7");
for (let i=0; i<=100; i++) { 
if (((i % 5) == 0) && (i!==0)){
 console.log("I found a " + i + " High five!") ;
}
}

/*
 * Prompt 8:
 *
 * Create a variable called someNumber and assign it a random number between
 * 0 and 100.
 *
 * Create a conditional that matches these requirments:
 *   - if someNumber is less than 30, print "that's a small number"
 *   - if someNumber is between 30 and 60, print "the number is medium sized"
 *   - if someNumber is greater than 60, print "We got a big one!"
 */
console.log("Prompt 8");
let someNumber = Math.ceil(Math.random()*100)

if(someNumber < 30) { 
  console.log("That's " + someNumber+ ", a small number " );
} else if ((someNumber >=30) && (someNumber < 60)) {
  console.log("The number " + someNumber+ ", is medium sized");
} else {
  console.log("We got " + someNumber+ ", a big one!");
}

/*
 * Prompt 9:
 *
 * Iterate over the starWars array printing each character's name and index
 *
 * i.e. 0. Han, 1. C3PO, 2. R2D2
 */
console.log("Prompt 9");
const StarWars = ['Han', 'C3PO', 'R2D2', 'Luke', 'Leia', 'Anakin'];
for (let i=0; i<StarWars.length; i++) {
  console.log("Name " + StarWars[i]+ " index "+ i);
}

/*
 * Prompt 10:
 *
 * Write a loop that pushes every even number between 0 and 100 into an array,
 * then print the array.
 */
console.log("Prompt 10");
let Array100 = [0];
for (let i=1; i<=100; i++) {
  Array100.push(i);
 }
console.log(Array100)
/*
 * Prompt 11:
 *
 * Find the median number in the following nums array (the mid point), then
 * console.log that number.
 *
 * Hint: What does Math.floor() do?
 */
console.log("Prompt 11");
let nums = [
  14,
  11,
  16,
  15,
  13,
  16,
  15,
  17,
  19,
  11,
  12,
  14,
  19,
  11,
  15,
  17,
  11,
  18,
  12,
  17,
  12,
  71,
  18,
  15,
  12
];
let MidPointRem = nums.length % 2;
let MidPointIndex = nums.length/2;
if (MidPointRem !==0) {
 MidPointIndex = Math.floor(MidPointIndex);
console.log("Median is "+ nums[MidPointIndex] + " at index " + MidPointIndex);
} else { 
  let MedianAverage = (nums[MidPointIndex - 1] + nums[MidPointIndex])/2;
  console.log("Median is " + MedianAverage);
}

/*
 * Prompt 12:
 *
 * Did you know that you can nest loops? The catch is that you have to use
 * different incrementers (normally i). You'll commonly see developers use
 * another 1-letter incrementer (j, k, l, etc).
 *
 * Create an "outer" loop that counts up from 1 to 10 with an incrementer of i.
 * Create an "inner" loop that counts from 11 to 20 with an incrementer of j.
 * Inside the inner loop, print `i: ${i} / j: ${j}` (Use backtics!)
 */
console.log("Prompt 12");
for (let i = 1; i <= 10; i++) {
  for (let j =11; j<=20; j++) {
    console.log(`i: ${i} / j: ${j}`)
  }
}
/*
 * Prompt 13:
 *
 * Using nested loops, print the values inside the nested arrays.
 */
console.log("Prompt 13");
let nestedArrays = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']];
for (let i = 0; i < nestedArrays.length; i++) {
  for (let j =0; j<3; j++) {
    console.log(nestedArrays[i][j]);
  }
}