/**
 * 2. 将数组转换成树状结构
 * @param {Array} arr
 * @returns {Object}
 * @example
 * [
 *   { id: 1, name: 'i1' },
 *   { id: 2, name: 'i2', parentId: 1 },
 *   { id: 4, name: 'i4', parentId: 3 },
 *   { id: 3, name: 'i3', parentId: 2 },
 *   { id: 8, name: 'i8', parentId: 7 },
 * ]
 * 转换后
 * {
 *   id: 1,
 *   name: 'i1',
 *   children: [
 *     { id: 2, name: 'i2', parentId: 1, children: [...] },
 *   ]
 * }
 */
interface Item {
  id: number;
  name: string;
  parentId?: number;
  children?: Item[];
}

function convert2Tree(arr: Item[]) {
  const cache: Record<string, Item> = {};
  let root: Partial<Item> = {};
  arr.forEach(item => {
    cache[item.id] = item;

    if (!('parentId' in item)) {
      root = item;
    }
  });

  Object.keys(cache).forEach(id => {
    const item = cache[id];
    if (item.parentId) {
      let parent = cache[item.parentId];
      if (typeof parent === 'undefined') {
        // TODO: 不完整数据处理
        parent = {
          id: item.parentId,
          name: `i${item.parentId}`,
        };
      }
      if (!Array.isArray(parent.children)) {
        parent.children = [];
      }
      parent.children.push(item);
    }
  });

  return root;
}

export {
  convert2Tree
};
