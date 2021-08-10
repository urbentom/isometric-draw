import React, { useState, useEffect, useRef, useContext } from 'react';

import ToolBarContext from '../../contexts/ToolBarContext';

// Types
import {Dimensions, Shape, Point} from '../../types';

type GridScreenProps = {}


const GridScreen: React.FC<GridScreenProps> = (props) => {

  // Refs
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasContextRef = useRef<CanvasRenderingContext2D | null>(null);
  const canvasDimensions = useRef<Dimensions | null>(null);

  // States
  const [shapes, setShapes] = useState<Shape[]>([]);
  const { currentColour } = useContext(ToolBarContext)
  // const [clickShapes, setClickShapes] = useState<Shape[]>([]);

  // Constants
  const gridSize = 30;
  const halfGridSize = gridSize / 2;
  const strokeColour = 'lightgrey'
  const fillColour = 'purple'
  let mouseMovePosition: Point = {x: 0, y: 0};
  let mouseClickPosition: Point | undefined = undefined
  let clickShapes: Shape[] = []
  let offsetX: number = 0
  let offsetY: number = 0
  let mouseDown: boolean = false


    
  useEffect( () => {
    if(canvasRef.current === null) return;
    // Initialize App 
    canvasContextRef.current = canvasRef.current.getContext("2d");

    if(canvasRef.current.height !== window.innerHeight){
      canvasRef.current.height = window.innerHeight;
      canvasRef.current.width = window.innerWidth;
    }


    canvasDimensions.current = {
      height: window.innerHeight,
      width: window.innerWidth,
    }
    createShapes();
  }, [canvasRef])



  useEffect( () => {
    if(shapes.length === 0) return;
    if(canvasContextRef.current === null) return;
    if(canvasRef.current === null) return;

    const canvasContext = canvasContextRef.current;
    const canvas = canvasRef.current;
    
    reOffset();
    canvasContext.fillStyle=fillColour;
    canvasContext.strokeStyle=strokeColour;
    canvasContext.lineWidth=1;

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('click', handleMouseClick)
    canvas.addEventListener('mousedown', handleMouseDown)
    canvas.addEventListener('mouseup', handleMouseUp)

    loop();
    
  }, [shapes])


  const createShapes = () => {

    const tempShapes: Shape[] = []

    // @ts-ignore
    for(var x = 0; x < canvasDimensions.current?.width ?? 0; x += gridSize){
      const xEven = ((x / gridSize)%2 === 0)? true : false;
      const xPlus = x + gridSize
  
      // @ts-ignore
      for(var y = 0; y < canvasDimensions.current?.width ?? 0; y += halfGridSize){

          const yEven = ((y / halfGridSize)%2 === 0)? true : false;
          const yPlus = y + gridSize

          if(yEven && xEven || !yEven && !xEven){
            tempShapes.push({
                  id: `${x}:${y}`,
                  shape: [{x, y: y + halfGridSize}, {x: xPlus, y: yPlus}, {x:xPlus, y}]
              })
          }
          else if(!yEven && xEven || yEven && !xEven){
            tempShapes.push({
                  id: `${x}:${y}`,
                  shape: [{x: x, y: yPlus}, {x:x + gridSize, y: y + halfGridSize}, {x: x, y}]
              })
          }
          else {
              // You done fucked up a-aron
          }

      }
  }

  setShapes(tempShapes);


  }

  const reOffset = () => {
    if(canvasRef.current === null) return;
    const canvas = canvasRef.current;

    const BB=canvas.getBoundingClientRect();
    offsetX=BB.left;
    offsetY=BB.top;        
}

  const draw = () => {
    if(canvasContextRef.current === null) return;
    if(canvasDimensions.current === null) return;

    const canvasContext = canvasContextRef.current;
    const height = canvasDimensions.current.height;
    const width = canvasDimensions.current.width;


    canvasContext.clearRect(0,0,width,height);

    for(var i=0;i<shapes.length;i++){
      defineShape(shapes[i].shape);

      if(mouseClickPosition){
          if(canvasContext.isPointInPath(mouseClickPosition.x, mouseClickPosition.y)){
              const colour = currentColour;
              canvasContext.fillStyle=colour;
              canvasContext.fill();
              clickShapes.push({...shapes[i], colour});

              mouseClickPosition = undefined;
          }

      }

      if(canvasContext.isPointInPath(mouseMovePosition.x, mouseMovePosition.y)){
        canvasContext.strokeStyle="black";
        canvasContext.stroke();
        canvasContext.strokeStyle=strokeColour;
      }else{
        canvasContext.stroke()
      } 
      
      const clickedShape = clickShapes.find( shape => shape.id === shapes[i].id)

      if(clickedShape){
        canvasContext.fillStyle=clickedShape.colour ?? fillColour;
        canvasContext.fill();
      }
                       
  }


  }

  function defineShape(s: Point[]){
    if(canvasContextRef.current === null) return;
    const canvasContext = canvasContextRef.current;


    canvasContext.beginPath();
    canvasContext.moveTo(s[0].x,s[0].y);
    for(var i=1;i<s.length;i++){
      canvasContext.lineTo(s[i].x,s[i].y);
    }
    canvasContext.closePath();
}

function loop(){
  window.setTimeout(loop, 20);
  draw() 
}

function handleMouseMove(e: any){
  e.preventDefault();
  e.stopPropagation();

  // @ts-ignore
  const mouseX=parseInt(e.clientX-offsetX);
  // @ts-ignore
  const mouseY=parseInt(e.clientY-offsetY);

  if(mouseDown){
    mouseClickPosition = {
      x: mouseX,
      y: mouseY
  }
  }
  else{ 
    mouseMovePosition = {
      x: mouseX,
      y: mouseY
    }
  }

}
function handleMouseClick(e: any){
  e.preventDefault();
  e.stopPropagation();

  // @ts-ignore
  const mouseX=parseInt(e.clientX-offsetX);
  // @ts-ignore
  const mouseY=parseInt(e.clientY-offsetY);

  mouseClickPosition = {
    x: mouseX,
    y: mouseY
  }

}

function handleMouseDown(e: any){
  e.preventDefault();
  e.stopPropagation();
  mouseDown = true;
}

function handleMouseUp(e: any){
  e.preventDefault();
  e.stopPropagation();
  mouseDown = false
}

  return (
    <canvas ref={canvasRef} id="grid" width="100vw" height="100vh"></canvas>
  );
}

export default GridScreen;
