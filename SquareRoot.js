function SquareRoot(number, step){
  var x = 1
  for(i=0; i < step; i++){
    x = 0.5*(x+(number/x))
  }
  console.log(x)
}