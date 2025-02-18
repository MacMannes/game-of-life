export class Position {
    constructor(
        private readonly row: number,
        private readonly column: number,
    ) {}

    neighbours(): Position[] {
        return [
            new Position(this.row - 1, this.column - 1),
            new Position(this.row - 1, this.column),
            new Position(this.row - 1, this.column + 1),

            new Position(this.row, this.column - 1),
            new Position(this.row, this.column + 1),

            new Position(this.row + 1, this.column - 1),
            new Position(this.row + 1, this.column),
            new Position(this.row + 1, this.column + 1),
        ];
    }
}
