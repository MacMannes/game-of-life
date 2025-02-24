/* v8 ignore start */

import { UserInterface } from './user-interface';

export class ConsoleUserInterface implements UserInterface {
    displayWorld(world: string): void {
        console.log(world);
    }

    displayGeneration(generation: number): void {
        console.log(`\nGeneration: ${generation}. Press Ctrl+C to stop the simulation`);
    }

    resetDisplay(): void {
        console.clear();
    }
}

/* v8 ignore end */
