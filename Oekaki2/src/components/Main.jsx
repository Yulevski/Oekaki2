// import React from 'react';
import React, { useState, useEffect } from 'react';
import { fabric } from "fabric";
import pic from "./pictures/tree_green.png";
import picbw from "./pictures/tree_green bw.png";
import pic1 from "./pictures/ike.png";
import pic1bw from "./pictures/ike_bw.png";
import pic2 from "./pictures/japan_tourou.png";
import pic3 from "./pictures/kouyou_eda_momiji.png";
import pic3bw from "./pictures/kouyou_eda_momiji bw.png";
import pic4 from "./pictures/kumo.png";
import pic5 from "./pictures/mark_tenki_hare 2.png";
import pic5bw from "./pictures/mark_tenki_hare bw.png";
import pic6 from "./pictures/mark_tenki_moon.png";
import pic6bw from "./pictures/mark_tenki_moon bw.png";
import pic7 from "./pictures/mizutamari_hansya 2.png";
import pic7bw from "./pictures/mizutamari_hansya bw.png";
import pic8 from "./pictures/space04_moon.png";
import pic8bw from "./pictures/space04_moon bw.png";
import pic9 from "./pictures/stone.png";
// import './Main.css';
import './Main-try.css';
import { NavLink, Link } from 'react-router-dom';


