type Point = {
  x:number,
  y:number
}

type Loc = {
  lat: number;
  long: number;
}

let coordinates: Point | Loc = {x:1, y: 34}
coordinates = {lat: 232, long: 55}
