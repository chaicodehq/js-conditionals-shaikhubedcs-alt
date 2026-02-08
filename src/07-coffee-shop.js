/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  const lowerSize = size.toLowerCase();
  const lowerType = type.toLowerCase();
  let totalPrice = 0;
  extras={
    whippedCream: extras.whippedCream || false,
    extraShot: extras.extraShot || false
  };
  if(typeof size !== "string" || typeof type !== "string" || size === null || type === null || size === undefined || type === undefined || typeof extras !== "object" || extras === null || extras === undefined){
    return -1;
  } 
  if(size !== "small" && size !== "medium" && size !== "large"){
    return -1;
  }
  if(type !== "regular" && type !== "latte" && type !== "cappuccino" && type !== "mocha"){
    return -1;
  }
  
  switch(lowerSize){
    case "small":
      totalPrice +=3.00; 
      break;
    case "medium":
      totalPrice +=4.00;
      break;
    case "large":
      totalPrice +=5.00;
      break;
    default:
      return -1;
  }
  if(lowerType === "regular"){
    totalPrice += 0.00;
  } else if(lowerType === "latte"){
    totalPrice += 1.00;
  } else if(lowerType === "cappuccino"){
    totalPrice += 1.50;
  } else if(lowerType === "mocha"){
    totalPrice += 2.00;
  } else {
    return -1;
  }
  if(extras.whippedCream){
    totalPrice += 0.50;
  }
  if(extras.extraShot){
    totalPrice += 0.75;
  }
 
  return Math.round(totalPrice * 100) / 100;
}
