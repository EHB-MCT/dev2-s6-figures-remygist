"use strict";
import Figure from './Figure.js';
import Circle from './Circle.js';
import Rectangle from './Rectangle.js';
import Square from './Square.js';

const htmlCircle = `<p>radius (px)</p>
    <input type="text" placeholder="radius" id="radius">`;
const htmlRectanlge = `<p>Width (px)</p>
    <input type="text" placeholder="Width" id="width">
    <p>Height (px)</p>
    <input type="text" placeholder="Height" id="height">`;
    const htmlSquare = `<p>Size (px)</p>
    <input type="text" placeholder="Size" id="size">`;

const form = {
    changeSelect(e) {
        document.getElementById("otherInputs").innerHTML = "";
        if (document.getElementById('select').value == "circle") {
            document.getElementById("otherInputs").innerHTML = htmlCircle;
        } else if (document.getElementById('select').value == "rectangle") {
            document.getElementById("otherInputs").innerHTML = htmlRectanlge;
        }else if (document.getElementById('select').value == "square") {
            document.getElementById("otherInputs").innerHTML = htmlSquare;
        }
    },
    init() {
        document.getElementById('form').addEventListener('submit', this.submitForm);
        document.getElementById('select').addEventListener('change', this.changeSelect);
    },
    inputElementsWithLabel(label, id) {
        
        
        
    },
    submitForm(event) {
        event.preventDefault();
        if (document.getElementById('select').value == "circle") {
            const circle = new Circle('Circle', document.getElementById("radius").value);
            circle.htmlString;
        } else if (document.getElementById('select').value == "rectangle") {
            const rectangle = new Rectangle('Rectangle', document.getElementById("width").value, document.getElementById("height").value);
            rectangle.htmlString;
        }else if (document.getElementById('select').value == "square") {
            const square = new Square('Square', document.getElementById("size").value);
            square.htmlString;
        }
    }
};

form.init();