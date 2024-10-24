
let gridSize = 17; 
let quadsPerCycle = 8
let margin = 40; 
let gridSpacing;
let randomReduction = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  gridSpacing = (min(width, height) - 2 * margin) / gridSize;
  noFill();
  background(255); 
  stroke(0); 
  strokeWeight(0.5); 


  let numReductions = int((gridSize * gridSize) / 1.5);
  for (let i = 0; i < numReductions; i++) {
    randomReduction.push([int(random(gridSize)), int(random(gridSize))]);
  }

 
  let xOffset = (width - gridSize * gridSpacing) / 2;
  let yOffset = (height - gridSize * gridSpacing) / 2;

  
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let x = xOffset + i * gridSpacing;
      let y = yOffset + j * gridSpacing;
      let quadsToDraw = quadsPerCycle;
      for (let k = 0; k < randomReduction.length; k++) {
        if (randomReduction[k][0] == i && randomReduction[k][1] == j) {
          quadsToDraw = int(random(3, 9)); //num. random di quad. x ciclo tra 3 e 8
        }
      }
      drawQuadCycle(x, y, gridSpacing, quadsToDraw);
    }
  }
}

function drawQuadCycle(x, y, size, quadsToDraw) {
  for (let i = 0; i < quadsToDraw; i++) {
    let shrinkFactor = map(i, 0, quadsToDraw - 1, 1, 0.3); 
    let quadSize = size * shrinkFactor;

    beginShape()
    for (let v = 0; v < 4; v++) {
      let xOffset = random(-3, 3); 
      let yOffset = random(-3, 3);
      switch (v) {
        case 0:
          vertex(x - quadSize / 2 + xOffset, y - quadSize / 2 + yOffset);
          break;
        case 1:
          vertex(x + quadSize / 2 + xOffset, y - quadSize / 2 + yOffset);
          break;
        case 2:
          vertex(x + quadSize / 2 + xOffset, y + quadSize / 2 + yOffset);
          break;
        case 3:
          vertex(x - quadSize / 2 + xOffset, y + quadSize / 2 + yOffset);
          break;
      }
    }
    endShape(CLOSE);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}


