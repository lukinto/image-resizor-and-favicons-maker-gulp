import fs from 'fs';
import pngToIco from 'png-to-ico';

import { paths } from './config';

const srcFile = `${paths.destFav}favicon-16x16.png`;
const destFile = `${paths.destFav}favicon.ico`;

const ico = async () => {
  await pngToIco(srcFile)
    .then(buf => {
      fs.writeFileSync(destFile, buf);
    });
};

export default ico;

// const fs = require('fs');
// const pngToIco = require('png-to-ico');
// pngToIco(['./src/favicon-16x16.png'])
//   .then(buf => {
//     fs.writeFileSync('./build/favicon.ico', buf);
// });
