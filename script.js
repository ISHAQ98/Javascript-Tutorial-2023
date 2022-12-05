'use stirct';

// Coding challenge

// 1- Understanding the problem
// - Array trnsformed to string sepaarated by ...
// - what is the X days? Answer : index + 1

// 2- Breaking up into sub-problems
// - transform array to string
// transform each Element to string with C°
// - Strings needs to contain day (idex + 1)
// - Add ... between elements and start and end of string
/* 
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}C° and ... ${data1[1]}C° ... ${data1[2]}C° ...`);

const printForecast = function (arr) {
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]} C° in ${i + 1} days ...`;
  }
  console.log(str);
};
console.log(printForecast(data1));
 */

// ----- Guss My Number !
/* 
console.log(document.querySelector('.message').textContent);
console.log(
  (document.querySelector('.message').textContent = '🇩🇿 oop correct Number')
);


const num = document.querySelector('.number').textContent = 13;
const score = document.querySelector('.score').textContent = 11;

console.log((document.querySelector('.guess').value = 003));
console.log(document.querySelector('.guess').value);
 */
const button = document
  .querySelector('.check')
  .addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
      console.log(
        (document.querySelector('.message').textContent = '🍔 No Number')
      );
    } else {
      guess.style.backgroundColor = 'lightblue'
    }
  });
console.log(button);



// 5 -12-2022
// #08 data structure , Modern Operators and Stings

// Destructuring Arrays
/* 
const arr = [2, 3, 4];

const [x, y, z] = arr;
console.log(z, x, y);

let [one, two] = arr;
console.log(one, two);
 
// const temp = one;
// one = two;
// two = temp;
// console.log(one, two);

// destructuring switching
[one, two] = [two, one];
console.log(one, two);

// Nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;

console.log(i, j, k);
// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
 */
// Object Destructuring 
