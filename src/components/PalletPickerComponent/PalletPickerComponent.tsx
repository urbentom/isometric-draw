import React from 'react';
import styled from 'styled-components';

// Components
import PalletComponent from '../PalletComponent';

// Pallets
import { ACPallet, PinkSeaPallet, BeigePallet, SummerNeonPallet } from "../../constants/pallet";


type PalletPickerComponentProps = {
    onClick?: () => void
}

const PalletPickerComponent: React.FC<PalletPickerComponentProps> = (props) => {

    return (
        <>
            <PalletComponent onClick={props.onClick} pallet={ACPallet} />
            <PalletComponent onClick={props.onClick} pallet={PinkSeaPallet} />
            <PalletComponent onClick={props.onClick} pallet={BeigePallet} />
            <PalletComponent onClick={props.onClick} pallet={SummerNeonPallet} />
        </>
    )
    

}

export default PalletPickerComponent;