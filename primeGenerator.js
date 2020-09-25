// generate a list of prime numbers from 2 up to a value, n
// you can use the Sieve of Eratosthenes method to do this. 

const primeGenerator = function(n) {
  // your code here
  let result;
  let primeList = [];

  for(let i = 2; i <= n; i++){
    result = true;
    for(let j = 2; j < i; j++){
      if(i % j === 0){
        result = false;
      }
    }
    if(result === true){
      primeList.push(i);
    }
  }
  return primeList;
}

console.log(primeGenerator(14));