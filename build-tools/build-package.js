const fs = require('fs');
const path = require('path');
const package = require('../package.json');

package.main = 'index.js';
delete package.scripts;
delete package.files;

fs.writeFileSync(path.join(__dirname, '../dist/package.json'), JSON.stringify(package, null, 2));