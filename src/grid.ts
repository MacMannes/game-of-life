import { Bounds } from 'src/bounds.ts';
import { Cell } from 'src/cell.ts';
import { Position } from 'src/position.ts';

interface GridOptions {
    cells: Cell[];
    bounds: Bounds;
}

export class Grid {
    private readonly cells: Map<string, Cell>;
    private readonly bounds: Bounds;

    constructor(options: GridOptions) {
        this.cells = new Map(
            options.cells.map((it) => [it.getPosition().toString(), it]),
        );
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

    toString(): string {
        let representation = '';

        for (const position of this.bounds.positions()) {
            const cell = this.getCell(position);

            representation += cell.toString();

            if (this.shouldAddNewLine(cell)) representation += '\n';
        }

        return representation;
    }

    private shouldAddNewLine(cell: Cell) {
        return cell.getPosition().column === this.bounds.getMaxColumn();
    }

    private computeNextCellState(position: Position) {
        const cell = this.getCell(position);
        const aliveNeighbours = this.getAliveNeighbours(position);

        return cell.nextGeneration(aliveNeighbours.length);
    }

    private getCell(position: Position): Cell {
        const cell = this.cells.get(position.toString());
        if (cell) return cell;

        return Cell.deadCellAt(position.row, position.column);
    }

    private getAliveNeighbours(position: Position): Cell[] {
        return position
            .neighbours()
            .map((position) => this.getCell(position))
            .filter((it) => it.isAlive());
    }
}
