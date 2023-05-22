// import React from 'react';
import React, { useState, useEffect } from 'react';
import { fabric } from "fabric";
import pic from "./tree_green.png";
import pic1 from "./ike.png";
import './Main.css';

const App = () => {
  const [canvas1, setCanvas1] = useState("");
  // const [canvas2, setCanvas2] = useState("");
  const [texts, setTexts] = useState({
    //図形に対する感情を書くテキストエリアの集合を連想配列の状態として管理するために設定
    descriptionColor: "",
    descriptionPosition: "",
    descriptionMetaphor:"",
    descriptionMove:"",
    descriptionContrast:"",

  });
  //図形カウント用
  const [rectCount, setRectCount] = useState(0);
  const [imageCount, setimageCount] = useState(0);
  const [imageCount1, setimageCount1] = useState(0);
  //テーマとオノマトぺ
  const [theme, settheme] = useState({descriptionTheme:"",descriptionOnomatope:"",});
  const [onomatope, setonomatope] = useState({descriptionOnomatope:"",});


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
        console.log("options is ",options);

        setClickedObject(clickedObject); //クリックされたオブジェクトを状態に設定
        setTexts({
          //クリックされたオブジェクトのテキストを、テキストエリアに描画するために設定
          descriptionColor: clickedObject.texts.descriptionColor,
          descriptionPosition: clickedObject.texts.descriptionPosition,
          descriptionMetaphor: clickedObject.texts.descriptionMetaphor,
          descriptionMove: clickedObject.texts.descriptionMove,
          descriptionContrast: clickedObject.texts.descriptionContrast,
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
      if (clickedObject instanceof fabric.Object) {
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
          descriptionMetaphor: clickedObject.texts.descriptionMetaphor,
          descriptionMove: clickedObject.texts.descriptionMove,
          descriptionContrast: clickedObject.texts.descriptionContrast,
        });
      }
      if (clickedObject instanceof fabric.Image) {
        console.log("Clicked image name is", clickedObject.name);
      }
      if (clickedObject instanceof fabric.Textbox) {
        console.log("Clicked  name is", clickedObject.name);
      }
    });

    setCanvas1(canvas1);
    return () => {
      canvas1.dispose();
    };
  }, []);

 

  const addRect = (canvi) => {
    setRectCount((prevCount) =>{
    // console.log("prevCount is", prevCount);
    return prevCount + 1;});
    const rect = new RectWithText({
      height: 280,
      width: 200,
      fill: "red",
      name: "rect-" + Date.now(),
      name2:"四角",
      prevCount: rectCount + 1,
    });

    console.log("name is", rect.name);
    console.log("prevCount is", rect.prevCount);
    canvi.add(rect);
    //canvi.renderAll();
  };

  const addPic = (canvi) => {
    setimageCount((prevCount) =>{
      // console.log("prevCount is", prevCount);
      return prevCount + 1;});
    fabric.Image.fromURL(pic, function (img) {
      const imgWithText = new ImageWithText(img);
      imgWithText.set({ name: "tree-" + Date.now(),
      name2:"木",
      prevCount: imageCount + 1,
    });
      canvi.add(imgWithText);
      // canvi.add(img);
      console.log("img name is", imgWithText.name); 
    });
  };

  const addPic1 = (canvi) => {
    setimageCount1((prevCount) =>{
      // console.log("prevCount is", prevCount);
      return prevCount + 1;});
    fabric.Image.fromURL(pic1, function (img) {
      const imgWithText = new ImageWithText(img);
      imgWithText.set({ name: "ike-" + Date.now(),
      name2:"池",
      prevCount: imageCount1 + 1, });
      canvi.add(imgWithText);
      // canvi.add(img);
      console.log("img name is", imgWithText.name); 
    });
  };

  const Delete = (canvi) => {
    const active = canvi.getActiveObject();
    if (active) {
      canvi.remove(active);
      // Initialize descriptionColor property
      // active.setText("descriptionColor", "");
      // update
      setTexts((prevState) => ({
        ...prevState,
        descriptionColor: "",
        descriptionPosition: "",
        descriptionMetaphor:"",
        descriptionMove:"",
        descriptionContrast:"",
      }));
      console.log("remove");
      if (active.type === "activeSelection") {
        active.getObjects().forEach((x) => canvi.remove(x));
        canvi.discardActiveObject().renderAll();
        console.log("remove2");
      }
    }
  
  };
  
  const handleChange = (e) => {
    console.log("e is",e);
    //テキストエリア内が変化した時に発火する関数
    const { name, value } = e.target;//この中に最新のdiscription color, valueのデータあり
    console.log("name, value are", name,value); //文法がわからなければdestructuringで調べる。テキストエリアのhtml要素のnameとvalueをそれぞれ同名の変数に格納
    setTexts({ ...{ name: value } }); //変化したテキストエリアの状態を更新
    // setTexts(prevState => ({ ...prevState, [name]: value }));
    clickedObject.setText(name, e.target.value); //クリックされた（アクティブな）RectWithTextのテキストプロパティを更新
    // console.log("clickedobject",clickedObject);
  };

  const handleChangeconcept = (e) => {
    console.log("e is",e);
    //テキストエリア内が変化した時に発火する関数
    const { name, value } = e.target;//この中に最新のdiscription color, valueのデータあり
    console.log("name, value are", name,value); 
    settheme({ ...{ name: value } }); //変化したテキストエリアの状態を更新
  };



  return (
    <div style={{ display: "flex", flexWrap: "wrap",flexGrow: 1 }}>
      
          <div className="buttons">
              {/* <h1>buttons</h1> */}
              <button onMouseDown={() => Delete(canvas1)}>delete</button>              
              <button onMouseDown={() => addRect(canvas1)}><img src="./red_rectangle.png" style={{width:"50px"}}/></button>
              <button onMouseDown={() => addPic(canvas1)}><img src="./tree_green.png" style={{width:"50px"}}/></button>
              <button onMouseDown={() => addPic1(canvas1)}><img src="./ike.png" style={{width:"50px"}}/></button>
              {/* <button onClick={() => console.log(canvas1.getActiveObject())}>
                Test
              </button> */}
          </div>
      
          <div className="canvas1">
            {/* <h1>Canvas1</h1> */}
            <canvas id="canvas1" />
          </div>
        

      <div className="textBox">
        <div className="example"> 
          <div className='textexample'>
            <span className='name2'>{clickedObject &&clickedObject.name2}</span>
            <span className='prevCount'>{clickedObject &&clickedObject.prevCount}</span>
          </div>
              <div className='imageexample'>
                  {clickedObject && clickedObject.name.includes("rect-") ? (
                  <img src="./red_rectangle.png" style={{ width: "50px" }} />
                ) : null}
                {clickedObject && clickedObject.name.includes("tree-") ? (
                  <img src="./tree_green.png" style={{ width: "50px" }} />
                ) : null}
                {clickedObject && clickedObject.name.includes("ike-") ? (
                  <img src="./ike.png" style={{ width: "50px" }} />
                ) : null}
              </div>   
              
            <div className='Concept'>
              <div>
                <textarea
                className='conceptstyle'
               name="descriptionTheme"
               value={theme.descriptionTheme}
               placeholder="テーマ？"
               onChange={handleChangeconcept}/>
              </div>
               
              <div>
              <textarea
               className='conceptstyle'
               name="descriptionOnomatope"
               value={theme.descriptionOnomatope}
               placeholder="オノマトペ？"
               onChange={handleChangeconcept}/>
              </div>
            </div>{/*Concept*/}
           
         </div>{/*example*/}

        {/* <h1>Textbox Contents</h1> */}
        <div className='textbox contents' hidden={clickedObject === null ? true : false}>
          <div>
            <h3>色・グラデーションの説明</h3>
            <textarea 
              className='text-box-contents-syle'
              name="descriptionColor"
              value={texts.descriptionColor}
              placeholder="感情との関係はなんだろう。理由は？"
              onChange={handleChange}
            />
          </div>
          <div className='orientation'>
            <h3>配置・向きの説明</h3>
            <textarea
              className='text-box-contents-syle'
              name="descriptionPosition"
              value={texts.descriptionPosition}
              placeholder="感情との関係はなんだろう。理由は？"
              onChange={handleChange}
            />
          </div>
          <div className='metapher'>
            <h3>比喩の説明</h3>
            <textarea
              className='text-box-contents-syle'
              name="descriptionMetaphor"
              value={texts.descriptionMetaphor}
              placeholder="感情を何かで比喩できる？"
              onChange={handleChange}/>
          </div>
          <div className='move'>
            <h3>移動の説明</h3>
            <textarea
              className='text-box-contents-syle'
              name="descriptionMove"
              value={texts.descriptionMove}
              placeholder="移動する何かに意味が込められている？"
              onChange={handleChange}
            />
          </div>
          <div className='contrast'>
            <h3>対比するもの</h3>
            <textarea
              className='text-box-contents-syle'
              name="descriptionContrast"
              value={texts.descriptionContrast}
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
    this.set("texts", { descriptionColor: "", descriptionPosition: "" 
    , descriptionMetaphor: "", descriptionMove: "", descriptionContrast: "",});
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

var ImageWithText = fabric.util.createClass(fabric.Object, {
  // コンストラクタでtextsプロパティを追加する
  initialize: function (options) {
    this.callSuper("initialize", options);
    this.set("texts", { descriptionColor: "", descriptionPosition: "" 
    , descriptionMetaphor: "", descriptionMove: "", descriptionContrast: ""});
  },

  // toObjectメソッドでtextプロパティをJSONに追加する
  toObject: function () {
    return fabric.util.object.extend(this.callSuper("toObject"), {
      texts: this.get("texts"),
    });
  },

  // setTextメソッドでtextsプロパティを更新する
  setText: function (key, text) {
    var texts = this.get("texts");//this=Rectwithtext など
    texts[key] = text;//該当するkey（name）の最新のテキストを割り当てる
    this.set("texts", texts);
  },


});

export default App;