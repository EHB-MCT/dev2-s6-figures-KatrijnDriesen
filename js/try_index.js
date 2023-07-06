"use strict";

import { Figure } from './try_figure.js';
import { Circle } from './try_circle.js';
import { Rectangle } from './try_rectangle.js';
import { Square } from './try_square.js';

const form = {
    changeSelect(e) {
        console.log("log changeSelect functie");
        console.log(this.value);
        const inputFields = document.getElementById("otherInputs");
        inputFields.innerHTML = "";
        if (this.value == "Circle") {
            inputFields.innerHTML = this.inputElementsWithLabel("radius (px)","radius");
        } else if (this.value == "Square") {
            inputFields.innerHTML = this.inputElementsWithLabel("size (px)","size");
        } else if (this.value == "Rectangle") {
            inputFields.innerHTML = this.inputElementsWithLabel("width (px)","width");
            inputFields.innerHTML += this.inputElementsWithLabel("height (px)","height");
        }
    },
    init() {
        //console.log('Form init!');
        document.getElementById("select").addEventListener('change', this.changeSelect);
        document.getElementById("form").addEventListener('submit',(event) => this.submitForm(event));
    },
    inputElementsWithLabel(label, id) {
       /*  <label>
        YOUR LABEL NAME
        <input id="YOUR INPUT ID" type="number">
        </label> */
    },
    submitForm(event) {
        console.log("log submitForm functie");
        event.preventDefault();
        const inputValue = document.getElementById("otherInputs").value;
        console.log(inputValue);
    }
};

form.init();