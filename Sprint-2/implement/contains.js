function contains(obj, prop) {
  if (typeof obj !== "object" || obj === null) {
    return false; // Return false for non-object inputs
  }
  return prop in obj;
}

module.exports = contains;
