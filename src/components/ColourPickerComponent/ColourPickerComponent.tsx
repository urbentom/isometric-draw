import React from 'react';
import styled from 'styled-components';

// Components
import ColourComponent from '../ColourComponent';

// Types
import { Colour } from '../../types';


type ColourPalletComponentProps = {
    colour: Colour,
    currentColour: string,
    onClick: (colour: string) => void
}

const ColourPickerComponent: React.FC<ColourPalletComponentProps> = (props) => {

    return <ColourPalletWrapper>
        <ColourComponent colour={props.colour.lighten} onClick={() => props.onClick(props.colour.lighten)} active={props.colour.lighten === props.currentColour} />
        <ColourComponent colour={props.colour.default} onClick={() => props.onClick(props.colour.default)} active={props.colour.default === props.currentColour} />
        <ColourComponent colour={props.colour.darken} onClick={() => props.onClick(props.colour.darken)} active={props.colour.darken === props.currentColour} />
    </ColourPalletWrapper>

}

const ColourPalletWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export default ColourPickerComponent;