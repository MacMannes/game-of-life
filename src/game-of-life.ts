import { Grid } from './grid';

export class GameOfLife {
    private grid: Grid;

    constructor(seed: Grid) {
        this.grid = seed;
    }

    tick() {
        this.grid = this.grid.nextGeneration();
    }

    toString(): string {
        return this.grid.toString();
    }
}
