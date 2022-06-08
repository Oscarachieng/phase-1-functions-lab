// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
     let numberOfBlocks;
     numberOfBlocks = Math.abs(pickupLocation - 42);
     return numberOfBlocks;
}
console.log(distanceFromHqInBlocks(56))

function  distanceFromHqInFeet(pickupLocation){
   let distanceInFeet;
   distanceFromHqInBlocks(pickupLocation);
    distanceInFeet = distanceFromHqInBlocks(pickupLocation)*264;
    return distanceInFeet;
    
}

console.log(distanceFromHqInFeet(2000))

function  distanceTravelledInFeet(startStreet, destinationStreet){
    let distanceInFeet = Math.abs(destinationStreet - startStreet)*264;
    return distanceInFeet;
}
 console.log(distanceTravelledInFeet(34,56));

 function calculatesFarePrice(start, destination){
     let distanceInFeet = Math.abs (destination - start)*264;
     let fareCharges;
     if (distanceInFeet <= 400) {
         fareCharges = 0;
     } else if(distanceInFeet > 400 && distanceInFeet <= 2000){
         fareCharges = (distanceInFeet - 400)*0.02;
     }else if(distanceInFeet > 2000 && distanceInFeet <= 2500){
         fareCharges = 25;
     }else if (distanceInFeet > 2500) {
         fareCharges = "cannot travel that far"
     }
     return fareCharges;
 }

 console.log(calculatesFarePrice(32,34))