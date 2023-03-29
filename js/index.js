"use strict";
import Figure from './Figure.js';
import Circle from './Circle.js';
import Rectangle from './Rectangle.js';
import Square from './Square.js';

const htmlCircle = `<p>radius (px)</p>
    <input type="text" placeholder="radius">`;
const htmlRectanlge = `<p>Width (px)</p>
    <input type="text" placeholder="Width">
    <p>Height (px)</p>
    <input type="text" placeholder="Height">`;
    const htmlSquare = `<p>Size (px)</p>
    <input type="text" placeholder="Size">`;

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
        const rectangle = new Rectangle('john', 80, 20);
        rectangle.htmlString;
        const circle = new Circle('Joe', 20, 20);
        circle.htmlString;
        const square = new Square('Mama', 40);
        square.htmlString;
    },
    submitForm(event) {
        event.preventDefault();
    }
};

form.init();