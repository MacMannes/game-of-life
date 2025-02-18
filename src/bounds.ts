import { Position } from './position';

export class Bounds {
    constructor(
        private readonly min: Position,
        private readonly max: Position,
    ) {}

    *positions(): Generator<Position> {
        for (let row = this.min.row; row < this.max.row; row++) {
            for (let col = this.min.column; col < this.max.column; col++) {
                yield new Position(row, col);
            }
        }
    }

    static withMax(row: number, column: number): Bounds {
        return new Bounds(new Position(0, 0), new Position(row, column));
    }
}
