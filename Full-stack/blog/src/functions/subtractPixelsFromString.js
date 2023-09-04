export default function subtractPixelsFromString(inputString, pixelsToSubtract) {
    // Check if the input string has a valid format (e.g., '18em')
    const regex = /^(\d+(\.\d+)?)\s*(\w+)$/; // Matches patterns like '18em' or '2.5rem'
    const match = inputString.match(regex);
    if (!match) {
      throw new Error('Invalid input format. Please provide a string with a numeric value and units.');
    }
    const numericValue = parseFloat(match[1]);
    const units = match[3];
    if (isNaN(numericValue)) {
      throw new Error('Invalid numeric value in the input string.');
    }
    // Subtract the specified pixels
    const newValue = numericValue - pixelsToSubtract;
    // Return the result as a string with the original units
    return `${newValue}${units}`;
  }