export type Dimensions = {
  height: number
  width: number
}

export type Shape = {
  id: string
  colour?: string
  shape: Point[]
}

export type Point = {
  x: number,
  y: number
}

export enum IconTypes {
	PEN = 'pen',
	ERASER = 'eraser',
	PALLET = 'pallet',
	GITHUB = 'github',
	SHOW_GRID = 'showGrid',
	HIDE_GRID = 'hideGrid',
	COOKIE = 'cookie',
	SWATCH_PALLET = 'swatchPallet',
	SAVE = 'save',
}

export enum Tools {
  PAINT,
  ERASE
}

export type Colour = {
  name: string,
  default: string,
  lighten: string,
  darken: string
}

export type Pallet = {
  name: string,
  colours: string[]
}