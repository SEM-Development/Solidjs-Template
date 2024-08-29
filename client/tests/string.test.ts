import { expect, test } from 'bun:test';

test('string concatenation', () => {
    expect('hello' + ' ' + 'world').toBe('hello world');
})

test('string length', () => {
    expect('hello'.length).toBe(5);
})