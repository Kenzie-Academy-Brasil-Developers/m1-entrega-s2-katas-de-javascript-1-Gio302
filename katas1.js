// 1 questão oneThroughTwenty 

function oneThroughFive() {
  let array0 = []
  for (let cont = 1; cont <= 20; cont++) {
      array0.push(cont)
  }
  return array0
}
console.log(oneThroughFive())

// 2 questão evensToTwenty 

function evensToTwenty() {
  let array2 = []
  for(let cont2 = 1; cont2 <= 20; cont2++) {
      if(cont2 % 2 == 0){
          array2.push(cont2)
      }
  }
  return array2
}
console.log(evensToTwenty())

// 3 questão oddsToTwenty 

function oddsToTwenty() {
  let array3 = []
  for(let cont3 = 1; cont3 <= 20; cont3++) {
      if(cont3 % 2 == 1){
          array3.push(cont3)
      }
  }
  return array3
}
console.log(oddsToTwenty())

// 4 questão multiplesOfFive 

function multiplesOfFive () {
  let array4 =[]
  for(let cont4 = 1; cont4 <= 100; cont4++) {
      if(cont4 % 5 == 0) {
          array4.push(cont4)
      }
   }
   return array4
}
console.log(multiplesOfFive())

// 5 questão squareNumbers 

function squareNumbers () {
  let array5 =[]
  for(let cont5 = 1; cont5 <= 10; cont5++){
      array5.push(cont5 * cont5)
  }
  return array5
}
console.log(squareNumbers())

// 6 questão countingBackwards 

  function countingBackwards() {
   let array6 = []
  for (let cont6 = 20; cont6 >= 1; cont6--) {
      array6.push(cont6)
  }
      return array6
}
console.log(countingBackwards())

// 7 questão evenNumbersBackwards 

function evenNumbersBackwards() {
  let array7 = [];
  for (let cont7 = 20; cont7 >= 1; cont7--) {
      if(cont7 % 2 == 0) {
          array7.push(cont7)
      }
  }
      return array7
}
console.log(evenNumbersBackwards())

// 8 questão oddNumbersBackwards 

function oddNumbersBackwards() {
  let array8 = [];
  for (let cont8 = 20; cont8 >= 1; cont8--) {
      if(cont8 % 2 == 1) {
          array8.push(cont8)
      }
  }
      return array8
}
console.log(oddNumbersBackwards())

// 9 questão multiplesOfFiveBackwards 

function multiplesOfFiveBackwards() {
  let array9 = [];
  for (let cont9 = 100; cont9 >= 1; cont9--) {
      if(cont9 % 5 == 0) {
          array9.push(cont9)
      }
  }
      return array9
}
console.log(multiplesOfFiveBackwards())

// 10 questão squareNumbersBackwards 

function squareNumbersBackwards() {
  let array10 = []
 for (let cont10 = 10; cont10 >= 1; cont10--) {
     array10.push(cont10 * cont10)
 }
     return array10
}
console.log(squareNumbersBackwards())