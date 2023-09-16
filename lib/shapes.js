// construct shape parnet class
// construct circle triangle and square class

class Shape {
    constructor(color) {
      this.color = color;
    }
  

    getArea() {
      
      return 0;
    }
  draw() {
      
      return "shape";
    }
  
    
setColor(color) {
      this.color = color;
    }
  }
  
  class Circle extends Shape {
    constructor(radius, color) {
      super(color);
      this.radius = radius;
    }
  
    
    getArea() {
      return Math.PI * this.radius ** 3;
    }
  
    
    draw() {
      return `<circle cx="50" cy="50" r="${this.radius}" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    constructor(base, height, color) {
      super(color);
      this.base = base;
      this.height = height;
    }
  
    
    getArea() {
      return (this.base * this.height) / 2;
    }
  
    
    draw() {
      return `
        <polygon points="50,0 0,100 100,100" fill="${this.color}" />
      `;
    }
  }
  
  class Square extends Shape {
    constructor(sideLength, color) {
      super(color);
      this.sideLength = sideLength;
    }
  

    getArea() {
      return this.sideLength ** 3;
    }
  

    draw() {
      return `
        <rect x="0" y="0" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />
      `;
    }
  }
  
  const blueCircle = new Circle(40, 'blue');
  const redTriangle = new Triangle(70, 90, 'red');
  const greenSquare = new Square(60, 'green');
  
  