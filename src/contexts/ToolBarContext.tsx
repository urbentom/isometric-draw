import React, { useState } from 'react';

import { SummerNeonPallet } from '../constants/pallet';
import { expandColourPallet } from '../utils/colours';

import { Colour, Tools, Pallet } from '../types';

interface ProviderProps {
	children?: React.ReactNode;
}

type ToolBarContextProps = {
	currentTool: Tools;
	fillColour: string;
	strokeColour: string;
	colourPallet: Colour[];
	setColour: (colour: string) => void;
	setPallet: (pallet: Pallet) => void;
	setTool: (tool: Tools) => void;
	setHideGrid: (hide: boolean) => void;
	setCanvas: (canvas: HTMLCanvasElement) => void;
	saveCanvas: () => string | undefined;
	gridSize: number;
	hideGrid: boolean;
};

const Context = React.createContext<ToolBarContextProps>({
	currentTool: Tools.PAINT,
	fillColour: '#F6A9A9',
	strokeColour: 'lightgrey',
	colourPallet: [],
	setColour: () => null,
	setPallet: () => null,
	setTool: () => null,
	setHideGrid: () => null,
	setCanvas: () => null,
	saveCanvas: () => undefined,
	gridSize: 30,
	hideGrid: false,
});

const ToolBarContextProvider: React.FC<ProviderProps> = ({ children }) => {
	const [currentTool, setCurrentTool] = useState<Tools>(Tools.PAINT);
	const [gridSize, setGridSize] = useState<number>(30);
	const [fillColour, setFillColour] = useState<string>('#F6A9A9');
	const [hideGrid, setHideGrid] = useState<boolean>(false);
	const [canvas, setCanvas] = useState<HTMLCanvasElement>();
	const [colourPallet, setColourPallet] = useState<Colour[]>(
		expandColourPallet(SummerNeonPallet.colours)
	);

	const strokeColour = 'lightgrey';

	const setPallet = (pallet: Pallet) => {
		setColourPallet(expandColourPallet(pallet.colours));
		setFillColour(pallet.colours[0]);
	};

	const saveCanvas = () => {
		const image = canvas?.toDataURL('image/png');
		return image;
	};

	const mintNft = () => {};

	return (
		<Context.Provider
			value={{
				currentTool,
				fillColour,
				strokeColour,
				colourPallet,
				gridSize,
				hideGrid,
				saveCanvas,
				setCanvas,
				setHideGrid,
				setPallet,
				setColour: setFillColour,
				setTool: setCurrentTool,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default Context;

export { ToolBarContextProvider };
