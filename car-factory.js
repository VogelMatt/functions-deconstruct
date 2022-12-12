const brandNewChassis = () => {
    let chassisBeingMade = {}
    return chassisBeingMade
}
const addNameOfCar = (newName) => {
    newName.name = "A 2001 Space Oddessy";
    return newName
}
const addWheels = (wheelObj) => {
    wheelObj.wheels = 4
    return wheelObj
} 
const addEngine = (engineObj) => {
    engineObj.engine = "4.8L"
    return engineObj
}
const addSteeringWheel = (steeringObj) => {
    steeringObj.steeringWheel = "Tilting"
    return steeringObj
}
const addDrivetrain = (driveObj) => {
    driveObj.drivetrain = "two wheel drive"
    return driveObj
}
 
let FinalName = addNameOfCar(brandNewChassis())
let newWheels = addWheels(FinalName);
let newEngine = addEngine(newWheels);
let newSteering = addSteeringWheel(newEngine);
let everythingsOn = addDrivetrain(newSteering);
console.log(everythingsOn)





// let everythingsOn = addDrivetrain(addSteeringWheel(addEngine(addNameOfCar(brandNewChassis()))));
// console.log(everythingsOn)






















// const createChassis = () => {
//     let chassis = {}
//     return chassis;
// }
// let chassis = createChassis();

// const addFourWheels = (chassis) => {
//     chassis.wheels = 4;
//     return chassis
// }
// let chassisWithWheels = addFourWheels(chassis);


// const addEngine = (chassisWithWheels) => {
//     chassisWithWheels.engine = "4.8L"
//     return chassisWithWheels
// }
// let chassisWithEngine = addEngine(chassisWithWheels);


// const addSteeringWheel = (chassisWithEngine) => {
//     chassisWithEngine.steeringWheel = "Tilting"
//     return chassisWithEngine
// }
// let chassisWithSteeringWheel = addSteeringWheel(chassisWithEngine)


// const addDriveTrain = (chassisWithSteeringWheel) => {
//     chassisWithSteeringWheel.driveTrain = "Two wheel drive"
//     return chassisWithSteeringWheel
// }
// let chassisWithDriveTrain = addDriveTrain(chassisWithSteeringWheel);




















// const bigTimeChassis = (obj) => {
//     obj.wheels = 4,
//     obj.engine = "4.8L",
//     obj.steeringWheel = "Tilting",
//     obj.driveTrain = "Two wheel drive",
//     obj.body = "Fever"
// }

// // console.log(chassisWithDriveTrain);
// let objectCar = {};
// bigTimeChassis(objectCar);

// console.log(objectCar)
