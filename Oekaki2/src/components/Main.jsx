// import React from 'react';
// import "./Main.css";
import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
import pic from "./tree_green.png";

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
      if (clickedObject instanceof fabric.Image) {
        console.log("Clicked rect name is", clickedObject.name);
      }
      if (clickedObject instanceof fabric.Textbox) {
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
      name: "rect-" + Date.now(),
    });
    console.log("name is", rect.name);
    canvi.add(rect);
    canvi.renderAll();
  };

  const addPic = (canvi) => {
    fabric.Image.fromURL(pic, function(img) {
      img.set({ name: "pic-" + Date.now() });
      canvi.add(img);
    });
  };

  const addText = (canvi) => {
    const activeObject = canvi.getActiveObject();
    if (activeObject instanceof fabric.Rect || activeObject instanceof fabric.Image) {
      const textBox = new fabric.Textbox("", {
        name: activeObject.name,
        left: activeObject.left + 20,
        top: activeObject.top + 20,
        width: 200,
        fontSize: 18,
        fontFamily: "Arial",
        fill: "#000000",
      });
      canvi.add(textBox);
      canvi.setActiveObject(textBox);
      textBox.enterEditing();
      textBox.hiddenTextarea.focus();
    }
  };
  
  
  return (
    <div>
      <h1>Fabric.js</h1>
      <button onClick={() => addRect(canvas)}>Rectangle</button>
      <button onClick={() => addPic(canvas)}>Add Pic</button>
      <button onClick={() => addText(canvas)}>Add Text</button>
      <button onClick={() => console.log(canvas.getActiveObject())}>
        Test
      </button>
      <canvas id="canvas" />
    </div>
  );
};

export default App;