import React, { useState } from 'react';

interface ProviderProps {
	children?: React.ReactNode;
}

type ToolBarContextProps = {
  currentTool: Tools,
  fillColour: string
  strokeColour: string
  colourPallet: string[]
  setColour: (colour: string) => void
  setTool: (tool: Tools) => void
  setHideGrid: (hide: boolean) => void
  gridSize: number
  hideGrid: boolean
}

enum Tools {
  PAINT,
  ERASE
}

const SummerNeonPallet = [
  "#F6A9A9",
  "#FFBF86",
  "#FFF47D",
  "#C2F784"
]

const NightSkyPallet = [
  "#261C2C",
  "#3E2C41",
  "#5C527F",
  "#6E85B2"
]

const Context = React.createContext<ToolBarContextProps>({
  currentTool: Tools.PAINT,
  fillColour: "#F6A9A9",
  strokeColour: "lightgrey",
  colourPallet: SummerNeonPallet,
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
  const [colourPallet, setColourPallet] = useState<string[]>(SummerNeonPallet);

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
