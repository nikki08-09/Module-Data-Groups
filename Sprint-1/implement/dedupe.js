function dedupe(list) {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    if (!result.includes(list[i])) {
      result.push(list[i]);
    }
  }
  return result;
}

module.exports = dedupe;
