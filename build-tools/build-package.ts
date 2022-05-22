const fs = require('fs');
const path = require('path');
const data = require('../package.json');

data.main = './dist/cjs/index.js';
data.module = './dist/esm/index.js';
data.types = './dist/esm/index.d.ts';
delete data.scripts;
delete data.files;

fs.writeFileSync(path.join(__dirname, '../dist/package.json'), JSON.stringify(data, null, 2));