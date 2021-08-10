import React, { useRef, useState } from 'react';

interface ProviderProps {
	children?: React.ReactNode;
}

type ToolBarContextProps = {
  currentTool: Tools,
  currentColour: string
  colourPallet: string[]
  setColour: (colour: string) => void
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
  currentColour: "#F6A9A9",
  colourPallet: SummerNeonPallet,
  setColour: () => null
})

const ToolBarContextProvider: React.FC<ProviderProps> = ( {children}) => {
  const [currentTool, setCurrentTool] = useState<Tools>(Tools.PAINT);
  const [currentColour, setCurrentColour] = useState<string>("#F6A9A9");
  const [colourPallet, setColourPallet] = useState<string[]>(SummerNeonPallet);

  
  return (
		<Context.Provider
			value={{
				currentTool,
				currentColour,
				colourPallet,
        setColour: setCurrentColour
			}}
		>
			{children}
		</Context.Provider>
	);

}

export default Context;

export { ToolBarContextProvider };
