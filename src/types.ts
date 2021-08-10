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
