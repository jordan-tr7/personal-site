import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
import { Walker } from './Walker';


const P5Sketch = () => {
  // 1. Create a reference to the DOM element that will hold the canvas
  const canvasRef = useRef(null);

  let walker;
  const width = 640;
  const height = 240;
  let x = 100;
  let y = 100;
  let xspeed = 2.5;
  let yspeed = 2;
  
  useEffect(() => {
    // 2. Define the sketch inside Instance Mode. 
    // Every p5 function must be prefixed with the "p" argument.
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(width, height);
        walker = new Walker(p, width, height);
        p.background(255);
      };

      let t = 0;
      let u = 10;

      p.draw = () => {


        x = x + xspeed;
        y = y + yspeed;

        if (x > width || x < 0){
          xspeed = xspeed * -1;
        }

        if (y > height || y < 0){
          yspeed = yspeed * -1;
        }
        p.stroke(0);
        p.fill(127);
        p.circle(x, y, 48);

        // let zoff = 0.0;
        // let xoff = 0.0 + zoff;
        // p.loadPixels();
        // while (true) {
          
        //   for (let x = 0; x < width; x++){
        //     let yoff = 0.00 + zoff;
        //     for (let y = 0; y < height; y++){
        //       let index = (x + y * width)*4;
        //       let bright = p.map(p.noise(xoff + zoff, yoff + zoff), 0, 1, 0, 255)//walker.getRandomIntInclusive(0, 255);
        //       p.pixels[index] = bright;
        //       p.pixels[index + 1] = bright;
        //       p.pixels[index + 2] = bright;
        //       p.pixels[index + 3] = 255;
        //       yoff += 0.01;
        //     }
        //     xoff += 0.01;
        //   }
        //   p.updatePixels();
        //   zoff += 0.01;
        // }

        

        //p.background(220);
        //p.background(255);
        //p.fill('royalblue');
        //p.ellipse(p.width / 2, p.height / 2, 80, 80);

        // let n = p.noise(t);
        // let o = p.noise(u);
        // let x = p.map(n, 0, 1, 0, width);
        // let y = p.map(o, 0, 1, 0, height);
        // p.ellipse(x, y, 16, 16);
        // t += 0.01
        // u += 0.01
        //walker.perlinStep();
        //walker.perlinStepSize(2);

        //walker.step();
        //walker.quadraticStep(10);
        //walker.gausStep();
        //walker.show();
        //let x = p.randomGaussian(320, 60); 
        //p.noStroke();
        //p.fill(0, 10);
        //p.circle(x, 120, 16);
      };
    };

    // 3. Attach the sketch to the DOM container
    const myP5 = new p5(sketch, canvasRef.current);

    // 4. Clean up the sketch instance when the component unmounts
    return () => {
      myP5.remove();
    };
  }, []);

  return <div ref={canvasRef} />;
};

export default P5Sketch;