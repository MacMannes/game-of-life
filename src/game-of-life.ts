import { Grid } from 'src/grid.ts';
import type { UserInterface } from 'src/user-interface.ts';

export class GameOfLife {
    private grid: Grid;
    private readonly ui: UserInterface;

    constructor(seed: Grid, ui: UserInterface) {
        this.grid = seed;
        this.ui = ui;

        this.displayGrid();
    }

    private displayGrid() {
        this.ui.displayWorld(this.grid.toString());
    }

    tick() {
        this.grid = this.grid.nextGeneration();
        this.ui.resetDisplay();
        this.displayGrid();
    }
}
