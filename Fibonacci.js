function Fibonacci(number){
  if(number === 0 || number === 1){
    return number
  }
  else{
    result = Fibonacci(number-1)+Fibonacci(number-2)
    return result
  }
}
