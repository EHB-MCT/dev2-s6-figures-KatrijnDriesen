"use strict";

import {Rectangle} from "./try_rectangle.js";

export class Square extends Rectangle {
    constructor(size){
        this._size = size;
        super ("Square");        
    }

}