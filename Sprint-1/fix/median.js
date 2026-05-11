// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) {
    return null;
  }
  const filteredList = list.filter((item) => typeof item === "number");
  const sortedList = filteredList.sort((a, b) => a - b);
  if (filteredList.length === 0) {
    return null;
  }
  const middleIndex = Math.floor(sortedList.length / 2);
  if (sortedList.length % 2 === 0) {
    const median = (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2;
    return median;
  } else {
    const median = sortedList[middleIndex];
    return median;
  }
}
console.log(calculateMedian([1, "apple", 2, 3, 4])); // Output: 2.5
module.exports = calculateMedian;
