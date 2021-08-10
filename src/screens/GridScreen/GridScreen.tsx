import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonComponent from '../../components/ButtonComponent';
import IconComponent from '../../components/IconComponent';


import GridLayout from '../../layouts/GridLayout';
import ToolbarLayout from '../../layouts/ToolbarLayout';
import { IconTypes } from '../../types';

// Types


type GridScreenProps = {}


const GridScreen: React.FC<GridScreenProps> = (props) => {

  const [cookiePopup, setCookiePopup] = useState<boolean>(true)

  return (
    <Wrapper>
      <ToolbarLayout />
      <GridLayout />
      <GithubWrapper href="https://github.com/urbentom" target="_blank">
        <ButtonComponent icon={IconTypes.GITHUB} onClick={ () => {}} />
      </GithubWrapper>
      <CookiePopupWrapper visible={cookiePopup}>
        <IconComponent icon={IconTypes.COOKIE} height="30px" width="30px" />
        <CookiePopupText>We use cookies and usage analytics to monitor the health of the tool and it's usage. By visiting this website, you agree to cookies and analytics to be used for the purpose mentioned. This data will not be shared with any 3rd parties.</CookiePopupText>
        <CloseButton onClick={ () => setCookiePopup(false)}>x</CloseButton>
      </CookiePopupWrapper>
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

const CookiePopupWrapper = styled.div<{visible:boolean}>`
  background-color: #261C2C;
  display: ${ ({visible}) => visible? "flex" : "none"};
  align-items: center;
  color: #ffffff;
  padding: 5px 20px;
  position: absolute;
  z-index: 20;
  bottom: 20px;
  left: 20px;
  width: calc(100vw - 80px);
  border-radius: 20px;
`
const CookiePopupText = styled.p`
  margin-left: 10px;
  margin-right: 10px;
  font-family: sans-serif;
`

const CloseButton = styled.button`
  background-color: #5C527F;
  border-radius: 5px;
  border:none;
`

export default GridScreen;
