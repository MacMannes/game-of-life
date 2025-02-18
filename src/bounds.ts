import { Position } from './position';

export class Bounds {
    constructor(
        readonly min: Position,
        readonly max: Position,
    ) {}

    static withMax(row: number, column: number): Bounds {
        return new Bounds(new Position(0, 0), new Position(row, column));
    }
}
