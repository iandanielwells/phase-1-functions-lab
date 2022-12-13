/*
function distanceFromHqInBlocks(someValue) {
   const hq  = 42
   const distance =  Math.abs(someValue - hq)
   return distance
}

function distanceFromHqInFeet(someValue) {
   distanceFromHqInBlocks(someValue) 
   const inFeet = 264
    return distanceFromHqInBlocks(someValue) * inFeet
}

function distanceTravelledInFeet (start, destination) {
   const inFeet = 264
   const distance2 = Math.abs(start - destination)
   return inFeet * distance2
}

function calculatesFarePrice (start, destination) {
   let dist = distanceTravelledInFeet(start, destination)
   let price = 0
   const setPrice = 250
   
   if (dist < 400) {
      price = 0
      return price
   }
   
   else if (dist <= 2000) {
     price = dist * (2 / 412.5)
     return Math.abs(price)
   }
   
   else if (dist <= 2500) { 
      price = setPrice / 10
      return price
   }
   
   else  {
      return 'cannot travel that far'  
   }
   */

   //instructor code

   const distanceFromHqInBlocks = (location) => Math.abs(location - 42)

   function distanceFromHqInFeet(location) {
      return distanceFromHqInBlocks(location) * 264
   }
   
function distanceTravelledInFeet(start, destination) {
   const distance = Math.abs(start - destination)
   return distance * 264
}

function calculatesFarePrice(start, destination) {
   const distance = distanceTravelledInFeet(start, destination)

   if(distance <= 400){
      return 0
   }
   else if(distance <=2000){
      return (distance - 400) * .02
   }
else if(distance <= 2500){
   return 25
}
else return "cannot travel that far"
}

 