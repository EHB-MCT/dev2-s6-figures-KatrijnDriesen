"use strict";

import {Figure} from './try_figure.js';

export class Circle extends Figure {
    constructor (radius) {
        super ("circle");
        this._radius = radius;
    }
    get diameter (){
        return this._radius * 2;
    }
    get area () {
        return this._radius * this._radius * Math.PI;
    }
    get circumference () {
        return 2 * this._radius * Math.PI;
    }
    get htmlString () {
        return `
        <div class="result">
            <div class="figure circle" style="width: ${this.diameter}px; height: ${this.diameter}px;"></div>
            <div class="infoBox">
                <h3>${this._name}</h3>
                <dl>
                <dt>Radius</dt>
                <dd>${this._radius} px</dd>

                <dt>Diameter</dt>
                <dd>${this.diameter} px</dd>

                <dt>Area</dt>
                <dd>${this.area} px</dd>

                <dt>Circumference</dt>
                <dd>${this.circumference} px</dd>
                </dl>
            </div>
            </div>`;
    }
}