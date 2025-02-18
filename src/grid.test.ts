import { describe, expect, it } from 'vitest';
import { Cell } from './cell';
import { Position } from './position';
import { Grid } from './grid';
import { CellState } from './cell-state';
import { Bounds } from './bounds';

describe('Grid', () => {
    it('should evolve correctly with a 2x2 grid using the Game of Life rule', () => {
        const grid = new Grid({
            cells: [
                new Cell(new Position(0, 0), CellState.alive()),
                new Cell(new Position(0, 1), CellState.alive()),
                new Cell(new Position(1, 0), CellState.alive()),
                new Cell(new Position(1, 1), CellState.dead()),
            ],
            bounds: new Bounds(new Position(0, 0), new Position(2, 2)),
        });

        const nextGeneration = grid.nextGeneration();

        expect(nextGeneration).toStrictEqual(
            new Grid({
                cells: [
                    new Cell(new Position(0, 0), CellState.alive()),
                    new Cell(new Position(0, 1), CellState.alive()),
                    new Cell(new Position(1, 0), CellState.alive()),
                    new Cell(new Position(1, 1), CellState.alive()),
                ],
                bounds: new Bounds(new Position(0, 0), new Position(2, 2)),
            }),
        );
    });

    it('should evolve correctly with a 4x4 grid, specifying only the alive cells', () => {
        // .XX.
        // X..X
        // .X..
        // ..X.

        const grid = new Grid({
            cells: [
                new Cell(new Position(0, 1), CellState.alive()),
                new Cell(new Position(0, 2), CellState.alive()),
                new Cell(new Position(1, 0), CellState.alive()),
                new Cell(new Position(1, 3), CellState.alive()),
                new Cell(new Position(2, 1), CellState.alive()),
                new Cell(new Position(3, 2), CellState.alive()),
            ],
            bounds: new Bounds(new Position(0, 0), new Position(4, 4)),
        });

        const nextGeneration = grid.nextGeneration();

        // .X..
        // XX..
        // .XX.
        // ..X.
        expect(nextGeneration).toStrictEqual(
            new Grid({
                cells: [
                    new Cell(new Position(0, 0), CellState.alive()),
                    new Cell(new Position(0, 1), CellState.alive()),
                    new Cell(new Position(0, 2), CellState.alive()),
                    new Cell(new Position(0, 3), CellState.alive()),

                    new Cell(new Position(1, 0), CellState.alive()),
                    new Cell(new Position(1, 1), CellState.alive()),

                    new Cell(new Position(2, 1), CellState.alive()),
                    new Cell(new Position(2, 2), CellState.alive()),

                    new Cell(new Position(3, 2), CellState.alive()),
                ],
                bounds: new Bounds(new Position(0, 0), new Position(4, 4)),
            }),
        );
    });
});
