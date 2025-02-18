import { describe, expect, it } from 'vitest';
import { Cell } from './cell';
import { Grid } from './grid';
import { Bounds } from './bounds';

describe('Grid', () => {
    it('should evolve correctly with a 2x2 grid using the Game of Life rule', () => {
        const bounds = Bounds.withMax(2, 2);
        const grid = new Grid({
            cells: [Cell.aliveCellAt(0, 0), Cell.aliveCellAt(0, 1), Cell.aliveCellAt(1, 0), Cell.deadCellAt(1, 1)],
            bounds,
        });

        const nextGeneration = grid.nextGeneration();

        expect(nextGeneration).toStrictEqual(
            new Grid({
                cells: [Cell.aliveCellAt(0, 0), Cell.aliveCellAt(0, 1), Cell.aliveCellAt(1, 0), Cell.aliveCellAt(1, 1)],
                bounds,
            }),
        );
    });

    it('should evolve correctly with a 4x4 grid, specifying only the alive cells', () => {
        // .XX.
        // X..X
        // .X..
        // ..X.

        const bounds = Bounds.withMax(4, 4);
        const grid = new Grid({
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

        const nextGeneration = grid.nextGeneration();

        // .X..
        // XX..
        // .XX.
        // ..X.
        expect(nextGeneration).toStrictEqual(
            new Grid({
                cells: [
                    Cell.aliveCellAt(0, 0),
                    Cell.aliveCellAt(0, 1),
                    Cell.aliveCellAt(0, 2),
                    Cell.aliveCellAt(0, 3),

                    Cell.aliveCellAt(1, 0),
                    Cell.aliveCellAt(1, 1),

                    Cell.aliveCellAt(2, 1),
                    Cell.aliveCellAt(2, 2),

                    Cell.aliveCellAt(3, 2),
                ],
                bounds,
            }),
        );
    });
});
