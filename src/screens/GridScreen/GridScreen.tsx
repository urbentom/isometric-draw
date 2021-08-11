import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonComponent from '../../components/ButtonComponent';


import GridLayout from '../../layouts/GridLayout';
import ToolbarLayout from '../../layouts/ToolbarLayout';
import { IconTypes } from '../../types';



// Types


type GridScreenProps = {}


const GridScreen: React.FC<GridScreenProps> = (props) => {

  return (
    <Wrapper>
      <ToolbarLayout />
      <GridLayout />
      <GithubWrapper href="https://github.com/urbentom" target="_blank">
        <ButtonComponent icon={IconTypes.GITHUB} onClick={ () => {}} />
      </GithubWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`

const GithubWrapper = styled.a`
  position: absolute;
  z-index: 5;
  bottom: 20px;
  right: 20px;
`



export default GridScreen;
