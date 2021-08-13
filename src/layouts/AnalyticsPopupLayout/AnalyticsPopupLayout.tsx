import React, { useState } from 'react';
import styled from 'styled-components';

import { pageView, hasPreviouslyConsented } from '../../utils/analytics';
import IconComponent from '../../components/IconComponent';
import { IconTypes } from '../../types';
import { useEffect } from 'react';

type AnalyticsPopupLayoutProps = {}

const AnalyticsPopupLayout: React.FC<AnalyticsPopupLayoutProps> = (props) => {
  const [acceptCookiePolicy, setAcceptCookiePolicy] = useState<boolean>(hasPreviouslyConsented)

  useEffect( () => {
    if(acceptCookiePolicy) pageView();
  }, [acceptCookiePolicy])

  return (
    <CookiePopupWrapper visible={!acceptCookiePolicy}>
        <IconComponent icon={IconTypes.COOKIE} height="30px" width="30px" />
        <CookiePopupText>This website uses cookies to ensure the best experience possible. By clicking 'Accept' you are consenting to accept all these cookies. If you wish to opt out click use the <CookiePopupLink href="https://tools.google.com/dlpage/gaoptout/">Google Analytics Opt-out Browser Add-on</CookiePopupLink></CookiePopupText>
        <CloseButton onClick={ () => setAcceptCookiePolicy(true)}>Accept</CloseButton>
      </CookiePopupWrapper>
  )
}

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
const CookiePopupLink = styled.a`
  color: #ffffff;
`

const CloseButton = styled.button`
  background-color: #5C527F;
  border-radius: 5px;
  border:none;
`

export default AnalyticsPopupLayout; 