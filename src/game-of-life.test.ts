import { beforeEach, describe, expect, it } from 'vitest';
import { GameOfLife } from './game-of-life';
import { Bounds } from './bounds';
import { Grid } from './grid';
import { Cell } from './cell';

describe('Game Of Life', () => {
    it('should print the initial grid as expected', () => {
        const gameOfLife = new GameOfLife(createInitialGrid(4, 4));

        const representation = gameOfLife.toString();

        const expected = `
 ██ 
█  █
 █  
  █ 
`;

        expect('\n'+ representation).toBe(expected);
    });

    function createInitialGrid(width: number, height: number): Grid {
        const bounds = Bounds.withSize({ width, height });
        return new Grid({
            cells: [
                Cell.aliveCellAt(0, 1),
                Cell.aliveCellAt(0, 2),

                Cell.aliveCellAt(1, 0),
                Cell.aliveCellAt(1, 3),

                Cell.aliveCellAt(2, 1),

                Cell.aliveCellAt(3, 2),
            ],
            bounds,
        });
    }
});
