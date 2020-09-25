// check if a given number is prime. return true or false. 

const isPrime = function(num) {
  // your code here
  let result;
  for(let i = 0; i <= num; i++){
    result = true;
    for(let j = 2; j < i; j++){
      if(i % j === 0){
        result = false;
      }
    }
  }
  return result;
}

console.log(isPrime(5));
console.log(isPrime(14));

