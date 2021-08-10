import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import ButtonComponent from '../../components/ButtonComponent';

import ToolbarContext from '../../contexts/ToolBarContext'

import { IconTypes, Tools } from '../../types';

type ToolbarLayoutProps = {}

const ToolbarLayout: React.FC<ToolbarLayoutProps> = (props) => {

  const { setColour, colourPallet, currentTool, setTool, fillColour, hideGrid, setHideGrid } = useContext(ToolbarContext);

  const [openPallet, setOpenPallet] = useState<boolean>(false)

  return <Wrapper>
    <ButtonComponent icon={IconTypes.PEN} active={currentTool === Tools.PAINT} onClick={ () => setTool(Tools.PAINT)}  />
    <ButtonComponent icon={IconTypes.ERASER} active={currentTool === Tools.ERASE} onClick={ () => setTool(Tools.ERASE)}  />
    <ButtonComponent icon={IconTypes.PALLET} onClick={ () => setOpenPallet(!openPallet)} fill={fillColour} />
    <Spacer />
    <ButtonComponent icon={ hideGrid? IconTypes.HIDE_GRID : IconTypes.SHOW_GRID} onClick={ () => setHideGrid(!hideGrid)} />

    <PalletMenu show={openPallet}>
      {
        colourPallet.map( (colour) => <PalletColour colour={colour} onClick={ () => {
          setColour(colour);
          setOpenPallet(false)
        }} active={colour === fillColour} /> )
      }
    </PalletMenu>
  </Wrapper>

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

const PalletMenu = styled.div<{show: boolean}>`
  position: absolute;
  background-color: #261C2C;
  display: ${ ({show}) => show? 'block' : 'none' };
  padding: 5px;
  border-radius: 10px;
  top: 92px;
  left: 55px;
`
const PalletColour = styled.div<{colour: string, active: boolean}>`
  background-color: ${ ({colour}) => colour };
  border: solid 2px;
  border-color: ${ ({active, colour}) => active? "#ffffff" : colour };
  height: 30px;
  width: 30px;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
`

export default ToolbarLayout;