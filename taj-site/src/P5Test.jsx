import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const P5Sketch = () => {
  // 1. Create a reference to the DOM element that will hold the canvas
  const canvasRef = useRef(null);

  useEffect(() => {
    // 2. Define the sketch inside Instance Mode. 
    // Every p5 function must be prefixed with the "p" argument.
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(400, 400);
      };

      p.draw = () => {
        p.background(220);
        p.fill('royalblue');
        p.ellipse(p.width / 2, p.height / 2, 80, 80);
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