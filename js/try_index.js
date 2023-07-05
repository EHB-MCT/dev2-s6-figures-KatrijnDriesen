"use strict";

import {Figure} from './Figure.js';
//import Circle from './Circle.js';
import {Rectangle} from './Rectangle.js';
//import Square from './Square.js';

class Circle extends Figure {
    constructor(radius){
        super (radius);
        this._radius = radius;
    }
    get area() {
        return this._radius*this._radius*3.14;
    }
}

console.log(Circle.area());

const form = {
    changeSelect(e) {

    },
    init() {
        console.log('Form init!');
    },
    inputElementsWithLabel(label, id) {

    },
    submitForm(e) {

    }
};

form.init();