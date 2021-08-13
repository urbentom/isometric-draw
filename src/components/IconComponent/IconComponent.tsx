import React from 'react';
import styled from 'styled-components';

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
    case IconTypes.GITHUB:
      // @ts-ignore
      return <Icon version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24" height={height} width={width} fill={fill}  >
      <path d="M12,0A12,12,0,0,0,8.59,23.5a1.25,1.25,0,0,0,1.61-1.2V20a.75.75,0,0,0-.91-.73A2,2,0,0,1,6.66,18l-.11-.27.18.13a2.62,2.62,0,0,0,3.06.5.75.75,0,0,0,.44-.58,4.84,4.84,0,0,1,.38-1.36.75.75,0,0,0-.41-1.31c-2.4-.27-3.85-.66-3.85-3.66A3.1,3.1,0,0,1,7.18,9.3a.75.75,0,0,0,.14-.79,2.65,2.65,0,0,1-.06-1.57A5.46,5.46,0,0,1,9,7.81a.76.76,0,0,0,.62.1,8.76,8.76,0,0,1,2.28-.31,8.67,8.67,0,0,1,2.29.31.75.75,0,0,0,.62-.1,5.63,5.63,0,0,1,1.76-.87,2.66,2.66,0,0,1-.05,1.57.75.75,0,0,0,.14.79,3.09,3.09,0,0,1,.82,2.15c0,3-1.46,3.38-3.86,3.65a.75.75,0,0,0-.64.52.74.74,0,0,0,.22.79,3.61,3.61,0,0,1,.43,1.77v4.17a1.25,1.25,0,0,0,1.25,1.25,1.19,1.19,0,0,0,.34,0A12,12,0,0,0,12,0Zm3.16,22V18.18a5.94,5.94,0,0,0-.27-1.72c1.93-.31,4.12-1.18,4.12-5a4.62,4.62,0,0,0-.93-2.83,4.52,4.52,0,0,0-.24-2.73.75.75,0,0,0-.47-.44c-.26-.08-1.24-.25-3.09.92a10.19,10.19,0,0,0-4.7,0c-1.85-1.18-2.83-1-3.09-.92A.75.75,0,0,0,6,5.9a4.51,4.51,0,0,0-.24,2.73,4.62,4.62,0,0,0-.93,2.83c0,3.83,2.21,4.69,4.14,5-.07.24-.13.47-.17.66-.42.11-.65-.06-1.2-.47a7.19,7.19,0,0,0-2.81-1.38.75.75,0,0,0-.74,1.22,5.23,5.23,0,0,1,1.17,2A3.52,3.52,0,0,0,8.7,20.89V22a10.5,10.5,0,1,1,6.46,0Z"/>
     </Icon>
    case IconTypes.HIDE_GRID:
      // @ts-ignore
      return <Icon version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24" height={height} width={width} fill={fill}  >
      <g>
	<path d="M3.749,19.5c-2.068,0-3.75-1.682-3.75-3.75v-12c0-2.068,1.682-3.75,3.75-3.75h12c2.068,0,3.75,1.682,3.75,3.75v9
		c0,0.414-0.336,0.75-0.75,0.75H7.499v5.25c0,0.414-0.336,0.75-0.75,0.75H3.749z M1.499,15.75c0,1.241,1.009,2.25,2.25,2.25h2.25
		v-4.5h-4.5V15.75z M17.999,12V7.5h-4.5V12H17.999z M11.999,12V7.5h-4.5V12H11.999z M5.999,12V7.5h-4.5V12H5.999z M17.999,6V3.75
		c0-1.241-1.009-2.25-2.25-2.25h-2.25V6H17.999z M11.999,6V1.5h-4.5V6H11.999z M5.999,6V1.5h-2.25c-1.241,0-2.25,1.009-2.25,2.25V6
		H5.999z"/>
	<path d="M11.273,21.016c-0.138,0-0.273-0.038-0.391-0.11c-0.461-0.281-0.905-0.6-1.32-0.947c-0.069-0.058-0.134-0.123-0.192-0.192
		c-0.56-0.664-0.475-1.661,0.19-2.222c1.94-1.631,4.403-2.534,6.936-2.544h0.047c0.414,0,0.75,0.336,0.75,0.75
		s-0.336,0.75-0.75,0.75h-0.044c-2.18,0.009-4.302,0.787-5.972,2.191c-0.02,0.016-0.025,0.037-0.026,0.052
		c-0.001,0.015,0.001,0.037,0.018,0.057c0.365,0.307,0.748,0.582,1.146,0.825c0.353,0.216,0.465,0.678,0.25,1.031
		C11.776,20.882,11.537,21.016,11.273,21.016z"/>
	<path d="M16.458,22.499c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h0.041c2.18-0.009,4.302-0.787,5.973-2.191
		c0.015-0.013,0.024-0.031,0.026-0.052c0.002-0.022-0.004-0.041-0.018-0.058c-0.365-0.307-0.748-0.581-1.146-0.824
		c-0.353-0.216-0.464-0.678-0.249-1.031c0.137-0.225,0.377-0.359,0.641-0.359c0.138,0,0.272,0.038,0.39,0.109
		c0.46,0.281,0.904,0.6,1.32,0.947c0.071,0.06,0.132,0.121,0.189,0.188c0.563,0.666,0.48,1.664-0.185,2.227
		c-1.941,1.631-4.404,2.534-6.937,2.544c0,0-0.001,0-0.001,0H16.458z"/>
	<path d="M11.25,24c-0.219,0-0.427-0.095-0.569-0.262c-0.13-0.152-0.194-0.346-0.178-0.546c0.015-0.2,0.108-0.382,0.26-0.512l10.5-9
		c0.136-0.117,0.31-0.181,0.488-0.181c0.219,0,0.427,0.095,0.569,0.261c0.27,0.314,0.233,0.789-0.081,1.058l-10.5,9
		C11.602,23.936,11.429,24,11.25,24z"/>
