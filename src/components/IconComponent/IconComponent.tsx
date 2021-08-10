import React from 'react';
import styled from 'styled-components';

import BrushIcon from '../../assets/icons/brush.svg'
import EraserIcon from '../../assets/icons/eraser.svg'
import PalletIcon from '../../assets/icons/pallet.svg'

import { IconTypes } from '../../types';

type IconComponentProps = {
  fill?: string
  icon: IconTypes
  height?: string
  width?: string
}



const IconComponent: React.FC<IconComponentProps> = ({fill, icon, height, width}) => {

  switch(icon){
    case IconTypes.PEN:
      // @ts-ignore
      return <Icon version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24" height={height} width={width} fill={fill}  >
    <g>
      <path d="M2.509,23.827c-0.551,0-1.106-0.048-1.65-0.143c-0.275-0.047-0.499-0.242-0.585-0.507c-0.086-0.262-0.02-0.55,0.172-0.75
       c0.008-0.009,1.221-1.379,1.354-4.723c-0.025-1.18,0.45-2.369,1.303-3.239c0.853-0.796,1.948-1.227,3.094-1.227
       c0.398,0,0.793,0.052,1.175,0.155L17.561,1.409c0.061-0.071,0.123-0.138,0.187-0.203c0.666-0.666,1.551-1.032,2.493-1.032
       c0.941,0,1.825,0.365,2.489,1.029c0.067,0.068,0.132,0.138,0.194,0.21c0.609,0.715,0.903,1.625,0.828,2.563
       c-0.075,0.938-0.511,1.79-1.227,2.399L10.548,16.621c0.376,1.482-0.02,3.064-1.06,4.181C7.68,22.725,5.137,23.827,2.509,23.827z
        M2.269,22.323c0.079,0.002,0.159,0.003,0.238,0.003c2.217,0,4.362-0.929,5.885-2.55c1.067-1.145,1.066-2.941-0.002-4.088
       c-0.564-0.606-1.365-0.953-2.196-0.953c-0.762,0-1.488,0.285-2.044,0.804c-0.552,0.564-0.867,1.363-0.851,2.18
       C3.211,19.955,2.699,21.447,2.269,22.323z M8.866,13.953c0.448,0.313,0.834,0.704,1.142,1.156l2.347-2.008l-1.495-1.495
       L8.866,13.953z M13.499,12.122l8.052-6.888c0.412-0.351,0.662-0.84,0.705-1.378c0.043-0.538-0.126-1.061-0.476-1.472
       c-0.035-0.042-0.072-0.082-0.111-0.12c-0.381-0.381-0.889-0.591-1.429-0.591c-0.541,0-1.048,0.21-1.429,0.591
       c-0.037,0.037-0.073,0.076-0.108,0.117l-6.868,8.078L13.499,12.122z"/>
    </g>
   </Icon>
    case IconTypes.PALLET:
      // @ts-ignore
      return <Icon version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24" height={height} width={width} fill={fill}  >
      <g>
      <path d="M16.5,23.25c-1.62,0-3.206-0.532-4.5-1.504c-1.294,0.972-2.88,1.504-4.5,1.504c-4.135,0-7.5-3.365-7.5-7.5
		c0-2.973,1.808-5.703,4.527-6.883C4.509,8.657,4.5,8.453,4.5,8.25c0-4.135,3.365-7.5,7.5-7.5s7.5,3.365,7.5,7.5
		c0,0.203-0.009,0.407-0.027,0.617C22.192,10.047,24,12.777,24,15.75C24,19.885,20.635,23.25,16.5,23.25z M13.124,20.706
		c0.998,0.685,2.157,1.044,3.376,1.044c3.308,0,6-2.692,6-6c0-2.287-1.287-4.348-3.312-5.363c-0.631,2.124-2.171,3.862-4.214,4.746
		C14.991,15.343,15,15.547,15,15.75C15,17.59,14.337,19.334,13.124,20.706z M4.812,10.387C2.786,11.402,1.5,13.463,1.5,15.75
		c0,3.308,2.692,6,6,6c1.219,0,2.378-0.36,3.376-1.044C9.663,19.334,9,17.59,9,15.75c0-0.203,0.009-0.407,0.027-0.617
		C6.984,14.249,5.443,12.51,4.812,10.387z M10.5,15.75c0,1.473,0.53,2.867,1.5,3.964c0.97-1.097,1.5-2.491,1.5-3.964
		c0-0.05-0.001-0.101-0.002-0.152C13.005,15.699,12.503,15.75,12,15.75c-0.503,0-1.005-0.051-1.498-0.152
		C10.501,15.649,10.5,15.7,10.5,15.75z M10.729,14.113c0.419,0.091,0.845,0.137,1.271,0.137s0.853-0.046,1.271-0.137
		c-0.244-0.86-0.677-1.654-1.271-2.327C11.406,12.459,10.973,13.252,10.729,14.113z M6.229,9.887c0.459,1.617,1.58,2.97,3.084,3.725
		c0.31-1.04,0.843-2.001,1.564-2.819C9.878,10.11,8.719,9.75,7.5,9.75C7.073,9.75,6.647,9.796,6.229,9.887z M13.124,10.794
		c0.721,0.817,1.254,1.778,1.563,2.819c1.504-0.756,2.625-2.109,3.084-3.725C17.353,9.796,16.927,9.75,16.5,9.75
		C15.281,9.75,14.122,10.11,13.124,10.794z M7.5,8.25c1.62,0,3.206,0.532,4.5,1.505c1.294-0.972,2.88-1.505,4.5-1.505
		c0.503,0,1.005,0.051,1.498,0.151C17.999,8.351,18,8.3,18,8.25c0-3.308-2.692-6-6-6c-3.308,0-6,2.692-6,6
		C6,8.3,6.001,8.351,6.002,8.401C6.495,8.301,6.997,8.25,7.5,8.25z"/>
      </g>
     </Icon>
    case IconTypes.ERASER:
      // @ts-ignore
      return <Icon version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24" height={height} width={width} fill={fill}  >
      <g>
      <path d="M5.269,19.252c-0.2,0-0.389-0.078-0.53-0.22L0.52,14.811c-0.69-0.693-0.69-1.82-0.001-2.512L10.687,2.13
		c0.336-0.334,0.782-0.518,1.257-0.518c0.474,0,0.92,0.183,1.255,0.517l5.448,5.448c0.689,0.693,0.689,1.819,0.002,2.511
		L9.76,18.977c-0.142,0.142-0.33,0.22-0.53,0.22s-0.389-0.078-0.53-0.22c-0.292-0.292-0.292-0.768,0-1.061l1.82-1.82l-5.839-5.839
		L1.58,13.358c-0.107,0.108-0.107,0.285,0.001,0.394l4.218,4.22c0.142,0.142,0.22,0.33,0.219,0.531s-0.078,0.389-0.22,0.53
		C5.658,19.174,5.469,19.252,5.269,19.252z M11.58,15.036l6.007-6.007c0.107-0.108,0.106-0.284-0.002-0.393L12.14,3.191
		c-0.051-0.051-0.121-0.08-0.196-0.08c-0.075,0-0.145,0.029-0.198,0.081L5.742,9.196L11.58,15.036z"/>
	<path d="M0.75,22.25C0.336,22.25,0,21.914,0,21.5s0.336-0.75,0.75-0.75h4.5C5.664,20.75,6,21.087,6,21.5s-0.336,0.75-0.75,0.75
		H0.75z"/>
	<path d="M12.75,22.25c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h1.5c0.414,0,0.75,0.336,0.75,0.75s-0.336,0.75-0.75,0.75
		H12.75z"/>
	<path d="M17.25,22.25c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h1.5c0.414,0,0.75,0.336,0.75,0.75s-0.336,0.75-0.75,0.75
		H17.25z"/>
	<path d="M21.75,22.25c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h1.5c0.414,0,0.75,0.336,0.75,0.75s-0.336,0.75-0.75,0.75
		H21.75z"/>
	<path d="M8.25,22.25c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h1.5c0.414,0,0.75,0.336,0.75,0.75s-0.336,0.75-0.75,0.75
		H8.25z"/>
      </g>
     </Icon>
    default:
      return (null)
  }

}

const Icon = styled.svg<{ height: string, width: string, fill?: string, viewBox: string}>`
  height: ${ ({height}) => height ?? "20px"};
  width: ${ ({width}) => width ?? "20px"};
  fill: ${ ({fill}) => fill ?? "#ffffff"};
`

export default IconComponent;