'use strict';

class Shape {
    constructor(id, x, y) {
        this.id = id;
        this.x = x;
        this.y = y;
    };

    toString() {
        console.log(`Shape id (${this.id})`);
        return `Shape id (${this.id})`;
    };

    setLocation() {
        const newX = 5;
        const newY = 5;
        this.x = +this.x + +newX;
        this.y = +this.y + +newY;
    };

    getLocation() {
        console.log(`x:${this.x}, y:${this.y}`);
        return {
            x: this.x,
            y: this.y,
        };
    };
};

class Circle extends Shape {
    constructor(id, x, y, radius) {
        super(id, x, y);
        this.radius = radius;
    };
    toString() {
        console.log(`Shape( ${this.id} )`);
        return `Shape(${this.id})`;
    };
    setDiameter() {
        const newRadiuse = 10;
        this.radius = +this.radius + +newRadiuse;
    };
    getDiametr() {
        console.log(`Diametr( ${this.radius*2})`);
        return this.radius * 2;
    };
    drow() {
        let r = prompt('Введите радиус', 10);
        x = canvas.width / 2;
        y = canvas.height / 2;
        context.beginPath();
        context.arc(x, y, r, 0, Math.PI * 2, false);
        context.fillStyle = '#0f0';
        context.fill();
        context.closePath();
        context.strokeStyle = '#0f0';
        context.stroke();
    };
    move() {

    }
};

class Triangle extends Shape {
    constructor(id, x, y, a, b, c) {
        super(id, x, y);
        this.a = a;
        this.b = b;
        this.c = c;
    };
    toString() {
        console.log(`Triangle( ${this.id})`);
        return `Triangle(${this.id})`;
    };
    getHypotenuse() {
        if (this.a * this.a === this.b * this.b + this.c * this.c) {
            console.log(`hipotenuse ( ${this.a})`);
            return this.a;
        } else if (this.b * this.b === this.a * this.a + this.c * this.c) {
            console.log(`hipotenuse ( ${this.b})`);
            return this.b;
        } else if (this.c * this.c === this.a * this.a + this.b * this.b) {
            console.log(`hipotenuse ( ${this.c})`);
            return this.b;
        } else {
            console.log("triangle is not try");
        };
    };
    isIsosceles() {
        if (this.a === this.b || this.a === this.c || this.b === this.c) {
            console.log(true);
            return true;
        } else {
            console.log(false);
            return false;
        };
    };
    drow() {
        /*context.beginPath();
        context.moveTo(triangle.getLocation().x, triangle.getLocation().y);
        context.lineTo(100, 150);
        context.lineTo(150, 30);
        context.fillStyle = "blue";
        context.fill();
        context.closePath();
        context.strokeStyle = "blue";
        context.stroke();*/

    };

};

//const circle = new Circle(2, 4, 4, 10);
//const triangle = new Triangle(2, 4, 4, 3, 4, 5);

let canvas = document.getElementById('figure');
let context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var newCircle = document.querySelector('newCircle');
var newTriangle = document.querySelector('newTriangle');

function addC() {
    const circle = new Circle(2, 4, 4, 10);
    circle.drow();
}

function addT() {
    const triangle = new Triangle(2, 4, 4, 3, 4, 5);
    triangle.drow();
}
//console.log(newCircle);
//newCircle.addEventListener('click', function() {
//document.getElementById('newCircle').onclick = function() {
/*function addC() {
    let r = prompt('Введите радиус', 10);
    x = canvas.width / 2;
    y = canvas.height / 2;
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2, false);
    context.fillStyle = '#0f0';
    context.fill();
    context.closePath();
    context.strokeStyle = '#0f0';
    context.stroke();
};*/

/*function addT() {
    context.beginPath();
    context.moveTo(triangle.getLocation().x, triangle.getLocation().y);
    context.lineTo(100, 150);
    context.lineTo(150, 30);
    context.fillStyle = "blue";
    context.fill();
    context.closePath();
    context.strokeStyle = "blue";
    context.stroke();
};*/