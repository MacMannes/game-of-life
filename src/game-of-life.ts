import { Grid } from './grid';

export class GameOfLife {
    private grid: Grid;

    constructor(seed: Grid) {
        this.grid = seed;
    }

    toString(): string {
        return this.grid.toString();
    }
}
