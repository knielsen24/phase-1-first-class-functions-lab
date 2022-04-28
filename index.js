// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

//const newDrivers = ['Kevin', 'Matt', 'Adam'];


const returnFirstTwoDrivers = (array) => {
    return array.slice(0,2);
}
//console.log(returnFirstTwoDrivers(drivers));


const returnLastTwoDrivers = (array) => {
    return array.slice(-2);
}
//console.log(returnLastTwoDrivers(drivers));


const createFareMultiplier = (integer) => {
     return fare => integer * fare;
}
//console.log(createFareMultiplier(5)(5));


const fareDoubler = (fare) => {
    return createFareMultiplier(2)(fare);
}
//console.log(fareDoubler(10));


const fareTripler = (fare) => {
    return createFareMultiplier(3)(fare);
}
//console.log(fareTripler(10));


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const selectDifferentDrivers = (array, selector) => {
    return selector = selector(array);
}
console.log(selectDifferentDrivers(drivers, selectingDrivers[0]));
console.log(selectDifferentDrivers(drivers, selectingDrivers[1]));

//  QUESTION:  Can you invoke returnFirstTwoDrivers
// function with selectingDrivers array with index?


// const selectDifferentDrivers = (drivers, selector) => {
//     return selector(drivers) {
//         if (drivers === "first") {
//             return returnFirstTwoDrivers;
//         }
//         if (drivers === "second") {
//             return returnLastTwoDrivers;
//         }
//     }
// }


//console.log(selectDifferentDrivers());

/*
function createFareMultiplier(int) {
    const fare = function(int) {
        return fare * int;
    }
}

function fareDoubler() {
    const double = function() {
        return createFareMultiplier * 2;
    }
    return double;
}

function fareTripler(fare) {
    return fare * 3;
}

function fareQuintupler(fare) {
    return fare * 5; 
}
*/