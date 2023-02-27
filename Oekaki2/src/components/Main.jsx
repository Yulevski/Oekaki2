// import React from 'react';
// import "./Main.css";
// import pic from "./tree_green.png"; 
import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
const App = () => {
  const [canvas, setCanvas] = useState("");
  useEffect(() => {
    const canvas = new fabric.Canvas("canvas", {
      height: 800,
      width: 800,
      backgroundColor: "pink",
    });

    canvas.on("mouse:down", (options) => {
      const clickedObject = options.target;
      if (clickedObject instanceof fabric.Rect) {
        console.log("Clicked rect name is", clickedObject.name);
      }
    });

    setCanvas(canvas);
    return () => {
      canvas.dispose();
    };
  }, []);

  const addRect = (canvi) => {
    const rect = new fabric.Rect({
      height: 280,
      width: 200,
      fill: "yellow",
      name: "rect-"+ Date.now()
    });
    console.log("name is", rect.name);
    canvi.add(rect);
    canvi.renderAll();
  };
  return (
    <div>
      <h1>Fabric.js </h1>
      <button onClick={() => addRect(canvas)}>Rectangle</button>
      <button onClick={() => console.log(canvas.getActiveObject())}>
        Test
      </button>
      <canvas id="canvas" />
    </div>
  );
};
export default App;