
export class CellState {
    public readonly isAlive: boolean;

    private constructor(isAlive: boolean) {
        this.isAlive = isAlive;
    }


    static alive() {
        return new CellState(true);
    }

    static dead() {
        return new CellState(false);
    }
}