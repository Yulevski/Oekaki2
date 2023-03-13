// import React from 'react';
// import "./Main.css";
import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
import pic from "./tree_green.png";

const App = () => {
  const [canvas1, setCanvas1] = useState("");
  const [textbox1, setTextbox1] = useState("");
  // const [canvas2, setCanvas2] = useState("");
  const [texts, setTexts] = useState({
    descriptionColor: "",
    descriptionPosition: "",
  });
  const [clickedObject, setClickedObject] = useState(null);

  useEffect(() => {
    const canvas1 = new fabric.Canvas("canvas1", {
      height: 800,
      width: 400,
      backgroundColor: "pink",
    });

    canvas1.on("mouse:down", (options) => {
      const clickedObject = options.target;
      if (clickedObject instanceof fabric.Rect) {
        console.log(
          "Clicked rect name is",
          clickedObject.texts.descriptionColor
        );
        setClickedObject(clickedObject);
        setTexts({
          descriptionColor: clickedObject.texts.descriptionColor,
          descriptionPosition: clickedObject.texts.descriptionPosition,
        });
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
    const rect = new RectWithText({
      height: 280,
      width: 200,
      fill: "yellow",
      name: "rect-" + Date.now(),
    });
    console.log("name is", rect.name);
    canvi.add(rect);
    //canvi.renderAll();
  };

  const addPic = (canvi) => {
    fabric.Image.fromURL(pic, function (img) {
      img.set({ name: "pic-" + Date.now() });
      canvi.add(img);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTexts({ ...{ name: value } });
    clickedObject.setText(name, e.target.value);
  };

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
        <div hidden={clickedObject === null ? true : false}>
          <div>
            <h3>色・グラデーションの説明</h3>
            <textarea
              name="descriptionColor"
              value={texts.descriptionColor}
              placeholder="感情との関係はなんだろう。理由は？"
              onChange={handleChange}
            />
          </div>
          <div>
            <h3>配置・向きの説明</h3>
            <textarea
              name="descriptionPosition"
              value={texts.descriptionPosition}
              placeholder="感情との関係はなんだろう。理由は？"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

var RectWithText = fabric.util.createClass(fabric.Rect, {
  // コンストラクタでtextsプロパティを追加する
  initialize: function (options) {
    this.callSuper("initialize", options);
    this.set("texts", { descriptionColor: "", descriptionPosition: "" });
  },

  // toObjectメソッドでtextプロパティをJSONに追加する
  toObject: function () {
    return fabric.util.object.extend(this.callSuper("toObject"), {
      text: this.get("text"),
    });
  },

  // setTextメソッドでtextsプロパティを更新する
  setText: function (key, text) {
    var texts = this.get("texts");
    texts[key] = text;
    this.set("texts", texts);
    //this.canvas.renderAll();
  },
});

export default App;
