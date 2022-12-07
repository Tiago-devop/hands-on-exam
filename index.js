const Fibonacci = (number) => {
  if(number <= 1 ) {
    return number
  }

  const resultFib = [0,1]

  for(let i = 2; i<= number; i++) {
    resultFib[i] = resultFib[i - 2] + resultFib[i - 1];
  }
  return resultFib[resultFib.length - 1];
}

console.log(Fibonacci(8))