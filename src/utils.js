export function padNumberWithZeros(number) {
  // Convert the number to a string
  let numberStr = String(number);

  // Calculate the number of zeros to add
  let zerosToAdd = 15 - numberStr.length;

  // Pad the number with zeros on the left
  let paddedNumber = "0".repeat(zerosToAdd) + numberStr;

  return paddedNumber;
}
