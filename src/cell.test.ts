import { describe, expect, it } from 'vitest';
import { Position } from './position';
import { CellState } from './cell-state';
import { Cell } from './cell';

describe('Cell', () => {
    it('should keep the same row column for the next generation', () => {
        const cell = new Cell(new Position(0, 0), CellState.alive());

        const newCell = cell.nextGeneration(0);

        expect(newCell.equals(cell)).toBe(true);
    });
});