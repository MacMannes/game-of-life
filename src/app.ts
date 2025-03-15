/* v8 ignore start */

import { Bounds } from './bounds.ts';
import { Grid } from './grid.ts';
import { GameOfLife } from './game-of-life.ts';
import { ConsoleUserInterface } from './console-user-interface.ts';
import { Cell } from './cell.ts';

function createInitialGrid(width: number, height: number): Grid {
    const bounds = Bounds.withSize({ width, height });
    return new Grid({
        cells: [
            // Left square block
            Cell.aliveCellAt(7, 1),
            Cell.aliveCellAt(8, 1),
            Cell.aliveCellAt(7, 2),
            Cell.aliveCellAt(8, 2),

            // Left glider generator
            Cell.aliveCellAt(7, 11),
            Cell.aliveCellAt(8, 11),
            Cell.aliveCellAt(9, 11),
            Cell.aliveCellAt(6, 12),
            Cell.aliveCellAt(10, 12),
            Cell.aliveCellAt(5, 13),
            Cell.aliveCellAt(11, 13),
            Cell.aliveCellAt(5, 14),
            Cell.aliveCellAt(11, 14),
            Cell.aliveCellAt(8, 15),
            Cell.aliveCellAt(6, 16),
            Cell.aliveCellAt(10, 16),
            Cell.aliveCellAt(7, 17),
            Cell.aliveCellAt(8, 17),
            Cell.aliveCellAt(9, 17),
            Cell.aliveCellAt(8, 18),

            // Right part of the gun
            Cell.aliveCellAt(5, 21),
            Cell.aliveCellAt(6, 21),
            Cell.aliveCellAt(7, 21),
            Cell.aliveCellAt(5, 22),
            Cell.aliveCellAt(6, 22),
            Cell.aliveCellAt(7, 22),
            Cell.aliveCellAt(4, 23),
            Cell.aliveCellAt(8, 23),
            Cell.aliveCellAt(3, 25),
            Cell.aliveCellAt(4, 25),
            Cell.aliveCellAt(8, 25),
            Cell.aliveCellAt(9, 25),

            // Far right moving part
            Cell.aliveCellAt(5, 35),
            Cell.aliveCellAt(6, 35),
            Cell.aliveCellAt(5, 36),
            Cell.aliveCellAt(6, 36),
        ],
        bounds,
    });
}

const ui = new ConsoleUserInterface();
ui.resetDisplay();

const game = new GameOfLife(createInitialGrid(90, 30), ui);
let generation = 1;
ui.displayGeneration(generation);

setInterval(() => {
    game.tick();
    generation++;
    ui.displayGeneration(generation);
}, 200);

/* v8 ignore end */
