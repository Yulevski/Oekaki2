// import React from 'react';
import React, { useState, useEffect } from 'react';
import { fabric } from "fabric";
import pic from "./tree_green.png";
import './Main.css';

const App = () => {
  const [canvas1, setCanvas1] = useState("");
  // const [canvas2, setCanvas2] = useState("");
  const [texts, setTexts] = useState({
    //図形に対する感情を書くテキストエリアの集合を連想配列の状態として管理するために設定
    descriptionColor: "",
    descriptionPosition: "",
  });
  const [clickedObject, setClickedObject] = useState(null); //アクティブなオブジェクトを状態として管理するために設定
  
  useEffect(() => {
   
    const canvas1 = new fabric.Canvas("canvas1", {
      height: window.innerHeight,
      width: 0.6*window.innerWidth,
      backgroundColor: "pink",
    }); 
    
    canvas1.on("mouse:down", (options) => {
      const clickedObject = options.target;
      if (clickedObject instanceof fabric.Rect) {
        //RectWithTextがクリックされたら、
        console.log(
          "Clicked rect name is",
          clickedObject.texts.descriptionColor
        );
        setClickedObject(clickedObject); //クリックされたオブジェクトを状態に設定
        setTexts({
          //クリックされたオブジェクトのテキストを、テキストエリアに描画するために設定
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

    canvas1.on("mouse:down", (options) => {
      const clickedObject = options.target;
      if (clickedObject instanceof fabric.Image) {
        //RectWithTextがクリックされたら、
        console.log(
          "Clicked Image name is",
          clickedObject.texts.descriptionColor
        );
        setClickedObject(clickedObject); //クリックされたオブジェクトを状態に設定
        setTexts({
          //クリックされたオブジェクトのテキストを、テキストエリアに描画するために設定
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
      fill: "red",
      name: "rect-" + Date.now(),
    });
    console.log("name is", rect.name);
    canvi.add(rect);
    //canvi.renderAll();
  };

  const addPic = (canvi) => {
    fabric.Image.fromURL(pic, function (img) {
      const imgWithText = new ImageWithText(img.toObject());
      imgWithText.set({ name: "pic-" + Date.now() });
      // const imgWithText = new ImageWithText(img.clone());
      canvi.add(imgWithText);
      // canvi.add(img);
      console.log("img name is", imgWithText.name);

    });
  };

  const handleChange = (e) => {
    //テキストエリア内が変化した時に発火する関数
    const { name, value } = e.target; //文法がわからなければdestructuringで調べる。テキストエリアのhtml要素のnameとvalueをそれぞれ同名の変数に格納
    setTexts({ ...{ name: value } }); //変化したテキストエリアの状態を更新
    // setTexts(prevState => ({ ...prevState, [name]: value }));
    // clickedObject.setText(name, e.target.value); //クリックされた（アクティブな）RectWithTextのテキストプロパティを更新
    clickedObject.setText("descriptionColor", e.target.value);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap",flexGrow: 1 }}>
      
          <div className="buttons">
              {/* <h1>buttons</h1> */}
              <button onMouseDown={() => addRect(canvas1)}><img src="./red_rectangle.png" style={{width:"100px"}}/></button>
              <button onMouseDown={() => addPic(canvas1)}><img src="./tree_green.png" style={{width:"100px"}}/></button>
              {/* <button onClick={() => console.log(canvas1.getActiveObject())}>
                Test
              </button> */}
          </div>
      
          <div className="canvas1">
            {/* <h1>Canvas1</h1> */}
            <canvas id="canvas1" />
          </div>
        

      <div className="textBox">
        {/* <h1>Textbox Contents</h1> */}
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
          <div>
            <h3>比喩の説明</h3>
            <textarea
              name="descriptionPosition"
              value={texts.descriptionPosition}
              placeholder="感情を何かで比喩できる？"
              onChange={handleChange}
            />
          </div>
          <div>
            <h3>移動の説明</h3>
            <textarea
              name="descriptionPosition"
              value={texts.descriptionPosition}
              placeholder="移動する何かに意味が込められている？"
              onChange={handleChange}
            />
          </div>
          <div>
            <h3>対比するもの</h3>
            <textarea
              name="descriptionPosition"
              value={texts.descriptionPosition}
              placeholder="何かと対比している？"
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
  },
}


);

var ImageWithText = fabric.util.createClass(fabric.Image, {
  // コンストラクタでtextsプロパティを追加する
  initialize: function (options) {
    this.callSuper("initialize", options);
    this.set("texts", { descriptionColor: "", descriptionPosition: "" });
  },

  // toObjectメソッドでtextプロパティをJSONに追加する
  toObject: function () {
    return fabric.util.object.extend(this.callSuper("toObject"), {
      texts: this.get("texts"),
    });
  },

  // setTextメソッドでtextsプロパティを更新する
  setText: function (key, text) {
    var texts = this.get("texts");
    texts[key] = text;
    this.set("texts", texts);
  },
});


export default App;