</g>
     </Icon>
    case IconTypes.SHOW_GRID:
      // @ts-ignore
      return <Icon version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24" height={height} width={width} fill={fill}  >
      <g>
	<path d="M3.75,19.5C1.682,19.5,0,17.818,0,15.75v-12C0,1.682,1.682,0,3.75,0h12c2.068,0,3.75,1.682,3.75,3.75v4.5
		C19.5,8.664,19.164,9,18.75,9S18,8.664,18,8.25V7.5h-4.5v2.25c0,0.414-0.336,0.75-0.75,0.75S12,10.164,12,9.75V7.5H7.5V12h2.25
		c0.414,0,0.75,0.336,0.75,0.75s-0.336,0.75-0.75,0.75H7.5V18h0.75C8.664,18,9,18.336,9,18.75S8.664,19.5,8.25,19.5H3.75z
		 M1.5,15.75C1.5,16.991,2.509,18,3.75,18H6v-4.5H1.5V15.75z M6,12V7.5H1.5V12H6z M18,6V3.75c0-1.241-1.009-2.25-2.25-2.25H13.5V6
		H18z M12,6V1.5H7.5V6H12z M6,6V1.5H3.75C2.509,1.5,1.5,2.509,1.5,3.75V6H6z"/>
	<path d="M17.25,24c-3.722,0-6.75-3.028-6.75-6.75s3.028-6.75,6.75-6.75S24,13.528,24,17.25S20.972,24,17.25,24z M17.25,12
		C14.355,12,12,14.355,12,17.25s2.355,5.25,5.25,5.25s5.25-2.355,5.25-5.25S20.145,12,17.25,12z"/>
	<path d="M17.25,21c-0.414,0-0.75-0.336-0.75-0.75V18h-2.25c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h2.25v-2.25
		c0-0.414,0.336-0.75,0.75-0.75S18,13.836,18,14.25v2.25h2.25c0.414,0,0.75,0.336,0.75,0.75S20.664,18,20.25,18H18v2.25
		C18,20.664,17.664,21,17.25,21z"/>
