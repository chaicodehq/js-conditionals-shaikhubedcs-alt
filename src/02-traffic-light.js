/**
 * 🚦 The Driving Simulator
 *
 * SafeDrive Driving School is building a simulator for new students.
 * You need to write the logic that tells student drivers what to do
 * when they encounter different traffic light signals.
 *
 * Signal → Action:
 *   - "green"        → "GO"
 *   - "yellow"       → "SLOW DOWN"
 *   - "red"          → "STOP"
 *   - "flashing red" → "STOP AND PROCEED WITH CAUTION"
 *   - anything else  → "INVALID SIGNAL"
 *
 * Rules:
 *   - The function should be case-insensitive
 *     (e.g., "GREEN", "Green", "green" should all return "GO")
 *
 * Hint: Use a switch statement!
 *
 * @param {string} color - The traffic light signal
 * @returns {string} The driving action to take
 */
export function getTrafficAction(color) {
  if(typeof color !== 'string'|| color.trim()==="" || color === null || color === undefined || color.toLowerCase() !== "green" && color.toLowerCase() !== "yellow" && color.toLowerCase() !== "red" && color.toLowerCase() !== "flashing red"){
    return "INVALID SIGNAL";
  }
  const lowerColor = color.toLowerCase();
  if(lowerColor === "green"){
    return "GO";
  }
  else if(lowerColor === "yellow"){
    return "SLOW DOWN";
  }
  else if(lowerColor === "red"){
    return "STOP";
  }
  else if(lowerColor === "flashing red"){
    return "STOP AND PROCEED WITH CAUTION";
  }
  else{
    return "INVALID SIGNAL";
  }
}

