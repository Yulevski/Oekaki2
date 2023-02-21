// import React from 'react';
import "./Main.css";
import pic from "./tree_green.png"; 
import React, { useState, useRef, useEffect } from 'react';
import { fabric } from 'fabric';
import 'fabric-webpack';

const FabricCanvas = () => {
  const [canvas, setCanvas] = useState(null);
  const [activeObject, setActiveObject] = useState(null);
  const [images, setImages] = useState([]);

  const canvasRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 800,
      height: 600,
    });

    setCanvas(canvas);

    canvas.on('object:selected', ({ target }) => {
      setActiveObject(target);
    });

    canvas.on('selection:cleared', () => {
      setActiveObject(null);
    });
  }, []);

  const handleAddImage = () => {
    inputRef.current.click();
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    const image = await new Promise((resolve) => {
      fabric.Image.fromURL(imageUrl, (img) => {
        resolve(img);
      });
    });

    canvas.add(image);
    setImages([...images, image]);
  };

  const handleTextChange = (event) => {
    const { value } = event.target;

    if (activeObject && activeObject.isType('textbox')) {
      activeObject.set('text', value);
      canvas.renderAll();
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleAddImage}>Add Image</button>
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '50%' }}>
          {images.map((image) => (
            <img
              // src={image.toDataURL()}
              src={pic}
              alt="Canvas Image"
              style={{ width: '100%', marginBottom: '10px' }}
            />
          ))}
        </div>
        <div style={{ width: '50%' }}>
          <textarea onChange={handleTextChange} />
          <textarea onChange={handleTextChange} />
          <textarea onChange={handleTextChange} />
        </div>
      </div>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default FabricCanvas;
