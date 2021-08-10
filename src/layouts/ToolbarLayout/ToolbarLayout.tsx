import React, { useContext } from 'react';
import styled from 'styled-components';

import ButtonComponent from '../../components/ButtonComponent';

import ToolbarContext from '../../contexts/ToolbarContext'

type ToolbarLayoutProps = {}

const ToolbarLayout: React.FC<ToolbarLayoutProps> = (props) => {

  const { setColour, colourPallet } = useContext(ToolbarContext);

  return <Wrapper>
    <ButtonComponent copy="Tool" onClick={ () => console.log('TOOL')}  />
    <ButtonComponent copy="Colour" onClick={ () => { 

      console.log('Colour', colourPallet[2])
      setColour(colourPallet[2])

    }}  />
  </Wrapper>

}

const Wrapper = styled.div`
  background-color: #261C2C;
  padding: 5px;
  min-height: 100px;
  color: #ffffff;
  position: absolute;
  top: 20px;
  left: 20px;
`

export default ToolbarLayout;