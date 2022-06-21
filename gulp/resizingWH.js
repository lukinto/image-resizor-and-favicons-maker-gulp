import path from 'path';
import { src, dest } from 'gulp';
import scaleImages from 'gulp-scale-images';
import flatMap from 'flat-map'; // const flatMap = require('flat-map').default;

import { paths, mapResWH } from './config';

const widths = mapResWH.width;
const heights = mapResWH.height;

// Image List
const images = (file, cb) => {
  const img = [];
  for (let i = 0; i < widths.length; i++) {
    img[i] = file.clone();
    img[i].scale = { maxWidth: widths[i], maxHeight: heights[i] };
  };
  cb(null, img);
};

// Getting output file names
const computeFileName = (output, scale, cb) => {
  const fileName = [
    path.basename(output.path, output.extname), // strip extension
    '-' + scale.maxWidth + 'x' + scale.maxHeight,
    scale.format || output.extname
  ].join('');
  cb(null, fileName);
};

// Resizing task
const resizingWH = () => {
  return src(paths.srcResWH)
    .pipe(flatMap(images))
    .pipe(scaleImages(computeFileName))
    .pipe(dest(paths.destResWH))
};

export default resizingWH;
