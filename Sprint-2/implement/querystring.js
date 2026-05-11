function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  if (queryString[0] === "?") {
    queryString = queryString.slice(1);
  }
  if (!queryString) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (!pair) {
      continue;
    }
    const [rawKey, rawValue] = pair.split("=");
    const key = decodeURIComponent(rawKey);
    const value = decodeURIComponent(rawValue || "");
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
