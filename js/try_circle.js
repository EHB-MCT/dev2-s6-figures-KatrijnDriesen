"use strict";

import {Figure} from './Figure.js';

export class Circle extends Figure {
    constructor (radius) {
        super ("Circle");
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
        return ´
        <div class="result">
            <div class="figure circle" style="width: DIAMETERpx; height: DIAMETERpx;"></div>
            <div class="infoBox">
                <h3>Circle</h3>
                <dl>
                <dt>Radius</dt>
                <dd>RADIUS px</dd>

                <dt>Diameter</dt>
                <dd>DIAMETER px</dd>

                <dt>Area</dt>
                <dd>AREA px</dd>

                <dt>Circumference</dt>
                <dd>CIRCUMFERENCE px</dd>
                </dl>
            </div>
            </div>´
    }
}