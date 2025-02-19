import { Cell } from './cell';
import { Position } from './position';
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
        const cells: Cell[] = [];

        for (const position of this.bounds.positions()) {
            const cell = this.computeNextCellState(position);

            if (cell.isAlive()) cells.push(cell);
        }

        return new Grid({
            cells,
            bounds: this.bounds,
        });
    }

    private computeNextCellState(position: Position) {
        const cell = this.getCell(position);
        const aliveNeighbours = this.getAliveNeighbours(position);

        return cell.nextGeneration(aliveNeighbours.length);
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
