// // world domination
// // 1. pick world
// const pickWorld = () => {

// }
// // 2. go to the world of choosing
// const goToWorld = () => {

// }
// // 3. negotiate with world leaders
// const negotiate = () => {
    
// }
// // 4. refuse terms of surrender
// const noSurrender = () => {
    
// }
// // 5. initiate hostile takeover
// const hostilities = () => {
    
// }
// // 6. fail spectacularly
// const failure = () => {
    
// }
// // 7. ask for forgiveness
// const imSorry = () => {
    
// }
// // 8. straight to jail
// const jailTime = () => {
    
// }
// // 9. post bail
// const outOnBail = () => {
    
// }
// // 10. jump bail
// const outOfTown = () => {
    
// }





// It can add numbers
const add = (firstNum, secondNum) => {
    const sum = firstNum + secondNum;
    return sum;
}
// It can subtract numbers
const subtract = (firstNum, secondNum) => {
    const difference = firstNum - secondNum
    return difference;
}
// It can divide numbers
const divide = (firstNum, secondNum) => {
    const quotient = firstNum / secondNum;
    return quotient
}
// It can multiply numbers
const multiply = (firstNum, secondNum) => {
    const product = firstNum * secondNum;
    return product
}
// It can square numbers
const square = (firstNum) => {
    const squareRoot = firstNum * firstNum;
    return squareRoot
}


let numOfLegs = 60;
let fourLegs = multiply(0.25, 4);
let twoLegs = multiply(0.75, 2);
const totalAnimals = () => {
    const output = numOfLegs / (fourLegs + twoLegs)
    return output;
}
const totalAnimals2 = () => {
    return 60 / (multiply(0.25, 4) + multiply(0.75,2))
     
}

let animalOutput = totalAnimals2();
console.log(animalOutput)


// (0.25x * 4) + (0.75x * 2) = 60
// x(0.25 * 4) + x(0.75 * 2) = 60
// .25x * 4 + 0.75x * 2 = 60 
// x + (1)  (1.5) = 60 
// 2.5x = 60 
// 60/2.5 = x



