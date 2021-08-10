import React from 'react';
import styled from 'styled-components';

import IconComponent from '../IconComponent';

import { IconTypes } from '../../types';

type ButtonComponentProps = {
  copy?: string
  active?: boolean
  icon?: IconTypes
  onClick: () => void
}



const ButtonComponent: React.FC<ButtonComponentProps> = (props) => {



  return <Wrapper onClick={props.onClick} active={props.active}>
    {props.icon ? <IconComponent icon={props.icon} height="30px" width="30px" fill="#ffffff" /> : (null) }
    {props.copy}
  </Wrapper>

}

const Wrapper = styled.div<{active: boolean | undefined}>`
  background-color: ${ ({active}) => active? "#5C527F" : "#261C2C"};
  transition: background-color 0.2s;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  :hover{
    background-color: #3E2C41;
  }
`





export default ButtonComponent;