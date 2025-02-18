import { Cell } from './cell';
import { Position } from './position';
import { CellState } from './cell-state';
import { Bounds } from './bounds';

type GridOptions = { cells: Cell[]; bounds: Bounds };

export class Grid {
    private readonly cells: Map<string, Cell>;
    private readonly bounds: Bounds;

    constructor(options: GridOptions) {
        this.cells = new Map(options.cells.map((it) => [it.getPosition().toString(), it]));
        this.bounds = options.bounds;
    }

    nextGeneration(): Grid {
        const newCells: Cell[] = [];

        for (const position of this.bounds.positions()) {
            const cell = this.getCell(position);
            const aliveNeighbours = this.getAliveNeighbours(position);

            const newCell = cell.nextGeneration(aliveNeighbours.length);
            if (newCell.isAlive()) {
                newCells.push(newCell);
            }
        }

        return new Grid({
            cells: newCells,
            bounds: this.bounds,
        });
    }

    private getCell(position: Position): Cell {
        return this.cells.get(position.toString()) ?? Cell.deadCellAt(position.row, position.column);
    }

    private getAliveNeighbours(position: Position): Cell[] {
        return position
            .neighbours()
            .map((position) => this.getCell(position))
            .filter((it) => it.isAlive());
    }
}
