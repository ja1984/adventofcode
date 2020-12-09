const input = ['.##.....#....#....#..#.#...#.##', '.###........#.##....#......#..#', '#..#..#.....#...#....#.#.......', '.........#.................#...', '..#.......#.#.......#.......#.#', '.####........#.#..##.........#.', '........#.........#.........#..', '#..##...##....#.....##......#..', '.........#..............#......', '#.........#...##.........#.#...', '..............#........##.....#', '##....#...........#....#.#...#.', '.....#..#.....#...#.#..........', '#.......#...#..##........##..#.', '.#........#.......#............', '.......##.....#.#.#..#.#.......', '..#......#..#....##......#.#...', '.....##....#..#.....#..#.......', '.............#.......#.#....#..', '.................#.#......#....', '.#..#....#..........#.....#.##.', '#.#.#.#.....###.......#.....#..', '#...#..........#..#............', '...#...##.......#.##..#........', '..#...#.#.##...##.........#.#.#', '.....#...#.#....#.#.....#......', '...#...#.#..#...#.....#........', '...........###.#.......#.#.....', '..#..#.#........#.#.......#.#.#', '.#.......#...........#.........', '.#..#...##....#.......###..##..', '#....#.....#....##..#.........#', '#..#.......#...#......#.#....#.', '......##..#..#....#.#........##', '#.....#.........#......#..##..#', '.#..#.......#....#............#', '....#..........#.#...##....#.##', '..#...#.#...#.###.#..#......#..', '#.#...#..............#.......#.', '..##.......#......#....###.....', '......#.......#.#.##.#..##.#...', '.#......#......#.#....#..#.#..#', '....#....#..#...#.....#.#..#...', '.#.....#.#.#..#........#.#.###.', '#..#..#.#......#..#..#....#.#..', '..#.###....#....##...#.........', '...........#..#...........#....', '.................#..........#.#', '.#.#....#..#........#..#.......', '...........##..#...............', '...#.##.........#.........#.#.#', '........#..#....#.#............', '...##...##..................#.#', '...#..##..#...#......#.....#..#', '.##.#..#..#......#......#.....#', '....#.....#....#......##.#.....', '.....#.##....#...#.............', '......#...#.....##....#...#..##', '...#............#.###....##....', '............#.#.#...#.#........', '#.....#..#.#..##...........#.##', '.....#.#.#.#..##......##.#..#..', '.#.##..#.........#......#.....#', '.#.#.#.#.#..#..#........###....', '......##..........#.#.....##..#', '..#...#..#.....#.#.....#.......', '............#....#.............', '........#...#..#....#.#..###...', '#........##....##..............', '.........#.#.#..#..#...#.#.....', '....#............#....####...#.', '##.#.#......#.....#...#....###.', '...#..#..#..#.......#..#.#.#..#', '..#..#....#...#.##..#.........#', '#..#.#....#....#...#..##..#.#..', '...#....#.............#..#.#..#', '..#......#.##...#..............', '#....##.#.#...##......#.....##.', '.#...##...#...####.....##......', '...........#.###....#...#...#..', '##..#..##..#..#.#.#..###.......', '.#...##......#........##..#....', '.#...#...#.....#............#..', '.#.#.#...#.#..#.......#......#.', '.................#..#.#......#.', '#..#####......##.#....#...#....', '........#......#.....##......#.', '....#.#...#...#..#.......#####.', '.....##......#...#.......#....#', '.#....#...#..#...#.#...#..#...#', '....##.........#.#...####.#....', '...##..........#.#.......##....', '.........#......#.....#....#...', '#....##..#......#.....##....#..', '...#.#.............#...#.....#.', '...........#...#.#....#..#.#...', '.......#.#.#.....#..#........#.', '..##.....#..#.....##..#........', '...#.#..........#...#....#.#...', '..#....#......#...#.#...##..#.#', '.#...#..#..#..#.......#........', '.................#.#...........', '...............#......##.....#.', '..##.....###..#....#.........##', '....#.#........#.####.#...#....', '.....#.....##..####..##.......#', '.....####.#...#......#.........', '........#..#......#.....##.....', '...###..#.#..###.......#.......', '...#...##..#..#..#..#.##.......', '..#......##..#.....##..##......', '#.......#.#..#.................', '#.......#...#..###....#.#.#.#..', '#...#.#....##.##.#...........#.', '.#.........#..###..#.........#.', '#...#......#...#.#.........#...', '.#.##..............#.#....#...#', '........#.....#..#.#.#......#..', '............####.#......#......', '......#.#.#...#.#...#.#.....#..', '....#....#...#.....#.......#.#.', '..#....#....###..#....#.....##.', '.................#.....#.#....#', '.#.............#......#.##..#..', '#.....##.......#..#.....#....#.', '#.#......####...##.....#....##.', '.....#.#....#..................', '....#....#..#.#...........##...', '...#.............##......#..#..', '......#..........#...#...##.###', '...##......##.....#......#....#', '........#.#.#...#...#..##......', '......................###....##', '.#.....#..#..#.##.#.#.#....#.##', '.#..............#.....#......#.', '.#...#.##....#.....#.#.#..#..#.', '##...##.......#.....#..###.....', '...#..#.#....#........#........', '....#..............##...#......', '...........#..#.....##.#.#.#...', '#.#.....##..##.#.#........#....', '.........#....#.....#..##.#...#', '...#...#..#..#.####...#.......#', '.....##.....##.....#......#....', '#.##...#....#............#..##.', '.#.##..#...#....#.#......#.....', '..###................#.........', '.#..#..#................#......', '....#..#........#..#....#......', '.#..........###......#...###...', '...........##...#.#..#.........', '...#....#..........#.....#..##.', '..#..#.............#......###..', '#....#....##.....#....#.##.....', '......#.......#..#..........##.', '#..##.#...#.#.........#....#.#.', '...#...#..........#...#..#....#', '...###..#.#......#.##.#####...#', '..#.....#.#..............#..##.', '#..###......#.#..#........#....', '.#.......#.......#.....#.##....', '.#...##..#.......##.....#....##', '..........#.#..#.....#.........', '.......####...#...#.....##.....', '......#.......#.......#..#.#...', '...##....##.#.......#.##......#', '.#...#............#......##....', '#..#..#...#.#........#.........', '.......#.......#.....##.#......', '.#....##...#....#.........#...#', '#.#....#.....##...........#..#.', '.....#......#....#......#.#...#', '.#............#...#.#....#....#', '........##..#..##..##.##....#..', '........................#.#....', '#....#...#.....................', '##.#.............#.....#...##.#', '....##....###.......#..........', '..#.#..#.#...####.....#.....#..', '#.........#.......#......#..##.', '.#.#.............#..#...#...#..', '#..#....#....#..##.........#...', '#.#.....#.##.#...#.##..#.#..##.', '......#......#.###....#..###...', '.##...#.......#.........#.#...#', '..........#...#....#..#....#...', '.....#...#.....#....##....#.#..', '#....#...........#.#...#.......', '.###..#........##..........#...', '....###.##..#...#.#..##......##', '.#...#...........#...........#.', '#......#....#.##.........##..#.', '.#.......#........#......#.#.#.', '.......#..##.........#......#..', '.#..#.....##....##....#.....#..', '#.#.#.....#...#......#.........', '..............#.#.........#.#..', '....#...#.............#.#......', '..##.#............#.#.##....#..', '.....####..........#.#....##..#', '......#.#.........#.......###..', '#....##.#...#.#...........#...#', '.....#...#......#....###...#..#', '#....#..............#...#......', '...#..###...#..........#....#..', '#......#..#.#.#......#..#...#..', '................##......#..#...', '....#..#..#........##..#...#...', '...##.......#.##.#.....##...#.#', '.......#.##.#..#.....#...#.....', '......#........#..#......##.##.', '....................#.....#.#..', '.##....#...#...##...#.........#', '..#...#..#.##..#.#.#......#....', '#....###.#..#..#...#..#...##...', '#.......#.....#.#.......###.#.#', '.#.##...##..#......#....#...#..', '#.....#.......##..#....#.......', '...###...#............#....#..#', '.#....#.#...#..#..#.##.#.#.#...', '#......#.#..#.#.#......#.......', '..#..#....###.#........#..#.#..', '.......#......##.........#.....', '...#...###..#..#.##.#..##......', '.#.......##.......#..#..#.###.#', '.###.#..#.###...........#......', '...#................#.#...##..#', '....#.###....#.......#........#', '.##...#...#..#.....#...#.......', '.#...#..#...........#.#......##', '...##..#.#.#..#.#.#.......#....', '.#.#..#..#.#...........#.......', '..#....#.#.#.#.#..............#', '..##..............##....#.#..#.', '..#....#...##.....###.....#.#.#', '#....#......#..........##......', '.##.#.#......#...##..###..#....', '.#...........#.##.......##..##.', '###.....##...#.##..#...........', '...#.....#...........#..#.....#', '#.........#....#.......#.......', '.#.#...#.###....#..#...........', '.....#.......#.....#.##.#.#.#..', '..##.#.........##.........#..#.', '.......#....#......#.........##', '...##.....#..#.......#..#.#....', '..#...###.......#..#....###....', '.......#...###......#.#.....#.#', '#....#...#.#....#.#..........#.', '........#..#.....#.#.#.........', '......##.......###.......#...#.', '.........#..#..#.......#.......', '#.......#...#.....#.#..#....#..', '.##....#..###.............#....', '#.#...#.......#.....##.#.#....#', '....#....##.#........##........', '...##...#.#.............#...##.', '##....#.....#..#..#......#.....', '#...#.#........##....##......##', '..#...........#..#......###....', '..##..#.....#......#....##.....', '....###.#...#......##......#...', '....#....###...........###.#..#', '..#....#...#.##....#...#.......', '....##...........#............#', '..#.#......#......#.##.#...#..#', '#.###.............#.#.##.#.....', '#....##....#..#.#.#...........#', '...#...................#.......', '.#...#......#.......#.#....#..#', '....#...#..#..#..#.#.....#....#', '..#....#............#..###..##.', '...##...#...........#..#..#.#..', '..#..#..#.........#.........#.#', '...#.#.....#.#..##.........#...', '....#..........................', '....#.....#.#...#.###.........#', '....#.#.......#..#.#.#...#...#.', '.....#...#..#.....##....#.#.#..', '#....###......#..#..........#..', '.#.....#......##.......#...#.##', '...#..#.....#.#.....#.......##.', '............#..#....#...#..#.#.', '..........#.#..#..##...........', '.......#.......#..##...##.....#', '....#...##.#..#...#.#.......#..', '....#.#........#...####...#....', '#.#.............#.............#', '.#.#......#....#..#..#.....##.#', '#..#...........#........#.....#', '#....#....#.#..#.#....#.#...##.', '....##...##...#...#...........#', '...#.#..#....#..#..#..#........', '...#..##..#........#..........#', '#......#.##..##.......#..#.....', '..#...#......#...##.#..........', '.###.#..#..#........####...#...', '#..............#.#.#........#..', '..##....#.......#....##...#..##', '.##...#..#.#.....#..#.......##.', '..#.........##.......#....#..#.', '.#..#...#..##.#..#.....#.......', '.#....#.........#..#...#...##..', '..###..######..#.##.#....#.....', '....#..#.....#.............#..#', '...#....#.......#..#.#.......##', '.....#......#.......#..##...#..', '.##..#....##..##......#...#..#.', '......#......#...#...###.......', '....#.....#.###..##.....#.#.##.', '.......#....#...#..#..#...#.#..', '...####.#...#...#.#...##....#..', '......#.#....#....#.#....##....', '#..##...........####....##.#...', '...#...##.#.......#.#..........', '..#......#..#..#...#......#....', '..###..#.....#..#.#.......#...#', '#........#...##..#...#....#....', '...#.#...#.....#........#...#..', '...#....#.###...#..#...#..##.#.', '.....#..#..#...#...#..#........', '..#......##...............#.#.#', '.#...###.#....##..........#.#..'];


const smallInput = ['.##.....#....#....#..#.#...#.##', '.###........#.##....#......#..#', '#..#..#.....#...#....#.#.......', '.........#.................#...', '..#.......#.#.......#.......#.#', '.####........#.#..##.........#.', '........#.........#.........#..'];


const steps = [
  { x: 1, y: 1 },
  { x: 3, y: 1 },
  { x: 5, y: 1 },
  { x: 7, y: 1 },
  { x: 1, y: 2 },
]

const isTreeInXPosition = (row, x) => {
  //	console.log(row, x);
  let fullRow = row;
  while (fullRow.length < x) {
    fullRow += row;
  }

  return fullRow.split('')[(x - 1)] === '#';
}

const getTrees = (steps) => {
  let x = 1;
  let trees = 0;

  for (let y = 0; y <= input.length; y += steps.y) {
    const nextRow = input[(y + steps.y)];
    if (!nextRow) {
      console.warn('End of the slope');
      continue;
    }

    x += steps.x;

    if (isTreeInXPosition(nextRow, x)) {
      trees += 1;
    }
  }
  return trees;
}

let allTrees = 1;
steps.forEach((step) => {
  const trees = getTrees(step);
  allTrees *= trees;
});

console.log('Total trees', allTrees)