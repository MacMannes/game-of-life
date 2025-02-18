
export class CellState {
    public readonly isAlive: boolean;

    private constructor(isAlive: boolean) {
        this.isAlive = isAlive;
    }

    nextState(neighbours: number): CellState {
        if (this.isAlive && neighbours < 2) return CellState.dead()
        if (this.isAlive && (neighbours === 2 || neighbours === 3)) return CellState.alive()
        if (this.isAlive && neighbours > 3) return CellState.dead()
        if (!this.isAlive && neighbours === 3) return CellState.alive()

        return CellState.dead();
    }

    static alive() {
        return new CellState(true);
    }

    static dead() {
        return new CellState(false);
    }
}