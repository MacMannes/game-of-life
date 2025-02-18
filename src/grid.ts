import { Cell } from './cell';
import { Position } from './position';
import { CellState } from './cell-state';
import { Bounds } from './bounds';

export class Grid {
    private readonly cells: Map<Position, Cell>;
    private readonly bounds: Bounds;

    constructor({ cells, bounds }: { cells: Cell[]; bounds: Bounds }) {
        this.cells = new Map(cells.map((it) => [it.getPosition(), it]));
        this.bounds = bounds;
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
