'use strict';

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor (height, width, text, bgColor) {
        super(height, width); // всегда первой строчкой
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`)
    }
}

const rect = new Rectangle(4, 5);
console.log(rect); // Rectangle { height: 4, width: 5 }
console.log(rect.calcArea()); // 20

const div = new ColoredRectangleWithText(25, 10, 'Hello', 'red')
div.showMyProps(); // Текст: Hello, цвет: red
console.log(div.calcArea()); // 250

// прицнипы ООП
// 1) Абстракия - когда отделяем концепцию от ее экземлпяра
// 2) Наследование - иеарархия на основе наследования классов

