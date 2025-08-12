export function needsLicense(kind) {
  return kind === 'car' || kind === 'truck';
}

// 2. Choose the better vehicle (dictionary order)
export function chooseVehicle(option1, option2) {
  return `${option1 < option2 ? option1 : option2} is clearly the better choice.`;
}

// 3. Calculate the resell price based on vehicle age
export function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    return originalPrice * 0.8;
  } else if (age > 10) {
    return originalPrice * 0.5;
  } else {
    return originalPrice * 0.7;
  }
}