const App = ({themeValue, onomatopeValue}) => {
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
  const [rectCount2, setRectCount2] = useState(0);
  const [rectCount3, setRectCount3] = useState(0);
  const [rectCount4, setRectCount4] = useState(0);
  const [imageCount, setimageCount] = useState(0);
  const [imageCountbw, setimageCountbw] = useState(0);
  const [imageCount1, setimageCount1] = useState(0);
  const [imageCount1bw, setimageCount1bw] = useState(0);
  const [imageCount2, setimageCount2] = useState(0);
  const [imageCount3, setimageCount3] = useState(0);
  const [imageCount3bw, setimageCount3bw] = useState(0);
  const [imageCount4, setimageCount4] = useState(0);
  const [imageCount5, setimageCount5] = useState(0);
  const [imageCount5bw, setimageCount5bw] = useState(0);
  const [imageCount6, setimageCount6] = useState(0);
  const [imageCount6bw, setimageCount6bw] = useState(0);
  const [imageCount7, setimageCount7] = useState(0);
  const [imageCount7bw, setimageCount7bw] = useState(0);
  const [imageCount8, setimageCount8] = useState(0);
  const [imageCount8bw, setimageCount8bw] = useState(0);
  const [imageCount9, setimageCount9] = useState(0);


  //テーマとオノマトぺ
  const [theme, settheme] = useState({descriptionTheme:"",descriptionOnomatope:"",});
  // const [onomatope, setonomatope] = useState({descriptionOnomatope:"",});


  const [clickedObject, setClickedObject] = useState(null); //アクティブなオブジェクトを状態として管理するために設定
  
  useEffect(() => {
   
    const canvas1 = new fabric.Canvas("canvas1", {
      height: 1.0*window.innerHeight,
      //  width: `calc(100% - 200px)`,
      // width:`600px`,
      width:0.75*window.innerWidth,
      backgroundColor: "white",
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
      height: 200,
      width: 200,
      fill: "#FF5353",
      name: "rect-red" + Date.now(),
      name2:"赤四角",
      prevCount: rectCount + 1,
    });

    console.log("name is", rect.name);
    console.log("prevCount is", rect.prevCount);
    canvi.add(rect);
    //canvi.renderAll();
  };

  const addRect2 = (canvi) => {
    setRectCount2((prevCount) =>{
    // console.log("prevCount is", prevCount);
    return prevCount + 1;});
    const rect = new RectWithText({
      height: 200,
      width: 200,
      fill: "#54ABFB",
      name: "rect-blue" + Date.now(),
      name2:"青四角",
      prevCount: rectCount2 + 1,
    });
    canvi.add(rect);
  };
  const addRect3 = (canvi) => {
    setRectCount3((prevCount) =>{
    // console.log("prevCount is", prevCount);
    return prevCount + 1;});
    const rect = new RectWithText({
      height: 200,
      width: 200,
      fill: "#00DB23",
      name: "rect-green" + Date.now(),
      name2:"緑四角",
      prevCount: rectCount3 + 1,
    });
    canvi.add(rect);
  };
  const addRect4 = (canvi) => {
    setRectCount4((prevCount) =>{
    // console.log("prevCount is", prevCount);
    return prevCount + 1;});
    const rect = new RectWithText({
      height: 200,
      width: 200,
      fill: "#898989",
      name: "rect-gray" + Date.now(),
      name2:"灰色四角",
      prevCount: rectCount4 + 1,
    });
    canvi.add(rect);
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
  const addPicbw = (canvi) => {
    setimageCountbw((prevCount) =>{
      // console.log("prevCount is", prevCount);
      return prevCount + 1;});
    fabric.Image.fromURL(picbw, function (img) {
      const imgWithText = new ImageWithText(img);
      imgWithText.set({ name: "treebw-" + Date.now(),
      name2:"木モノトーン",
      prevCount: imageCountbw + 1,
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
  const addPic1bw = (canvi) => {
    setimageCount1bw((prevCount) =>{
      // console.log("prevCount is", prevCount);
      return prevCount + 1;});
    fabric.Image.fromURL(pic1bw, function (img) {
      const imgWithText = new ImageWithText(img);
      imgWithText.set({ name: "ikebw-" + Date.now(),
      name2:"池モノトーン",
      prevCount: imageCount1bw + 1, });
      canvi.add(imgWithText);
      // canvi.add(img);
      console.log("img name is", imgWithText.name); 
    });
  };


  const addPic2 = (canvi) => {
    setimageCount2((prevCount) =>{
      // console.log("prevCount is", prevCount);
      return prevCount + 1;});
    fabric.Image.fromURL(pic2, function (img) {
      const imgWithText = new ImageWithText(img);
      imgWithText.set({ name: "tourou-" + Date.now(),
      name2:"灯籠",
      prevCount: imageCount2 + 1, });
      canvi.add(imgWithText);
      // canvi.add(img);
      console.log("img name is", imgWithText.name); 
    });
  };
  const addPic3 = (canvi) => {
    setimageCount3((prevCount) =>{
      // console.log("prevCount is", prevCount);
      return prevCount + 1;});
    fabric.Image.fromURL(pic3, function (img) {
      const imgWithText = new ImageWithText(img);
      imgWithText.set({ name: "momiji-" + Date.now(),
      name2:"紅葉",
      prevCount: imageCount3 + 1, });
      canvi.add(imgWithText);
      // canvi.add(img);
      console.log("img name is", imgWithText.name); 
    });
  };
  const addPic3bw = (canvi) => {
    setimageCount3bw((prevCount) =>{
      // console.log("prevCount is", prevCount);
      return prevCount + 1;});
    fabric.Image.fromURL(pic3bw, function (img) {
      const imgWithText = new ImageWithText(img);
      imgWithText.set({ name: "momijibw-" + Date.now(),
      name2:"紅葉モノトーン",
      prevCount: imageCount3bw + 1, });
      canvi.add(imgWithText);
      // canvi.add(img);
      console.log("img name is", imgWithText.name); 
    });
  };
  const addPic4 = (canvi) => {
    setimageCount4((prevCount) =>{
      // console.log("prevCount is", prevCount);
      return prevCount + 1;});
    fabric.Image.fromURL(pic4, function (img) {
      const imgWithText = new ImageWithText(img);
      imgWithText.set({ name: "kumo-" + Date.now(),
      name2:"雲",
      prevCount: imageCount4 + 1, });
      canvi.add(imgWithText);
      // canvi.add(img);
      console.log("img name is", imgWithText.name); 
    });
  };
  const addPic5 = (canvi) => {
    setimageCount5((prevCount) =>{
      // console.log("prevCount is", prevCount);
      return prevCount + 1;});
    fabric.Image.fromURL(pic5, function (img) {
      const imgWithText = new ImageWithText(img);
      imgWithText.set({ name: "taiyo-" + Date.now(),
      name2:"太陽",
      prevCount: imageCount5 + 1, });
      canvi.add(imgWithText);
      // canvi.add(img);
      console.log("img name is", imgWithText.name); 
    });
  };
  const addPic5bw = (canvi) => {
    setimageCount5bw((prevCount) =>{
      // console.log("prevCount is", prevCount);
      return prevCount + 1;});
    fabric.Image.fromURL(pic5bw, function (img) {
      const imgWithText = new ImageWithText(img);
      imgWithText.set({ name: "taiyobw-" + Date.now(),
      name2:"太陽モノトーン",
      prevCount: imageCount5bw + 1, });
      canvi.add(imgWithText);
      // canvi.add(img);
      console.log("img name is", imgWithText.name); 
    });
  };
  const addPic6 = (canvi) => {
    setimageCount6((prevCount) =>{
      // console.log("prevCount is", prevCount);
      return prevCount + 1;});
    fabric.Image.fromURL(pic6, function (img) {
      const imgWithText = new ImageWithText(img);
      imgWithText.set({ name: "mika-" + Date.now(),
      name2:"三日月",
      prevCount: imageCount6 + 1, });
      canvi.add(imgWithText);
      // canvi.add(img);
      console.log("img name is", imgWithText.name); 
    });
  };
  const addPic6bw = (canvi) => {
    setimageCount6bw((prevCount) =>{
      // console.log("prevCount is", prevCount);
      return prevCount + 1;});
    fabric.Image.fromURL(pic6bw, function (img) {
      const imgWithText = new ImageWithText(img);
      imgWithText.set({ name: "mikabw-" + Date.now(),
      name2:"三日月モノトーン",
      prevCount: imageCount6bw + 1, });
      canvi.add(imgWithText);
      // canvi.add(img);
      console.log("img name is", imgWithText.name); 
    });
  };
  const addPic7 = (canvi) => {
    setimageCount7((prevCount) =>{
      // console.log("prevCount is", prevCount);
      return prevCount + 1;});
    fabric.Image.fromURL(pic7, function (img) {
      const imgWithText = new ImageWithText(img);
      imgWithText.set({ name: "mizu-" + Date.now(),
      name2:"水",
      prevCount: imageCount7 + 1, });
      canvi.add(imgWithText);
      // canvi.add(img);
      console.log("img name is", imgWithText.name); 
    });
  };
  const addPic7bw = (canvi) => {
    setimageCount7bw((prevCount) =>{
      // console.log("prevCount is", prevCount);
      return prevCount + 1;});
    fabric.Image.fromURL(pic7bw, function (img) {
      const imgWithText = new ImageWithText(img);
      imgWithText.set({ name: "mizubw-" + Date.now(),
      name2:"水モノトーン",
      prevCount: imageCount7bw + 1, });
      canvi.add(imgWithText);
      // canvi.add(img);
      console.log("img name is", imgWithText.name); 
    });
  };
  const addPic8 = (canvi) => {
    setimageCount8((prevCount) =>{
      // console.log("prevCount is", prevCount);
      return prevCount + 1;});
    fabric.Image.fromURL(pic8, function (img) {
      const imgWithText = new ImageWithText(img);
      imgWithText.set({ name: "mangetsu-" + Date.now(),
      name2:"満月",
      prevCount: imageCount8 + 1, });
      canvi.add(imgWithText);
      // canvi.add(img);
      console.log("img name is", imgWithText.name); 
    });
  };
  const addPic8bw = (canvi) => {
    setimageCount8bw((prevCount) =>{
      // console.log("prevCount is", prevCount);
      return prevCount + 1;});
    fabric.Image.fromURL(pic8bw, function (img) {
      const imgWithText = new ImageWithText(img);
      imgWithText.set({ name: "mangetsubw-" + Date.now(),
      name2:"満月モノトーン",
      prevCount: imageCount8bw + 1, });
      canvi.add(imgWithText);
      // canvi.add(img);
      console.log("img name is", imgWithText.name); 
    });
  };
  const addPic9 = (canvi) => {
    setimageCount9((prevCount) =>{
      // console.log("prevCount is", prevCount);
      return prevCount + 1;});
    fabric.Image.fromURL(pic9, function (img) {
      const imgWithText = new ImageWithText(img);
      imgWithText.set({ name: "ishi-" + Date.now(),
      name2:"石",
      prevCount: imageCount9 + 1, });
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
  const handleSave = () => {
    if (canvas1) {
      const objects = canvas1.getObjects().map((obj) => {
        const {
          name,
          name2,
          prevcount,
          descriptionColor,
          descriptionPosition,
          descriptionMetaphor,
          descriptionMove,
          descriptionContrast,
          ...rest
        } = obj.toObject();
  
        if (obj instanceof fabric.Image && obj.getSrc()) {
          const imgElement = document.createElement('img');
          imgElement.src = obj.getSrc();
          rest.src = obj.getSrc(); // Store the source URL in the 'src' property
        }
        return {
          ...rest,
          name,
          name2,
          prevcount,
          descriptionColor,
          descriptionPosition,
          descriptionMetaphor,
          descriptionMove,
          descriptionContrast,
        };
      });
  
      const json = JSON.stringify(objects, null, 2);
  
      // Create a new Blob with the JSON data
      const blob = new Blob([json], { type: 'application/json' });
  
      // Create a temporary anchor element
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'canvas.json';
      a.click();
  
      // Clean up the temporary anchor element
      URL.revokeObjectURL(a.href);
    }
  };
  
  const handleLoad = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = (e) => {
      const contents = e.target.result;
      const objects = JSON.parse(contents);
  
      if (canvas1) {
        canvas1.clear();
        objects.forEach((obj) => {
          const {
            name,
            name2,
            prevcount,
            descriptionColor,
            descriptionPosition,
            descriptionMetaphor,
            descriptionMove,
            descriptionContrast,
            src, // Retrieve the source URL from the 'src' property
            ...rest
          } = obj;
          if (rest.type === 'rect') {
            const rect = new fabric.Rect(rest);
            rect.name = name;
            rect.name2 = name2;
            rect.prevcount = prevcount;
            rect.descriptionColor = descriptionColor;
            rect.descriptionPosition = descriptionPosition;
            rect.descriptionMetaphor = descriptionMetaphor;
            rect.descriptionMove = descriptionMove;
            rect.descriptionContrast = descriptionContrast;
            canvas1.add(rect);
          } else if (rest.type === 'image') {
            if (src) { // Check if 'src' is available
              fabric.Image.fromURL(src, (image) => {
                image.name = name;
                image.name2 = name2;
                image.prevcount = prevcount;
                image.descriptionColor = descriptionColor;
                image.descriptionPosition = descriptionPosition;
                image.descriptionMetaphor = descriptionMetaphor;
                image.descriptionMove = descriptionMove;
                image.descriptionContrast = descriptionContrast;
                canvas1.add(image);
              });
            }
          }
        });
  
        canvas1.renderAll();
      }
    };
  
    reader.readAsText(file);
  };
  
  
  return (

    <><div className='All'>
    <div className='Upper'>
            <div className='concept'>
              <p1 className='top20'>テーマ：</p1>
              <p1 className='top24'>{themeValue}</p1>
              <p1 className='top20-plus'>+</p1>
              <p1 className='top20'>オノマトペ：</p1>
              <p1 className='top24'>{onomatopeValue}</p1>
              <p1 className='top20'>から想起される</p1>
              <p1 className='top24'>感情を反映した絵</p1>
              <p1 className='top20'>を描こう</p1>
              <button onClick={handleSave}>Save</button>
              <input type="file" onChange={handleLoad} accept=".json" />

            </div>{/*concept*/}
    </div>{/*upper*/}
    
    {/* <div className='Lower'> */}
        <div className='left'>
          
          <div className="buttons-main">
            <p1 className="from-here">オブジェクトを<span>クリックして挿入</span></p1>
            <button className='buttons-delete' onMouseDown={() => Delete(canvas1)} style={{  height:"25px" }}>Delete</button>
            <div className='buttons-objects-selection'>
            <button className='buttons-objects' onMouseDown={() => addRect(canvas1)}><img src="./red_rectangle.png" style={{  height:"50px" }} /></button>
            <button className='buttons-objects' onMouseDown={() => addRect2(canvas1)}><img src="./blue_rectangle.png" style={{ height:"50px" }} /></button>
            <button className='buttons-objects' onMouseDown={() => addRect3(canvas1)}><img src="./green_rectangle.png" style={{ height:"50px" }} /></button>
            <button className='buttons-objects' onMouseDown={() => addRect4(canvas1)}><img src="./gray_rectangle.png" style={{ height:"50px" }} /></button>
            <button className='buttons-objects' onMouseDown={() => addPic(canvas1)}><img src="./tree_green.png" style={{ height:"50px" }} /></button>
            <button className='buttons-objects' onMouseDown={() => addPicbw(canvas1)}><img src="./tree_green bw.png" style={{ height:"50px" }} /></button>
            <button className='buttons-objects' onMouseDown={() => addPic1(canvas1)}><img src="./ike.png" style={{ height:"50px" }} /></button>
            <button className='buttons-objects' onMouseDown={() => addPic1bw(canvas1)}><img src="./ike_bw.png" style={{ height:"50px" }} /></button>
            <button className='buttons-objects' onMouseDown={() => addPic3(canvas1)}><img src="./kouyou_eda_momiji.png" style={{ height:"50px" }} /></button>
            <button className='buttons-objects' onMouseDown={() => addPic3bw(canvas1)}><img src="./kouyou_eda_momiji bw.png" style={{ height:"50px" }} /></button>
            <button className='buttons-objects' onMouseDown={() => addPic5(canvas1)}><img src="./mark_tenki_hare 1.png" style={{ height:"50px" }} /></button>
            <button className='buttons-objects' onMouseDown={() => addPic5bw(canvas1)}><img src="./mark_tenki_hare bw.png" style={{ height:"50px" }} /></button>
            <button className='buttons-objects' onMouseDown={() => addPic6(canvas1)}><img src="./mark_tenki_moon.png" style={{ height:"50px" }} /></button>
            <button className='buttons-objects' onMouseDown={() => addPic6bw(canvas1)}><img src="./mark_tenki_moon bw.png" style={{ height:"50px" }} /></button>
            <button className='buttons-objects' onMouseDown={() => addPic7(canvas1)}><img src="./mizutamari_hansya 1.png" style={{ width:"80px" }} /></button>
            <button className='buttons-objects' onMouseDown={() => addPic7bw(canvas1)}><img src="./mizutamari_hansya bw.png" style={{ width:"80px" }} /></button>
            <button className='buttons-objects' onMouseDown={() => addPic8(canvas1)}><img src="./space04_moon.png" style={{ height:"50px" }} /></button>
            <button className='buttons-objects' onMouseDown={() => addPic9(canvas1)}><img src="./stone.png" style={{width:'80px', height:"50px" }} /></button>
            <button className='buttons-objects' onMouseDown={() => addPic4(canvas1)}><img src="./kumo.png" style={{ height:"50px" }} /></button>
            <button className='buttons-objects' onMouseDown={() => addPic2(canvas1)}><img src="./japan_tourou.png" style={{ height:"50px" }} /></button>
            </div>
            {/* <button onClick={() => console.log(canvas1.getActiveObject())}>Test</button> */}
          </div>{/*buttons-main*/}

      </div>{/*left*/}

          <div className="canvas1">
            {/* <h1>Canvas1</h1> */}
            <canvas id="canvas1" />
          </div>{/*canvas1*/}

        <div className="textBox">        
          <p1 className="explain-section">
            選んだ<span>オブジェクトと</span>感情の関連を<span>説明しよう</span></p1>
          <div className="example">
              <div className='example-back'></div>
                <div className='image-example'>
                  {clickedObject && clickedObject.name.includes("rect-red") ? (
                    <img src="./red_rectangle.png" style={{ width: "50px" }} />
                  ) : null}
                  {clickedObject && clickedObject.name.includes("rect-blue") ? (
                    <img src="./blue_rectangle.png" style={{ width: "50px" }} />
                  ) : null}
                  {clickedObject && clickedObject.name.includes("rect-green") ? (
                    <img src="./green_rectangle.png" style={{ width: "50px" }} />
                  ) : null}
                  {clickedObject && clickedObject.name.includes("rect-gray") ? (
                    <img src="./gray_rectangle.png" style={{ width: "50px" }} />
                  ) : null}

                  {clickedObject && clickedObject.name.includes("tree-") ? (
                    <img src="./tree_green.png" style={{ width: "50px" }} />
                  ) : null}
                  {clickedObject && clickedObject.name.includes("treebw-") ? (
                    <img src="./tree_green bw.png" style={{ width: "50px" }} />
                  ) : null}
                  {clickedObject && clickedObject.name.includes("ike-") ? (
                    <img src="./ike.png" style={{ width: "50px" }} />
                  ) : null}
                  {clickedObject && clickedObject.name.includes("ikebw-") ? (
                    <img src="./ike_bw.png" style={{ width: "50px" }} />
                  ) : null}
                  {clickedObject && clickedObject.name.includes("tourou-") ? (
                    <img src="./japan_tourou.png" style={{ width: "50px" }} />
                  ) : null}
                  {clickedObject && clickedObject.name.includes("momiji-") ? (
                    <img src="./kouyou_eda_momiji.png" style={{ width: "50px" }} />
                  ) : null}
                  {clickedObject && clickedObject.name.includes("momijibw-") ? (
                    <img src="./kouyou_eda_momiji bw.png" style={{ width: "50px" }} />
                  ) : null}
                  {clickedObject && clickedObject.name.includes("kumo-") ? (
                    <img src="./kumo.png" style={{ width: "50px" }} />
                  ) : null}
                  {clickedObject && clickedObject.name.includes("taiyo-") ? (
                    <img src="./mark_tenki_hare 1.png" style={{ width: "50px" }} />
                  ) : null}
                  {clickedObject && clickedObject.name.includes("taiyobw-") ? (
                    <img src="./mark_tenki_hare bw.png" style={{ width: "50px" }} />
                  ) : null}
                  {clickedObject && clickedObject.name.includes("mika-") ? (
                    <img src="./mark_tenki_moon.png" style={{ width: "50px" }} />
                  ) : null}
                  {clickedObject && clickedObject.name.includes("mikabw-") ? (
                    <img src="./mark_tenki_moon bw.png" style={{ width: "50px" }} />
                  ) : null}
                  {clickedObject && clickedObject.name.includes("mizu-") ? (
                    <img src="./mizutamari_hansya 1.png" style={{ width: "50px" }} />
                  ) : null}
                  {clickedObject && clickedObject.name.includes("mizubw-") ? (
                    <img src="./mizutamari_hansya bw.png" style={{ width: "50px" }} />
                  ) : null}
                  {clickedObject && clickedObject.name.includes("mangetsu-") ? (
                    <img src="./space04_moon.png" style={{ width: "50px" }} />
                  ) : null}
                  {clickedObject && clickedObject.name.includes("mangetsubw-") ? (
                    <img src="./space04_moon bw.png" style={{ width: "50px" }} />
                  ) : null}
                  {clickedObject && clickedObject.name.includes("ishi-") ? (
                    <img src="./stone.png" style={{ width: "50px" }} />
                  ) : null}
                  
                </div>
                <div className='text-example'>
                  <span className='name2'>{clickedObject && clickedObject.name2}</span>
                  <span className='prevCount'>{clickedObject && clickedObject.prevCount}</span>
                </div>
          </div>{/*example*/}
          <div className='textbox-contents' hidden={clickedObject === null ? true : false}>
            <div>
              <h3 className='explain'>色・グラデーションの説明</h3>
              <textarea
                className='text-box-contents-syle'
                name="descriptionColor"
                value={texts.descriptionColor}
                placeholder="感情との関係はなんだろう。理由は？"
                onChange={handleChange} />
            </div>
            <div className='orientation'>
              <h3 className='explain'>配置・向きの説明</h3>
              <textarea
                className='text-box-contents-syle'
                name="descriptionPosition"
                value={texts.descriptionPosition}
                placeholder="感情との関係はなんだろう。理由は？"
                onChange={handleChange} />
            </div>
            <div className='metapher'>
              <h3 className='explain'>比喩の説明</h3>
              <textarea
                className='text-box-contents-syle'
                name="descriptionMetaphor"
                value={texts.descriptionMetaphor}
                placeholder="感情を何かで比喩できる？"
                onChange={handleChange} />
            </div>
            <div className='move'>
              <h3 className='explain'>移動の説明</h3>
              <textarea
                className='text-box-contents-syle'
                name="descriptionMove"
                value={texts.descriptionMove}
                placeholder="移動する何かに意味が込められている？"
                onChange={handleChange} />
            </div>
            <div className='contrast'>
              <h3 className='explain'>対比するもの</h3>
              <textarea
                className='text-box-contents-syle'
                name="descriptionContrast"
                value={texts.descriptionContrast}
                placeholder="何かと対比している？"
                onChange={handleChange} />
            </div>
          </div>{/*textbox-contents*/}
        </div>{/*textBox */}
      {/* </div>Lower */}
      </div>{/*All*/}</>
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