import path from 'path';
import { src, dest } from 'gulp';
import scaleImages from 'gulp-scale-images';
import flatMap from 'flat-map'; // const flatMap = require('flat-map').default;

import { paths, mapFav } from './config';

const names = mapFav.windows.names;
const widths = mapFav.windows.width;
const heights = mapFav.windows.height;

// Image List
const images = (file, cb) => {
  const img = [];
  const name = [];
  for (let i = 0; i < widths.length; i++) {
    img[i] = file.clone();
    img[i].scale = {
      maxWidth: widths[i],
      maxHeight: heights[i],
      formatOptions: { name: names[i] }
    };
  };
  cb(null, img);
};

// Getting output file names
const computeFileName = (output, scale, cb) => {
  const fileName = [
    path.basename('', output.extname), // strip extension
    scale.formatOptions.name,
    scale.format || output.extname
  ].join('');
  cb(null, fileName);
};

// Resizing task
const windows = () => {
  return src(paths.srcFav)
    .pipe(flatMap(images))
    .pipe(scaleImages(computeFileName))
    .pipe(dest(paths.destFav))
};

export default windows;
