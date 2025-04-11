import { Position } from 'src/position.ts';

interface Dimensions {
    width: number;
    height: number;
}

export class Bounds {
    constructor(
        private readonly min: Position,
        private readonly max: Position,
    ) {}

    *positions(): Generator<Position> {
        for (let row = this.min.row; row <= this.max.row; row++) {
            for (let col = this.min.column; col <= this.max.column; col++) {
                yield new Position(row, col);
            }
        }
    }

    static withSize(dimensions: Dimensions): Bounds {
        return new Bounds(
            new Position(0, 0),
            new Position(dimensions.height - 1, dimensions.width - 1),
        );
    }

    getMaxColumn() {
        return this.max.column;
    }
}
