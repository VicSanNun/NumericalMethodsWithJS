function SquareRoot(number, step){
  let x = 1
  for(let i = 0; i < step; i++){
    x = 0.5*(x+(number/x))
  }
  return(x)
}