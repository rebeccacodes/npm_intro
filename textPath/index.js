const path = require('path');
console.log('./ from testPath/index.js: ', path.resolve('.'));
console.log('./ from testPath/index.js: ', path.resolve(__dirname));
console.log('./ from testPath/index.js: ', path.resolve(__filename));
console.log(__dirname)
__dirname, __filename
