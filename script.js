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
      console.log(guess);
    }
  });
console.log(button);
