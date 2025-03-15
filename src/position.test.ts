import { describe, expect, it } from 'vitest';
import { Position } from './position.ts';

describe('Position', () => {
    it('should determine the correct neighbours', () => {
        const position = new Position(0, 0);

        const neighbours = position.neighbours();

        expect(neighbours).toContainEqual(new Position(-1, -1));
        expect(neighbours).toContainEqual(new Position(-1, 0));
        expect(neighbours).toContainEqual(new Position(-1, 1));

        expect(neighbours).toContainEqual(new Position(0, -1));
        expect(neighbours).toContainEqual(new Position(0, 1));

        expect(neighbours).toContainEqual(new Position(1, -1));
        expect(neighbours).toContainEqual(new Position(1, 0));
        expect(neighbours).toContainEqual(new Position(1, 1));
    });
});
