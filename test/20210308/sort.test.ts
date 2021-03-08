import { sort } from '../../src/20210308/sort';

test('sort', () => {
  expect(
    sort([
      { id: 2, before: 1 },
      { id: 1, last: true },
      { id: 3, after: 1 },
      { id: 5, first: true },
      { id: 6, last: true },
      { id: 7, last: true },
      { id: 8, last: true },
    ])
  ).toEqual([5, 2, 1, 3, 6, 7, 8]);

  expect(
    sort([
      { id: 2, before: 3 },
      { id: 1, before: 2 },
      { id: 3, before: 5 },
      { id: 5, before: 6 },
      { id: 6, last: true },
      { id: 7, last: true },
      { id: 8, last: true },
    ])
  ).toEqual([1, 2, 3, 5, 6, 7, 8]);
});
