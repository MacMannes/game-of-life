import { beforeEach, describe, expect, it, vi } from 'vitest';
import { GameOfLife } from './game-of-life';
import { Bounds } from './bounds';
import { Grid } from './grid';
import { Cell } from './cell';
import { UserInterface } from './UserInterface';

describe('Game Of Life', () => {
    const ui: UserInterface = {
        displayWorld: vi.fn(),
        resetDisplay: vi.fn(),
    };


    it('should print the initial grid as expected', () => {
        new GameOfLife(createInitialGrid(4, 4));

        const expected = stripFirstLine(`
 ██ 
█  █
 █  
  █ 
`);
        expect(ui.displayWorld).toBeCalledWith(expected);
    });

    it('should evolve the grid state and display it after a tick ', () => {
        const gameOfLife = new GameOfLife(createInitialGrid(4, 4));

        gameOfLife.tick();

        const expected = stripFirstLine(`
 ██ 
█   
 ██ 
    
`);
        expect(ui.displayWorld).toBeCalledWith(expected);
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
