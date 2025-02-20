/* v8 ignore start */

import { Bounds } from './bounds';
import { Grid } from './grid';
import { Cell } from './cell';
import { GameOfLife } from './game-of-life';
import { ConsoleUserInterface } from './console-user-interface';

function createInitialGrid(width: number, height: number): Grid {
    const bounds = Bounds.withSize({ width, height });
    return new Grid({
        cells: [
            // Block (Still Life)
            Cell.aliveCellAt(5, 5),
            Cell.aliveCellAt(5, 6),
            Cell.aliveCellAt(6, 5),
            Cell.aliveCellAt(6, 6),

            // Blinker (Oscillator)
            Cell.aliveCellAt(10, 10),
            Cell.aliveCellAt(10, 11),
            Cell.aliveCellAt(10, 12),

            // Random live cells
            Cell.aliveCellAt(15, 3),
            Cell.aliveCellAt(16, 4),
            Cell.aliveCellAt(17, 5),
            Cell.aliveCellAt(18, 6),
            Cell.aliveCellAt(19, 7),

            Cell.aliveCellAt(25, 15),
            Cell.aliveCellAt(26, 15),
            Cell.aliveCellAt(27, 15),

            Cell.aliveCellAt(30, 20),
            Cell.aliveCellAt(31, 21),
            Cell.aliveCellAt(32, 22),
            Cell.aliveCellAt(33, 23),
            Cell.aliveCellAt(34, 24),
        ],
        bounds,
    });
}

const ui = new ConsoleUserInterface();
ui.resetDisplay();

const game = new GameOfLife(createInitialGrid(80, 40), ui);
let generation = 1;
ui.displayGeneration(generation);


setInterval(() => {
    game.tick();
    generation++;
    ui.displayGeneration(generation);
}, 500);

/* v8 ignore end */
