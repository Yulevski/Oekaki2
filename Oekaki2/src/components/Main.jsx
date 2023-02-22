// import React from 'react';
// import "./Main.css";
// import pic from "./tree_green.png"; 


import React, { useState, useRef, useEffect } from 'react';
import { fabric } from 'fabric'; // import fabric.js library
import 'fabric-webpack';

const Canvas = ({ canvasRef, width, height }) => {
  // This component is used to render the canvas element
  useEffect(() => {
    // When this component mounts, create a new fabric canvas
    new fabric.Canvas(canvasRef.current, {
      width,
      height,
    });
  }, []);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

const FabricCanvas = () => {
  const [canvas, setCanvas] = useState(null); // State variable to hold the fabric canvas object
  const [activeObject, setActiveObject] = useState(null); // State variable to hold the currently active fabric object
  const [rectangles, setRectangles] = useState([]); // State variable to hold an array of fabric rect objects
  const [textboxes, setTextboxes] = useState([]); // State variable to hold an array of textboxes

  const canvasRef = useRef(null); // Reference to the canvas element
  const inputRef = useRef(null); // Reference to the input element

  useEffect(() => {
    // When this component mounts, create a new fabric canvas
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 800,
      height: 600,
    });

    setCanvas(canvas); // Set the state variable for the fabric canvas object

    // Add an event listener to the canvas to create a new rectangle when the Add Rectangle button is clicked
    canvas.on('add:rect', () => {
      const rect = new fabric.Rect({
        width: 100,
        height: 100,
        fill: '#00000',
        left: 100,
        top: 100,
      });

      // Add the new rectangle to the rectangles array and to the canvas
      setRectangles([...rectangles, rect]);
      canvas.add(rect);
    });

    // Add an event listener to the canvas to set the active object when an object is selected
    canvas.on('object:selected', ({ target }) => {
      setActiveObject(target);

      if (target.isType('rect')) {
        const index = rectangles.findIndex((rect) => rect === target);

        if (index !== -1) {
          setTextboxes((prev) =>
            prev.map((textbox, i) => ({
              ...textbox,
              active: i === index,
            }))
          );
        }
      }
    });

    // Add an event listener to the canvas to clear the active object and active textboxes when the selection is cleared
    canvas.on('selection:cleared', () => {
      setActiveObject(null);
      setTextboxes((prev) =>
        prev.map((textbox) => ({ ...textbox, active: false }))
      );
    });

    // Add an event listener to the canvas to update the positions of the textboxes when a rectangle is modified
    canvas.on('object:modified', () => {
      setTextboxes((prev) =>
        prev.map((textbox, i) => {
          const rect = rectangles[i];

          if (rect) {
            const { left, top, angle } = rect;

            return {
              ...textbox,
              left,
              top,
              angle,
            };
          }

          return textbox;
        })
      );
    });
  }, [rectangles]);

  // Function to add a new rectangle to the canvas and the rectangles array
  const handleAddRectangle = () => {
    const rect = new fabric.Rect({
      width: 100,
      height: 100,
      fill: '#00000',
      left: 100,
      top: 100,
    });

    setRectangles([...rectangles, rect]);
    canvas.add(rect);
  };

  // Function to add a new textbox to the textboxes array
  const handleAddTextbox = () => {
    const textbox = {
      text: '',
      left: 100,
      top: 100,
      angle: 0,
      active: false,
    };

    setTextboxes([...textboxes, textbox]);
  };

  // Function to handle changes to the text of a textbox
  const handleTextChange = (event, index) => {
    const { value } = event.target;

    setTextboxes((prev) =>
      prev.map((textbox, i) => {
        if (i === index) {
          return {
            ...textbox,
            text: value,
          };
        }

        return textbox;
      })
    );
  };

  return (
    <div>
      <div>
        <button onClick={handleAddRectangle}>Add Rectangle</button>
        <button onClick={handleAddTextbox}>Add Textbox</button>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '50%', marginRight: '10px' }}>
          {rectangles.map((rect, i) => (
            <div key={i} style={{ marginBottom: '10px' }}>
              <canvas id={`rect-${i}`} width="100" height="100" />
            </div>
          ))}
        </div>
        <div style={{ width: '50%' }}>
          {textboxes.map((textbox, i) => (
            <div
              key={i}
              style={{
                backgroundColor: textbox.active ? '#ddd' : 'transparent',
                padding: '10px',
                marginBottom: '10px',
              }}
            >
              <textarea
                value={textbox.text}
                onChange={(event) => handleTextChange(event, i)}
                style={{ width: '100%', height: '100px' }}
              />
              <div style={{ marginTop: '10px' }}>
                <button
                  onClick={() => {
                    const rect = rectangles[i];
                    canvas.remove(rect);
                    setRectangles((prev) =>
                      prev.filter((rect, index) => index !== i)
                    );
                    setTextboxes((prev) =>
                      prev.filter((textbox, index) => index !== i)
                    );
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FabricCanvas;