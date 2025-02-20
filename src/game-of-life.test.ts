import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { GameOfLife } from './game-of-life';
import { Bounds } from './bounds';
import { Grid } from './grid';
import { Cell } from './cell';
import { UserInterface } from './user-interface';

describe('Game Of Life', () => {
    const ui: UserInterface = {
        displayWorld: vi.fn(),
        resetDisplay: vi.fn(),
        displayGeneration: vi.fn(),
    };

    afterEach(() => {
        vi.resetAllMocks();
    })

    it('should print the initial grid on creation', (seed: Grid) => {
        new GameOfLife(createInitialGrid(4, 4), ui);

        const expected = stripFirstLine(`
 ■■ 
■  ■
 ■  
  ■ 
`);
        expect(ui.displayWorld).toBeCalledWith(expected);
    });

    it('should display the evolved grid after a tick ', () => {
        const gameOfLife = new GameOfLife(createInitialGrid(4, 4), ui);

        gameOfLife.tick();

        const expected = stripFirstLine(`
 ■■ 
■   
 ■■ 
    
`);
        expect(ui.displayWorld).toBeCalledWith(expected);
    });

    it('should reset the display before displaying the new generation in a tick', () => {
        const gameOfLife = new GameOfLife(createInitialGrid(4, 4), ui);

        gameOfLife.tick();
        expect(ui.resetDisplay).toHaveBeenCalledOnce();
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

    function stripFirstLine(str: string): string {
        return str.split('\n').slice(1).join('\n');
    }
});
