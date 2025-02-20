import { Grid } from './grid';
import { UserInterface } from './UserInterface';

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
        this.displayGrid();
    }
}