</g>
     </Icon>
    case IconTypes.COOKIE:
      // @ts-ignore
      return <Icon version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24" height={height} width={width} fill={fill}  >
      <g>
	<path d="M11.977,23.977c-6.451,0-11.71-5.052-11.971-11.502C-0.124,9.276,1,6.217,3.17,3.863c2.171-2.354,5.128-3.722,8.327-3.852
		c0.005,0,0.033-0.001,0.038-0.001c0.242,0,0.47,0.122,0.61,0.325c0.147,0.214,0.173,0.483,0.071,0.721
		c-0.162,0.377-0.245,0.776-0.244,1.187c0.001,0.8,0.313,1.553,0.88,2.118c0.566,0.565,1.318,0.876,2.117,0.876
		c0.648-0.002,1.286-0.22,1.798-0.614c0.131-0.1,0.293-0.155,0.457-0.155c0.114,0,0.229,0.027,0.331,0.077
		c0.258,0.127,0.419,0.385,0.419,0.673v0.025c0.001,1.651,1.345,2.994,2.996,2.994c0.473-0.002,0.946-0.12,1.365-0.342
		c0.108-0.057,0.229-0.086,0.35-0.086c0.097,0,0.192,0.019,0.283,0.055C23.176,7.95,23.333,8.12,23.4,8.331
		c0.329,1.026,0.518,2.094,0.562,3.172c0.13,3.2-0.994,6.258-3.165,8.612c-2.17,2.354-5.128,3.722-8.327,3.852
		C12.306,23.974,12.141,23.977,11.977,23.977L11.977,23.977z M10.518,1.603C8.126,1.938,5.924,3.089,4.273,4.88
		c-1.899,2.06-2.882,4.736-2.769,7.535c0.229,5.643,4.829,10.062,10.472,10.062c0.144,0,0.288-0.003,0.433-0.009
		c2.799-0.114,5.386-1.31,7.286-3.37c1.899-2.06,2.882-4.736,2.768-7.535c-0.027-0.673-0.12-1.344-0.275-1.999
		c-0.394,0.113-0.8,0.172-1.211,0.174c0,0-0.005,0-0.005,0c-2.032,0-3.818-1.399-4.341-3.325c-0.526,0.212-1.09,0.323-1.655,0.325
		c-1.205,0-2.333-0.467-3.183-1.314c-0.85-0.849-1.319-1.978-1.32-3.179C10.473,2.029,10.488,1.815,10.518,1.603z"/>
	<path d="M7.473,13.488c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3S9.127,13.488,7.473,13.488z M7.473,8.988
		c-0.827,0-1.5,0.673-1.5,1.5s0.673,1.5,1.5,1.5s1.5-0.673,1.5-1.5S8.3,8.988,7.473,8.988z"/>
	<path d="M14.223,19.488c-1.241,0-2.25-1.009-2.25-2.25s1.009-2.25,2.25-2.25s2.25,1.009,2.25,2.25S15.464,19.488,14.223,19.488z
		 M14.223,16.488c-0.414,0-0.75,0.336-0.75,0.75s0.336,0.75,0.75,0.75s0.75-0.336,0.75-0.75S14.637,16.488,14.223,16.488z"/>
	<circle cx="7.1" cy="16.863" r="1.125"/>
	<path d="M13.096,11.239c-0.236,0-0.463-0.073-0.656-0.212c-0.244-0.176-0.405-0.436-0.453-0.733
		c-0.049-0.295,0.021-0.592,0.196-0.836c0.175-0.244,0.434-0.405,0.73-0.454c0.064-0.01,0.125-0.015,0.185-0.015
		c0.554,0,1.021,0.397,1.11,0.945c0.048,0.296-0.022,0.594-0.197,0.838c-0.176,0.244-0.436,0.405-0.733,0.453
		C13.218,11.234,13.157,11.239,13.096,11.239z"/>
	<path d="M19.097,14.238c-0.236,0-0.463-0.073-0.656-0.212c-0.244-0.176-0.405-0.436-0.453-0.733
		c-0.099-0.611,0.317-1.19,0.929-1.29c0.063-0.01,0.123-0.015,0.182-0.015c0.554,0,1.021,0.397,1.11,0.944
		c0.1,0.612-0.317,1.191-0.929,1.291C19.218,14.234,19.157,14.238,19.097,14.238z"/>
