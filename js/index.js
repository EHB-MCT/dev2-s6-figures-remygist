"use strict";
import Figure from './Figure.js';
import Circle from './Circle.js';
import Rectangle from './Rectangle.js';
import Square from './Square.js';

const form = {
    changeSelect(e) {

    },
    init() {
        const rectangle = new Rectangle('john', 20,20);
        rectangle.htmlString;
        const circle = new Circle('Joe',20,20);
        circle.htmlString;
        const square = new Square('Mama',40);
        square.htmlString;
    },
    inputElementsWithLabel(label, id) {

    },
    submitForm(e) {

    }
};

form.init();