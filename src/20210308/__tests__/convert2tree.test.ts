import { convert2Tree } from '../convert2tree';

test('convert2Tree', () => {
  expect(
    convert2Tree([
      { id: 1, name: 'i1' },
      { id: 2, name: 'i2', parentId: 1 },
      { id: 4, name: 'i4', parentId: 3 },
      { id: 3, name: 'i3', parentId: 2 },
      { id: 8, name: 'i8', parentId: 7 },
    ])
  ).toEqual({
    children: [
      {
        children: [
          {
            children: [{ id: 4, name: 'i4', parentId: 3 }],
            id: 3,
            name: 'i3',
            parentId: 2,
          },
        ],
        id: 2,
        name: 'i2',
        parentId: 1,
      },
    ],
    id: 1,
    name: 'i1',
  });
});
