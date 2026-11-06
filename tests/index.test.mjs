import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('lowercases and hyphenates', () => {
  assert.equal(api.headingId('Getting Started'), 'getting-started');
});
test('strips emphasis markup', () => {
  assert.equal(api.headingId('A **bold** title'), 'a-bold-title');
});
test('removes punctuation', () => {
  assert.equal(api.headingId('Hello, world!'), 'hello-world');
});
test('normalizes accents', () => {
  assert.equal(api.headingId('Café'), 'cafe');
});
test('supports Unicode letters', () => {
  assert.equal(api.headingId('你好 世界'), '你好-世界');
});
test('rejects non-string input', () => {
  assert.throws(() => api.headingId(4), TypeError);
});
