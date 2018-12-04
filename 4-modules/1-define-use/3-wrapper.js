// function(exports, module, require, __filename, __dirname) {

console.log(arguments);

// exporting values
exports.a = 42;
module.exports.b = 37;

// exporting functions
module.exports = () => {};

// return module.exports; // necessarily returned
// }
