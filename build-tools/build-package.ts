const fs = require('fs');
const path = require('path');
const data = require('../package.json');

data.main = './lib/cjs/index.js';
data.module = './lib/esm/index.js';
data.types = './lib/esm/index.d.ts';
delete data.scripts;
delete data.files;

fs.writeFileSync(path.join(__dirname, '../dist/package.json'), JSON.stringify(data, null, 2));