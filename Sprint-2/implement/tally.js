function tally(array) {
  const counts = {};
  if (!Array.isArray(array)) {
    throw new TypeError("Input must be an array");
  }
  if (array.length === 0) {
    return counts;
  }
  for (const item of array) {
    counts[item] = (counts[item] || 0) + 1;
  }
  return counts;
}

module.exports = tally;
