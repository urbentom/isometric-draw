import React, {useContext} from 'react';
import styled from 'styled-components';

import ToolBarContext from '../../contexts/ToolBarContext';

// Types
import { Pallet } from '../../types';


type PalletComponentProps = {
    pallet: Pallet,
    onClick?: () => void
}

const PalletComponent: React.FC<PalletComponentProps> = (props) => {

    const { setPallet } = useContext(ToolBarContext);

    const onClick = () => {
        setPallet(props.pallet)
        if(props.onClick) props.onClick(); 
    }

    return (
        <PalletWrapper onClick={onClick}>
            <ColoursWrapper>
                {props.pallet.colours.map( (colour) => <Colour key={colour} colour={colour}  />)}
            </ColoursWrapper>
            <Text>{props.pallet.name}</Text>
        </PalletWrapper>
    )
}

const PalletWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #261C2C;
    transition: background-color 0.2s;
    width: 150px;
    margin-bottom: 15px;
    padding: 5px;
    cursor: pointer;
    :hover{
        background-color: #3E2C41;
      }
`

const ColoursWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 5px;
    
`
const Colour = styled.div<{colour: string}>`
    background-color: ${ ({colour}) => colour};
    height: 40px;
    width: 20px;
    border-radius: 5px;
    margin-right: 5px;
`

const Text = styled.div`
    margin: 0;
`

export default PalletComponent;