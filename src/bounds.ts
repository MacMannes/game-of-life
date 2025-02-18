import { Position } from './position';

export class Bounds {
    constructor(
        readonly min: Position,
        readonly max: Position,
    ) {}
}
