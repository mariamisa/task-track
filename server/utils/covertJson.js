const toJson = (object) => JSON.stringify(object);
const toObject = (string) => JSON.parse(string);
module.exports = { toJson, toObject };
