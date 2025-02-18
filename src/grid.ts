import { Cell } from './cell';
import { Position } from './position';
import { CellState } from './cell-state';
import { Bounds } from './bounds';

type GridOptions = { cells: Cell[]; bounds: Bounds };

export class Grid {
    private readonly cells: Map<Position, Cell>;
    private readonly bounds: Bounds;

    constructor(options: GridOptions) {
        this.cells = new Map(options.cells.map((it) => [it.getPosition(), it]));
        this.bounds = options.bounds;
    }

    nextGeneration(): Grid {
        return new Grid({
            cells: [
                new Cell(new Position(0, 0), CellState.alive()),
                new Cell(new Position(0, 1), CellState.alive()),
                new Cell(new Position(1, 0), CellState.alive()),
                new Cell(new Position(1, 1), CellState.alive()),
            ],
            bounds: this.bounds,
        });
    }
}
