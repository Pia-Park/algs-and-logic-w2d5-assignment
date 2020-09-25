// find the greatest common divisor of the two numbers given


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


console.log(gcd(6, 12));
console.log(gcd(5, 12));




// const gcd = function(a, b) {
//   // your code here
//   let minNum;
//   let maxNum;
//   let remainder;
//   let result;

//   if(a >= b){
//     maxNum = a;
//     minNum = b;
//   } else {
//     maxNum = b;
//     minNum = a;
//   }

//   do {remainder = maxNum % minNum;
//     if(remainder == 0){
//       result = minNum;
//       return result;
//     } else {
//       maxNum = minNum;
//       minNum = remainder;
//     }
//   }while(true);
// }


// const gcd = function(a, b) {
//   // your code here
//   if((typeof a !== 'number') || (typeof b !== 'number'))
//   return false;
//   a = Math.abs(a);
//   b = Math.abs(b);
//   while(b){
//     let t = b;
//     b = a % b;
//     a = t;
//   }
//   return a;
// }


// const gcd = function(a, b) {
//   // your code here
//   let number = a > b ? a : b;
//   let gdcNumber = 0;
  
//   for(let i = 1; i <= number; i++){
//     if(a % i === 0 && b % i === 0){
//       gdcNumber = i;
//     } else if(i <= 1){
//       gdcNumber = "nothing";
//     }
//   return gdcNumber;
// }
// }