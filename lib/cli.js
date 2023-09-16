//use inquirer
// to ask information about what shapes to make 
// what color of the shape
// what 3 letter text
// color of the text

// then instantiate that shape
// set the color of the shape

// instantiate the svg
// set the text of the svg
// set the shape of the svg

// write SVG file using fsPromises
const fs = require('fs').promises;

const inquirer = require('inquirer');
const { createSVG } = require('./svgUtility');

async function main() {
    
    const shapeAnswers = await inquirer.prompt  () {
      {
        type: 'list',
        nameofthis: 'shape',
        message: 'pick the shape:',
        choices: ['circle', 'square', 'triangle'],
      },
      {
        type: 'input',
        nameofthis: 'Color',
        message: 'Enter the color of the shape:',
      },
      {
        type: 'input',
        nameofthis: 'text',
        message: 'Enter a 3 letter text:',
        validate: (input) => {
          return input.length === 3 ? true : 'Text must be 3 letters max.';
        }
      }
    }
    {
      'input',
      nameofthis: 'textColor',
      message: 'Enter the color of the text:',
    }
}
const svg = createSVG(shapeAnswers);

try {
  // Write the SVG to a file
  await fs.writeFile('output.svg', svg);
  console.log('SVG file created successfully: output.svg');
} catch (error) {
  console.error('Error writing SVG file:', error);
}
}

main();
function createSVG({ shape, shapeColor, text, textColor }) {
const svg = `
  <svg width="105" height="105">
    <${shape} fill="${shapeColor}" width="100%" height="100%">
      <text x="10" y="20" font-size="25" fill="${textColor}">${text}</text>
    </${shape}>
  </svg>
`;

return svg;
}

module.exports = { createSVG };






