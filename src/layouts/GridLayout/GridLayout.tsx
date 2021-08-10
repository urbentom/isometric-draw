import React, { useState, useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import ToolbarContext from '../../contexts/ToolBarContext';

import { Point, Shape, Tools } from '../../types';

type GridLayoutProps = {}

const GridLayout: React.FC<GridLayoutProps> = (props) => {

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const clickedShapes = useRef<Shape[]>([])
  const mouseMovePosition = useRef<Point>({x: 0, y:0})
  const mouseClickPosition = useRef<Point | undefined>(undefined)
  const mouseDown = useRef<boolean>(false)

  const [shapes, setShapes] = useState<Shape[]>([]);
  const [offset, setOffset] = useState<Point>();

  const { fillColour, gridSize, strokeColour, currentTool } = useContext(ToolbarContext)

  const reOffset = () => {
    if(canvasRef.current === null) return;
    const canvas = canvasRef.current;

    const BB=canvas.getBoundingClientRect();

    setOffset({
      x: BB.left,
      y: BB.top
    })        
}


  // eslint-disable-next-line react-hooks/exhaustive-deps
  const createShapes = (canvas: HTMLCanvasElement) => {

    const tempShapes: Shape[] = []
    const halfGridSize = gridSize / 2;

    // @ts-ignore
    for(var x = 0; x < canvas.width ?? 0; x += gridSize){
      const xEven = ((x / gridSize)%2 === 0)? true : false;
      const xPlus = x + gridSize
  
      // @ts-ignore
      for(var y = 0; y < canvas.width ?? 0; y += halfGridSize){

        const yEven = ((y / halfGridSize)%2 === 0)? true : false;
        const yPlus = y + gridSize
        if((yEven && xEven) || (!yEven && !xEven)){
          tempShapes.push({
                id: `${x}:${y}`,
                shape: [{x, y: y + halfGridSize}, {x: xPlus, y: yPlus}, {x:xPlus, y}]
            })
        }
        else if((!yEven && xEven) || (yEven && !xEven)){
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

    console.log('tempShapes', tempShapes)
    setShapes(tempShapes);  
  }

  const drawShape = (context: CanvasRenderingContext2D, points: Shape['shape']) => {

    context.beginPath();
    context.moveTo(points[0].x,points[0].y);
    for(var i=1;i<points.length;i++){
      context.lineTo(points[i].x,points[i].y);
    }
    context.closePath();

  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {

    ctx.fillStyle = fillColour;
    ctx.strokeStyle = strokeColour;

    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

    for(var i=0;i<shapes.length;i++){
      drawShape(ctx, shapes[i].shape);

      if(mouseClickPosition.current){
        if(ctx.isPointInPath(mouseClickPosition.current.x, mouseClickPosition.current.y)){

            switch(currentTool){

              case Tools.PAINT:
                const colour = fillColour;
                ctx.fillStyle=colour;
                ctx.fill();
                clickedShapes.current.push({...shapes[i], colour});
                break;
              case Tools.ERASE:
                const index = clickedShapes.current.findIndex( (shape) => shape.id === shapes[i].id );
                if(index !== -1) {

                  clickedShapes.current.splice(index, 1);

                  ctx.fillStyle="transparent";
                  ctx.fill();

                }

                break;
            }
            
            mouseClickPosition.current = undefined
        }
    }

      if(ctx.isPointInPath(mouseMovePosition.current.x, mouseMovePosition.current.y)){
        ctx.strokeStyle="black";
        ctx.stroke();
        ctx.strokeStyle=strokeColour;
      }else{
        ctx.stroke()
      } 

      const clickedShape = clickedShapes.current.find( shape => shape.id === shapes[i].id)

      if(clickedShape){
        // console.log('clickedShape', clickedShape)
        ctx.fillStyle= clickedShape.colour ?? fillColour;
        ctx.fill();
      }
    }
  }


  function handleMouseMove(e: any){
    e.preventDefault();
    e.stopPropagation();
  
    // @ts-ignore
    const mouseX=parseInt( e.clientX - offset?.x);
    // @ts-ignore
    const mouseY=parseInt( e.clientY - offset?.y);
  
    if(mouseDown.current){
      mouseClickPosition.current = {
        x: mouseX,
        y: mouseY
    }
    }
    else{ 
      mouseMovePosition.current = {
        x: mouseX,
        y: mouseY
      }
    }
  
  }

  function handleMouseClick(e: any){
    e.preventDefault();
    e.stopPropagation();
  
    // @ts-ignore
    const mouseX=parseInt( e.clientX - offset.x );
    // @ts-ignore
    const mouseY=parseInt( e.clientY - offset.y );
  
    mouseClickPosition.current = {
      x: mouseX,
      y: mouseY
    }
  
  }
  
  function handleMouseDown(e: any){
    e.preventDefault();
    e.stopPropagation();
    mouseDown.current = true
  }
  
  function handleMouseUp(e: any){
    e.preventDefault();
    e.stopPropagation();
    mouseDown.current = false
  }


  useEffect( () => {
    if(canvasRef.current === null) return;

    canvasRef.current.height = window.innerHeight;
    canvasRef.current.width = window.innerWidth;
    reOffset();

    createShapes(canvasRef.current);
  }, [canvasRef])

  useEffect(() => {
    if(canvasRef.current === null) return;
    if(shapes.length === 0) return;


    const canvas = canvasRef.current
    // @ts-ignore
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('click', handleMouseClick)
    canvas.addEventListener('mousedown', handleMouseDown)
    canvas.addEventListener('mouseup', handleMouseUp)

    let frameCount = 0;
    let animationFrameId: any;

    const render = () => {
      frameCount++
      draw(ctx, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render();

    return () => {
      // @ts-ignore
      window.cancelAnimationFrame(animationFrameId)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('click', handleMouseClick)
      canvas.removeEventListener('mousedown', handleMouseDown)
      canvas.removeEventListener('mouseup', handleMouseUp)
    }

  }, [shapes, fillColour, currentTool])


  return <Canvas ref={canvasRef} width="100" height="100" /> 

}

const Canvas = styled.canvas``

export default GridLayout; 