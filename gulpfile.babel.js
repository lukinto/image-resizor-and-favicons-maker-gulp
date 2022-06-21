import { series, parallel } from 'gulp';

import { cleanFav, cleanRes, cleanResWH } from './gulp/clean';
import favicons from './gulp/favicons';
import windows from './gulp/windows';
import android from './gulp/android';
import appleIcon from './gulp/appleIcon';
import yandex from './gulp/yandex';
import resizing from './gulp/resizing';
import resizingWH from './gulp/resizingWH';
import ico from './gulp/ico';

const cleanAll = parallel(cleanFav, cleanRes, cleanResWH);

const faviconsIco = series(favicons, ico);

const favAll = parallel(
  faviconsIco,
  windows,
  android,
  appleIcon,
  yandex,
);

const all = parallel(favAll, resizing, resizingWH);

exports.cleanf = cleanFav; // clean destFav
exports.cleanr = cleanRes; // clean destRes
exports.cleanrwh = cleanResWH; // clean destResWH
exports.cleanall = cleanAll; // clean destFav, destRes and destResWH

exports.favall = series(cleanFav, favAll); // all favicons, in destFav
exports.default = resizing; // resizing by width only, in destRes
exports.rwh = resizingWH; // resizing by width and height, in destResWH
exports.all = series(cleanAll, all); // all favicons for destFav and resizing for destRes

exports.fav = faviconsIco;
exports.win = windows;
exports.and = android;
exports.app = appleIcon;
exports.yan = yandex;
