import {
    isogram,
} from './isogram';

describe('isogram', () => {
    test('it should throw an error when no parameters provided', () => {
        expect(() => isogram()).toThrow('no parameters provided');
    });
    test('it should return false for "aA"', () => {
        expect(isogram('aA')).toBe(false)
    });
    test('it should return false for "22 poulets"', () => {
        expect(isogram('22 poulets')).toBe(false)
    });
    test('it returns false for "isograms"', () => {
        expect(isogram('isograms')).toBe(false)
    });
    test('it returns true for "background"', () => {
        expect(isogram('background')).toBe(true)
    });
    test('it returns true for "downstream"', () => {
        expect(isogram('downstream')).toBe(true)
    });
    test('it returns true for "six-year-old"', () => {
        expect(isogram('six-year-old')).toBe(true)
    });
});