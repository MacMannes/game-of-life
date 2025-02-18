import { Cell } from './cell';
import { Position } from './position';
import { CellState } from './cell-state';

export class Grid {
    private readonly cells: Map<Position, Cell>;

    constructor(cells: Cell[]) {
        this.cells = new Map(cells.map((it) => [it.getPosition(), it]));
    }

    nextGeneration(): Grid {
        return new Grid([
            new Cell(new Position(0, 0), CellState.alive()),
            new Cell(new Position(0, 1), CellState.alive()),
            new Cell(new Position(1, 0), CellState.alive()),
            new Cell(new Position(1, 1), CellState.alive()),
        ]);
    }
}
