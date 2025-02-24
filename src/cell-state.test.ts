import { describe, expect, it } from 'vitest';
import { CellState } from './cell-state';

describe('CellState', () => {
    it('should create an alive cell', () => {
        const cellState = CellState.alive();

        expect(cellState.isAlive).toBe(true);
    });

    it('should create a dead cell', () => {
        const cellState = CellState.dead();

        expect(cellState.isAlive).toBe(false);
    });
});
