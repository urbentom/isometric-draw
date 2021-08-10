import React from 'react';
import styled from 'styled-components';

type ButtonComponentProps = {
  copy: string
  onClick: () => void
}

const ButtonComponent: React.FC<ButtonComponentProps> = (props) => {

  return <Wrapper onClick={props.onClick}>
    {props.copy}
  </Wrapper>

}

const Wrapper = styled.div`
  backgroundColor: #261C2C;
  color: #ffffff
`

export default ButtonComponent;