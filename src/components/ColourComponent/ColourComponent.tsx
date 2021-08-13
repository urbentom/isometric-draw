import styled from 'styled-components';

export const ColourComponent = styled.div<{colour: string, active: boolean}>`
  background-color: ${ ({colour}) => colour };
  border: solid 2px;
  border-color: ${ ({active, colour}) => active? "#ffffff" : colour };
  height: 30px;
  width: 30px;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
`