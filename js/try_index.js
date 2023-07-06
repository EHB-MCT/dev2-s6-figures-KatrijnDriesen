"use strict";

import { Figure } from './try_figure.js';
import { Circle } from './try_circle.js';
import { Rectangle } from './try_rectangle.js';
import { Square } from './try_square.js';

const form = {
    changeSelect(e) {
        console.log("log changeSelect functie");
        console.log(this.value);
        
        const inputFields = document.getElementById('otherInputs');
        let htmlString = "";
        
        if (this.value == "circle") {
            htmlString += form.inputElementsWithLabel("radius (px)","radius");
        } else if (this.value == "square") {
            htmlString += form.inputElementsWithLabel("size (px)","size");
        } else if (this.value == "rectangle") {
            htmlString += form.inputElementsWithLabel("width (px)","width");
            htmlString += form.inputElementsWithLabel("height (px)","height");
        }
        inputFields.innerHTML = htmlString;
    },
    init() {
        //console.log('Form init!');
        document.getElementById('select').addEventListener('change', this.changeSelect);
        document.getElementById("form").addEventListener('submit',(event) => this.submitForm(event));
    },
    inputElementsWithLabel(label, id) {
        return `
        <label>
        ${label}
        <input id="${id}" type="number">
        </label>`;
    },
    submitForm(event) {
        console.log("log submitForm functie");
        event.preventDefault();
        const inputValue = document.getElementById("otherInputs").value;
        console.log(inputValue);
    }
};

form.init();