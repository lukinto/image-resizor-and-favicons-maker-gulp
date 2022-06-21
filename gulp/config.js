import mapFavJson from '../map-favicons.json';
import mapResJson from '../map-resizing.json';
import mapResWhJson from '../map-resizing-wh.json';

// Paths
const srcFav = './src-favicons/';
const srcRes = './src-resizing/';
const srcResWH = './src-resizing-wh/';
const destFav = './dest-favicons/';
const destRes = './dest-resizing/';
const destResWH = './dest-resizing-wh/';

export const paths = {
  cleanFav: destFav,
  cleanRes: destRes,
  cleanResWH: destResWH,
  srcFav: `${srcFav}*.{jpeg,jpg,png,gif}`,
  srcRes: `${srcRes}*.{jpeg,jpg,png,gif}`,
  srcResWH: `${srcResWH}*.{jpeg,jpg,png,gif}`,
  destFav: destFav,
  destRes: destRes,
  destResWH: destResWH,
};

// Names, widths and heights of the favicons, it is an object with name, width and height arrays
export const mapFav = JSON.parse(JSON.stringify(mapFavJson));

// Map for image resizing by width only, it is a width array
export const mapRes = JSON.parse(JSON.stringify(mapResJson));

// Map for image resizing by width and height, it is an object with width and height arrays
export const mapResWH = JSON.parse(JSON.stringify(mapResWhJson));
