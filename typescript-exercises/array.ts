const activeUsers: [] = []
//^doing this is saying its of type empty array cannot do this

const activeUsers2: string[] = []
activeUsers2.push('tony');

const ageList: number[] = [45,56,13]
ageList[0] = 99;

//const bools: Array<boolean> = [] // that is the same as below
const bools: boolean[] = []

type Point = {
  x: number,
  y: number
}

const coords: Point[] = []
coords.push({x:23, y:8})

const board: string[][] = [
  ['X', 'O', 'X'],
  ['X', 'O', 'X'],
  ['X', 'O', 'X']
];

const demo: number[][][] = [[[1]]]
