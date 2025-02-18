import { describe, expect, it } from 'vitest';
import { Cell } from './cell';
import { Position } from './position';
import { Grid } from './grid';
import { CellState } from './cell-state';

describe('Grid', () => {
    it('should evolve correctly using the Game of Life rule', () => {
        const grid = new Grid([
            new Cell(new Position(0, 0), CellState.alive()),
            new Cell(new Position(0, 1), CellState.alive()),
            new Cell(new Position(1, 0), CellState.alive()),
            new Cell(new Position(1, 1), CellState.dead()),
        ]);

        const nextGeneration = grid.nextGeneration();

        expect(nextGeneration).toStrictEqual(
            new Grid([
                new Cell(new Position(0, 0), CellState.alive()),
                new Cell(new Position(0, 1), CellState.alive()),
                new Cell(new Position(1, 0), CellState.alive()),
                new Cell(new Position(1, 1), CellState.alive()),
            ]),
        );
    });
});
