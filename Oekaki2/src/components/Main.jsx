
// import React from 'react';
// import "./Main.css";
import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
import pic from "./tree_green.png";


const App = () => {
  const [canvas1, setCanvas1] = useState("");
  const [textbox1, setTextbox1] = useState("");
  // const [canvas2, setCanvas2] = useState("");
  
  useEffect(() => {
    const canvas1 = new fabric.Canvas("canvas1", {
      height: 800,
      width: 400,
      backgroundColor: "pink",
    });

    canvas1.on("mouse:down", (options) => {
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

    setCanvas1(canvas1);
    return () => {
      canvas1.dispose();
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
    
    const textBox = new fabric.Textbox("", {
      name: rect.name,
      left: rect.left + 20,
      top: rect.top + 20,
      width: 200,
      fontSize: 18,
      fontFamily: "Arial",
      fill: "#111111",
      backgroundColor: "#CCCCCC",
    });
    canvi.add(textBox);
    canvi.renderAll();
  };

  const addPic = (canvi) => {
    fabric.Image.fromURL(pic, function(img) {
      img.set({ name: "pic-" + Date.now() });
      canvi.add(img);
    });
  };

  // const addText = (canvi) => {
  //   const activeObject = canvas1.getActiveObject();
  //   if (activeObject instanceof fabric.Rect || activeObject instanceof fabric.Image) {
  //     const textBox = new fabric.Textbox("", {
  //       name: activeObject.name,
  //       left: activeObject.left + 20,
  //       top: activeObject.top + 20,
  //       width: 200,
  //       fontSize: 18,
  //       fontFamily: "Arial",
  //       fill: "#111111",
  //       backgroundColor: "#CCCCCC",
  //     });
  //     canvi.add(textBox);
  //     canvi.setActiveObject(textBox);
  //     textBox.enterEditing();
  //     textBox.hiddenTextarea.focus();
  //   }
  // };
  
  return (
    <div style={{ display: "flex" }}>
      <div>
        <h1>Canvas 1</h1>
        <button onClick={() => addRect(canvas1)}>Add Rectangle</button>
        <button onClick={() => addPic(canvas1)}>Add Pic</button>
        {/* <button onClick={() => console.log(canvas1.getActiveObject())}>
          Test
        </button> */}
        <canvas id="canvas1" />
      </div>

      <div className="textBox">
        <h1>Textbox Contents</h1>
        <input type="text" />
      </div>
    </div>
  );
};

export default App;