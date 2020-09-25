// find the lowest common multiple of two given numbers

const gcd = function(a, b) {
  // your code here
  let result = 1;
  let minNum = Math.min(a, b);

  for(let i = 2; i <= minNum; i++){
    if(a % i === 0 && b % i === 0){
      result = i;
    }
  }
  return result;
}

const lcm = function(a, b) {
  // your code here
  return(a * b) / gcd(a, b);
}

console.log(lcm(6, 12));





// const gcd = function(a, b) {
//   // your code here
//   return !b ? a : gcd(b, a % b);
// }