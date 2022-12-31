import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import ButtonComponent from '../../components/ButtonComponent';
import ColourPickerComponent from '../../components/ColourPickerComponent';
import PalletPickerComponent from '../../components/PalletPickerComponent';

import ToolbarContext from '../../contexts/ToolBarContext'

import { IconTypes, Tools } from '../../types';

type ToolbarLayoutProps = {}

const ToolbarLayout: React.FC<ToolbarLayoutProps> = (props) => {

  const {
		setColour,
		colourPallet,
		currentTool,
		setTool,
		fillColour,
		hideGrid,
		setHideGrid,
		saveCanvas,
	} = useContext(ToolbarContext);

  const [openColourPicker, setOpenColourPicker] = useState<boolean>(false)
  const [openPallet, setOpenPallet] = useState<boolean>(false)

  const closeAllMenus = () => {
    setOpenColourPicker(false)
    setOpenPallet(false)
  }

  const colourPickerOnClick = () => {
    setOpenColourPicker(!openColourPicker)
    setOpenPallet(false)
  }

  const colourPalletOnClick = () => {
    setOpenPallet(!openPallet)
    setOpenColourPicker(false)
  }

  const onColourClick = (colour: string) => {
    setColour(colour);
    setOpenColourPicker(false)
  }

  const onPalletClick = () => {
    setOpenPallet(false);
  }


  return (
		<Wrapper>
			<ButtonComponent
				icon={IconTypes.PEN}
				active={currentTool === Tools.PAINT}
				onClick={() => setTool(Tools.PAINT)}
			/>
			<ButtonComponent
				icon={IconTypes.ERASER}
				active={currentTool === Tools.ERASE}
				onClick={() => setTool(Tools.ERASE)}
			/>
			<ButtonComponent
				icon={IconTypes.PALLET}
				onClick={colourPickerOnClick}
				fill={fillColour}
			/>
			<ButtonComponent
				icon={IconTypes.SWATCH_PALLET}
				onClick={colourPalletOnClick}
			/>
			<Spacer />
			<ButtonComponent
				icon={hideGrid ? IconTypes.HIDE_GRID : IconTypes.SHOW_GRID}
				onClick={() => setHideGrid(!hideGrid)}
			/>
			<Spacer />
			<ButtonComponent
				icon={IconTypes.SWATCH_PALLET}
				onClick={() => saveCanvas()}
			/>

			<ColourMenu show={openColourPicker}>
				{colourPallet.map((colourSet) => (
					<ColourPickerComponent
						colour={colourSet}
						currentColour={fillColour}
						onClick={onColourClick}
					/>
				))}
			</ColourMenu>
			<PalletMenu show={openPallet}>
				<PalletPickerComponent onClick={onPalletClick} />
			</PalletMenu>
		</Wrapper>
	);

}

const Wrapper = styled.div`
  background-color: #261C2C;
  padding: 5px;
  border-radius: 10px;
  min-height: 250px;
  color: #ffffff;
  position: absolute;
  top: 20px;
  left: 20px;
`

const Spacer = styled.div`
  height: 10px;
  border-bottom: solid 2px #5C527F;
  margin-bottom: 10px;
`

const ColourMenu = styled.div<{show: boolean}>`
  position: absolute;
  background-color: #261C2C;
  display: ${ ({show}) => show? 'block' : 'none' };
  padding: 5px;
  border-radius: 10px;
  top: 92px;
  left: 55px;
`
const PalletMenu = styled.div<{show: boolean}>`
  position: absolute;
  background-color: #261C2C;
  display: ${ ({show}) => show? 'block' : 'none' };
  padding: 5px;
  border-radius: 10px;
  top: 138px;
  left: 55px;
`

export default ToolbarLayout;