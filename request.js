var ext = require("./extensions.js");

module.exports = Request;

Request.prototype.hasCount = hasCount;
Request.prototype.getData = getData;

function Request(data) {
    this._parameters = data;
}

function hasCount() {
    return !ext.isEmpty(this._parameters["count"]);
}

function getData() {
    return JSON.stringify(this._parameters, null, 4);
}

