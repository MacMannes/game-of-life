import { describe, expect, it } from 'vitest';
import { GameOfLife } from './game-of-life';

describe('Game Of Life', () => {
    it('Creating an instance of the GameOfLife class should work', () => {
        const gameOfLife = new GameOfLife();
        expect(gameOfLife).toBeDefined();
    });
});