</g>
     </Icon>
    case IconTypes.SWATCH_PALLET:
      // @ts-ignore
      return <Icon version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24" height={height} width={width} fill={fill}  >
      <g>
	<path d="M5.286,7.5c-1.241,0-2.25-1.009-2.25-2.25S4.046,3,5.286,3s2.25,1.009,2.25,2.25S6.527,7.5,5.286,7.5z M5.286,4.5
		c-0.414,0-0.75,0.336-0.75,0.75S4.873,6,5.286,6s0.75-0.336,0.75-0.75S5.7,4.5,5.286,4.5z"/>
	<path d="M5.286,13.5c-1.241,0-2.25-1.009-2.25-2.25C3.036,10.01,4.046,9,5.286,9s2.25,1.009,2.25,2.25
		C7.536,12.491,6.527,13.5,5.286,13.5z M5.286,10.5c-0.414,0-0.75,0.336-0.75,0.75S4.873,12,5.286,12s0.75-0.336,0.75-0.75
		S5.7,10.5,5.286,10.5z"/>
	<path d="M5.286,19.5c-1.241,0-2.25-1.009-2.25-2.25S4.046,15,5.286,15s2.25,1.009,2.25,2.25S6.527,19.5,5.286,19.5z M5.286,16.5
		c-0.414,0-0.75,0.336-0.75,0.75S4.873,18,5.286,18s0.75-0.336,0.75-0.75S5.7,16.5,5.286,16.5z"/>
	<path d="M5.285,24c-2.571,0-4.662-2.092-4.663-4.663V2.707C0.622,1.215,1.837,0,3.329,0h3.913c1.492,0.001,2.706,1.215,2.706,2.707
		v14.881l6.393-11.072c0.333-0.576,0.135-1.316-0.442-1.649L12.51,2.912C12.327,2.806,12.116,2.75,11.9,2.75l-0.042,0.001
		c-0.399,0-0.731-0.33-0.739-0.735c-0.004-0.2,0.07-0.39,0.209-0.535c0.139-0.145,0.326-0.226,0.526-0.23l0.062-0.001
		c0.469,0,0.934,0.126,1.345,0.363l3.388,1.956c1.292,0.746,1.737,2.405,0.99,3.698l-7.441,12.889l11.072-6.395
		c0.575-0.333,0.773-1.072,0.441-1.648l-1.957-3.389c-0.079-0.136-0.182-0.254-0.307-0.35c-0.328-0.252-0.39-0.724-0.139-1.052
		c0.143-0.187,0.36-0.294,0.595-0.294c0.166,0,0.324,0.053,0.456,0.155c0.282,0.217,0.515,0.483,0.693,0.79l1.957,3.389
		c0.745,1.292,0.301,2.95-0.99,3.696L7.666,23.35c-0.021,0.012-0.044,0.023-0.068,0.032C6.894,23.786,6.095,24,5.285,24
		C5.285,24,5.285,24,5.285,24z M3.329,1.5c-0.666,0-1.207,0.542-1.207,1.207v16.63c0,1.743,1.419,3.162,3.163,3.163
		c0.845,0,1.639-0.329,2.237-0.926c0.598-0.597,0.927-1.392,0.927-2.237V2.707c0-0.665-0.541-1.207-1.206-1.207H3.329z"/>
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