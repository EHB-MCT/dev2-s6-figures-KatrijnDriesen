"use strict";

import {Figure} from './try_figure.js';

export class Rectangle extends Figure{
  constructor (width, height) {
    super ("rectangle");
    this._width = width;
    this._height = height;
  }
  get area () {
      return this._width * this._height;
  }
  get circumreference () {
    return (this._width * this._height)*2;
  }
  get htmlString () {
    return `
    <div class="result">
    <div class="figure rectangle" style="width: ${this._width}px; height: ${this._height}px;"></div>
      <div class="infoBox">
        <h3>${this._name}</h3>

        <dl>
        <dt>Height</dt>
        <dd>${this._height} px</dd>
  
        <dt>Width</dt>
        <dd>${this._width} px</dd>
  
        <dt>Area</dt>
        <dd>${this.area} px</dd>
  
        <dt>Circumference</dt>
        <dd>${this.circumreference} px</dd>
        </dl>
      </div>
    </div>`;
  }
}