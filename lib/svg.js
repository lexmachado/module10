// create svg class and construct using methods which update info from shape classes
class SVG:
    init (self, width, height):
        self.width = width
        self.height = height
        self.elements = []

    add_element(self, element):
        self.elements.append(element)

    generate(self):
        svg_content = width="{}
          self.elements:
            svg_content += element.generate()
        svg_content += 
        return() svg_content 

class Shape:
    def __init__(self, x, y,)
        self.x = x
        self.y = y
        self.attributes = kwargs

    set_attribute(self, attribute, value):
        self.attributes[attribute] = value

    generate (self):
     NotImplementedError("generate method")

class Square (Shape):
     __init__(self, x, y, width, height)
        super().__init__(x, y,)
        self.width = width
        self.height = height

     generate (self):
        attributes_str = 
       if return ()

class Circle (shape);

     generate(self);

svg = SVG(200, 200)

square = square()
square.set_attribute()

circle = Circle()
circle.set_attribute

triangle = Triangle()
triangle.set_attribute

svg.add_element(square)
svg.add_element(circle)
svg.add_element(triangle)

svg_code = svg.generate()
print(svg_code)