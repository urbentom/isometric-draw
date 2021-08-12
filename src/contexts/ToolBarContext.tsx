import React, { useState } from 'react';

import { SummerNeonPallet } from '../constants/pallet';
import { expandColourPallet } from '../utils/colours';

import { Colour, Tools } from '../types';

interface ProviderProps {
	children?: React.ReactNode;
}

type ToolBarContextProps = {
  currentTool: Tools,
  fillColour: string
  strokeColour: string
  colourPallet: Colour[]
  setColour: (colour: string) => void
  setTool: (tool: Tools) => void
  setHideGrid: (hide: boolean) => void
  gridSize: number
  hideGrid: boolean
}

const Context = React.createContext<ToolBarContextProps>({
  currentTool: Tools.PAINT,
  fillColour: "#F6A9A9",
  strokeColour: "lightgrey",
  colourPallet: [],
  setColour: () => null,
  setTool: () => null,
  setHideGrid: () => null,
  gridSize: 30,
  hideGrid: false,
})

const ToolBarContextProvider: React.FC<ProviderProps> = ( {children}) => {
  const [currentTool, setCurrentTool] = useState<Tools>(Tools.PAINT);
  const [gridSize, setGridSize] = useState<number>(30);
  const [fillColour, setFillColour] = useState<string>("#F6A9A9");
  const [hideGrid, setHideGrid] = useState<boolean>(false);
  const [colourPallet, setColourPallet] = useState<Colour[]>(expandColourPallet(SummerNeonPallet));

  const strokeColour = 'lightgrey'

  return (
		<Context.Provider
			value={{
				currentTool,
				fillColour,
        strokeColour,
				colourPallet,
        gridSize,
        hideGrid,
        setHideGrid,
        setColour: setFillColour,
        setTool: setCurrentTool
			}}
		>
			{children}
		</Context.Provider>
	);

}

export default Context;

export { ToolBarContextProvider };
