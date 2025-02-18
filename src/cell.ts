import { Position } from './position';
import { CellState } from './cell-state';

export class Cell {
    constructor(
        private readonly position: Position,
        private cellState: CellState
    ) {}

    isAlive(): boolean {
        return this.cellState.isAlive;
    }

    nextGeneration(number: number): Cell {
        return new Cell(this.position, this.cellState.nextState(number));
    }

    equals(cell: Cell): boolean {
        return this.position.equals(cell.position);
    }
}