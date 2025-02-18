# Game Of Life
    
## Description

The universe of the Game of Life is an infinite two-dimensional grid. Any cell of the grid is in one of two possible states: dead or alive. Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent.
The universe evolves with time in steps.

At each step (or tick), the following transitions occur:
- Any live cell with fewer than two live neighbours dies, as if caused by under-population.
- Any live cell with two or three live neighbours should live on to the next generation.
- Any live cell with more than three live neighbours dies, as if by over-population.
- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

The initial pattern constitutes the **seed** of the system. The first generation is created by **applying the above rules simultaneously to every cell in the seed**.

The rules continue to be applied repeatedly to create further generations.

## Unit tests

Run the unit test with this command:

```shell
npm run test
```

## Coverage of unit tests

You can check the code coverage and view the html results by running this command:

```shell
npm run test:coverage && open coverage/index.html
```
