// === p5 d.ts ====
// This file will add both p5 instanced and global intellisence 
// from: https://github.com/Gaweph/p5-typescript-starter/blob/master/global.d.ts

import p5module = require('p5');
import * as p5Global from 'p5/global' 

export = p5module;
export as namespace p5;
declare global {
    interface Window {
        p5: typeof p5module,
    }
}