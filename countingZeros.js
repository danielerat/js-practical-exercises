/* 1.Counting Zeros
Count Total number of zeros from 1 up to n?
Explanation: So the trick here is. if you have a number 1 to 50 the value is 5. 
just 50 divided by 10. However, if the value is 100. 
The value is 11. you will get by 100/10 = 10 and 10/10. 
That's how you will get in the more zeros in one number like (100, 200, 1000) */

function countingZero(n) {
  if (typeof n !== "number") return "Invalid number";
  let z = 0;
  while (Math.floor(n / 10) >= 1) {
    z += n / 10;
    n = n / 10;
  }
  return z;
}
console.log(countingZero(101));
