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
        event.preventDefault();
        const inputValue = document.getElementById("select").value;
        let figure;
            if (inputValue == 'circle'){
            const radius = document.getElementById('radius').value;
            figure = new Circle(radius);
            } else if (inputValue == 'square') {
                const size = document.getElementById('size').value;
                figure = new Square(size);  
            } else if (inputValue == 'rectangle') {
                const width = document.getElementById('width').value;
                const height = document.getElementById('height').value;
                figure = new Square(width,height);  
            }
        const results = document.getElementById('results');
        results.innerHTML = figure.htmlString;
    }
};

form.init();