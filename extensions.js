module.exports.isEmpty = isEmpty;
module.exports.isEmptyString = isEmptyString;
module.exports.hasProperty = hasProperty;
module.exports.writeResponse = writeResponse;

function isEmpty(value) {
    return (typeof value === "undefined" || value === null);
}

function isEmptyString(value) {
    return (isEmpty(value) || value.length === 0);
}

function hasProperty(object, propertyName) {
    return !!object[propertyName];
}

function writeResponse(response, responseCode, responseContent) {
  response.writeHead(responseCode, {"Content-Type": "text/plain"});
  response.write(responseContent);
  response.end();
}
