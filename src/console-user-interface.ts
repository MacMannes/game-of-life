/* v8 ignore start */

import { UserInterface } from './user-interface';

export class ConsoleUserInterface implements UserInterface {
    displayWorld(world: string): void {
        console.log(world)
    }

    resetDisplay(): void {
        console.clear()
    }
}

/* v8 ignore end */
