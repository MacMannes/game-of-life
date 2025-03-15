import { describe, expect, it } from 'vitest';
import { Position } from 'src/position.ts';
import { CellState } from 'src/cell-state.ts';
import { Cell } from 'src/cell.ts';

describe('Cell', () => {
    it('should keep the same row column for the next generation', () => {
        const cell = new Cell(new Position(0, 0), CellState.alive());

        const nextGeneration = cell.nextGeneration(0);

        expect(nextGeneration.equals(cell)).toBe(true);
    });

    it('should die if it has less than two live neighbours', () => {
        const cell = new Cell(new Position(0, 0), CellState.alive());

        const nextGeneration = cell.nextGeneration(1);

        expect(nextGeneration.isAlive()).toBe(false);
    });

    it('should survive when it has two or three live neighbours', () => {
        const cell = new Cell(new Position(0, 0), CellState.alive());

        const nextGeneration = cell.nextGeneration(2);

        expect(nextGeneration.isAlive()).toBe(true);
    });

    it('should become alive when it was dead and has exactly three neighbours', () => {
        const cell = new Cell(new Position(0, 0), CellState.alive());

        const nextGeneration = cell.nextGeneration(3);

        expect(nextGeneration.isAlive()).toBe(true);
    });
});
