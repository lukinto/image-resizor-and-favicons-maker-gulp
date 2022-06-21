import del from 'del';

import { paths } from './config';

export const cleanFav = () => del(paths.cleanFav);
export const cleanRes = () => del(paths.cleanRes);
export const cleanResWH = () => del(paths.cleanResWH);
