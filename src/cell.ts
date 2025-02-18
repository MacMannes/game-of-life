import { Position } from './position';
import { CellState } from './cell-state';

export class Cell {
    constructor(
        private readonly position: Position,
        private cellState: CellState,
    ) {}

    isAlive(): boolean {
        return this.cellState.isAlive;
    }

    public getPosition(): Position {
        return this.position;
    }

    nextGeneration(numberOfNeighbours: number): Cell {
        return new Cell(this.position, this.cellState.nextState(numberOfNeighbours));
    }

    equals(cell: Cell): boolean {
        return this.position.equals(cell.position);
    }
}
