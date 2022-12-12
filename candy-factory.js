// // 1. buy milk chocolate
// //define a function names "buyChocolate" with no parameters
// const buyChocolate = () => {
//     let boughtChocolate = {
//         type: "Milk Chocolate"
//     }
//     //the function should return an object property with a value of "Milk Chocolate"
//     return boughtChocolate;
// }
// let boughtChocolate = buyChocolate();


// // 2. add mint flavoring
// //define a function named addFlavoring with one parameter to accept as input 
// const addFlavoring = (boughtChocolate) => {
//     //addFlavoring should add a new flavor property to the object with a value of "Mint"
//     boughtChocolate.flavor = "Mint"
//     return boughtChocolate
// }
// let chocWithFlavor = addFlavoring(boughtChocolate);

// // 3. combine the chocolate and mint.
// //define a function named makeBarkMixture 
// //makeBarkMixture should have on parameter for an incomeing object in the function
// const makeBarkMixture = (chocWithFlavor) => {
//     //add an "if else" statement to check if the "makeBarkMixture" is equal to "Mint"
//     if(chocWithFlavor.flavor === "Mint") {
//             // if the flavor is equal to mint, add a new property with a value of "true"
//            chocWithFlavor.mixed = true;
//         }
//         //else then the property value should be "false"
//         else {
//            chocWithFlavor.mixed = false;
//         }
//         return chocWithFlavor;
// }
// let isItBaked = makeBarkMixture(chocWithFlavor);


// // 4. bake the mixture
// //define a function named "bakeCandy" it should have one parameter for an incoming object
// const bakeCandy = (isItBaked) => {
//     if(isItBaked === true) {
// //if the mixed property on the incoming object has a value of true
//         isItBaked.baked = true;
//     }
//     else {
//         isItBaked.baked = false;
//     }
//     return isItBaked;
// }
// let brokenBark = bakeCandy(isItBaked);


// const breakBark = (brokenBark) => {
//     if(brokenBark === true) {
//         return console.log(["Mint Chocolate Bark Piece 1","Mint Chocolate Bark Piece 1","Mint Chocolate Bark Piece 2","Mint Chocolate Bark Piece 3","Mint Chocolate Bark Piece 4","Mint Chocolate Bark Piece 5","Mint Chocolate Bark Piece 6"])
//     } 
//     if(brokenBark === false) {
//         return [];
//     }
// }  
// test = buyChocolate()
// let barkPieces = breakBark(brokenBark);
// breakBark()
// console.log(boughtChocolate)
// console.log(test)