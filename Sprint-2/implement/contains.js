function contains(obj, prop) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return false; // Return false for non-object inputs
  }
  if (typeof prop !== "string") {
    return false; // Return false for non-string property names
  }
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = contains;
