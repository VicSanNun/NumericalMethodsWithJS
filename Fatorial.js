function Fatorial(number){
  if(number === 0 || number === 1){
    return 1
  }
  else{
    result = number*Fatorial(number-1)
    return result
  }
}
