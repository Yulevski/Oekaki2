
import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
import pic from "./tree_green.png";

const canvasWidth = 400;
const canvasHeight = 800;

const App = () => {
  const [canvas, setCanvas] = useState(null);
  const [textbox1, setTextbox1] = useState("");
  const [textbox2, setTextbox2] = useState("");
  const [textbox3, setTextbox3] = useState("");

  const handleTextbox1Change = (event) => {
    setTextbox1(event.target.value);
  };
  
  const handleTextbox2Change = (event) => {
    setTextbox2(event.target.value);
  };
  
  const handleTextbox3Change = (event) => {
    setTextbox3(event.target.value);
  };

  useEffect(() => {
    const canvas = new fabric.Canvas("canvas", {
      height: canvasHeight,
      width: canvasWidth,
      backgroundColor: "pink",
    });

    canvas.on("mouse:down", (options) => {
      const clickedObject = options.target;
      if (clickedObject instanceof fabric.Rect) {
        console.log("Clicked rect name is", clickedObject.name);
        console.log("Textboxes for selected rectangle:", clickedObject.textboxes);
        canvas.setActiveObject(clickedObject);
        canvas.renderAll();
      }
      if (clickedObject instanceof fabric.Image) {
        console.log("Clicked pic name is", clickedObject.name);
      }
      if (clickedObject instanceof fabric.Textbox) {
        console.log("Clicked textbox text is", clickedObject.textbox1);
      }
    });

    setCanvas(canvas);
    return () => {
      canvas.dispose();
    };
  }, []);

  const addRect = (canvas) => {
    const RectWithText = fabric.util.createClass(fabric.Rect, {
      initialize(options) {
        this.callSuper('initialize', options);
        this.textboxes = [];
      },
      toObject() {
        return fabric.util.object.extend(this.callSuper('toObject'), {
          textboxes: this.textboxes
        });
      },
      _render(ctx) {
        this.callSuper('_render', ctx);
        ctx.font = '20px Arial';
        ctx.fillStyle = '#333';
        ctx.fillText(this.textboxes[0], -this.width/2 + 10, -this.height/2 + 25);
        ctx.fillText(this.textboxes[1], -this.width/2 + 10, -this.height/2 + 50);
        ctx.fillText(this.textboxes[2], -this.width/2 + 10, -this.height/2 + 75);
      }
    });

    const rect = new RectWithText({
      height: 280,
      width: 200,
      fill: "yellow",
      name: "rect-" + Date.now(),
      textboxes: [
        textbox1 ? textbox1 : "Text1",
        textbox2 ? textbox2 : "Text2",
        textbox3 ? textbox3 : "Text3"
      ]
    });
    console.log("name is", rect.name);
    canvas.add(rect);
    canvas.renderAll();
  };

  const addPic = (canvas) => {
    fabric.Image.fromURL(pic, function (img) {
      img.set({ name: "pic-" + Date.now() });
      canvas.add(img);
    });
  };


  return (
    <div style={{ display: "flex" }}>
      <div>
        <h1>Canvas 1</h1>
        <button onClick={() => addRect(canvas)}>Add Rectangle</button>
        <button onClick={() => addPic(canvas)}>Add Pic</button>
        <canvas id="canvas" width={canvasWidth} height={canvasHeight} />
      </div>
      <div className="textBox">
        <h1>Textbox Contents</h1>
        <input type="text" value={textbox1} onChange={handleTextbox1Change} />
        <input type="text" value={textbox2} onChange={handleTextbox2Change} />
        <input type="text" value={textbox3} onChange={handleTextbox3Change} />
      </div>
    </div>
  );
};

export default App;