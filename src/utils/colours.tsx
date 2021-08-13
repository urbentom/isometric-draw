import tinyColor from 'tinycolor2';
import { Colour } from '../types';

export const expandColourPallet = (colourPallet: string[]): Colour[] => {

    const colours: Colour[] = colourPallet.map( (colour): Colour => {
        return {
            name: "Temp",
            default: colour,
            lighten: tinyColor(colour).lighten().toString(),
            darken: tinyColor(colour).darken().toString()
        }
    });

    return colours;

}