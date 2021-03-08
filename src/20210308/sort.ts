/**
 * 1. 排序后输出 id
 * @param {Array<Object>} list
 * @returns {Array<number>}
 */
interface Item {
  id: number;
  before?: number;
  after?: number;
  first?: boolean;
  last?: boolean;
}

function sort(list: Item[]) {
  const cache: Record<string, Item> = {};
  const sorted: number[] = [];

  list.forEach(item => {
    if ('first' in item) {
      sorted.unshift(item.id);
    } else if ('last' in item) {
      sorted.push(item.id);
    } else {
      cache[item.id] = item;
    }
  });

  while (Object.keys(cache).length > 0) {
    Object.keys(cache).forEach((id: string) => {
      const item = cache[id];
      if (item.before) {
        const index = sorted.indexOf(item.before);
        if (index > -1) {
          sorted.splice(index, 0, item.id);
          delete cache[id];
        }
      } else if (item.after) {
        const index = sorted.indexOf(item.after);
        if (index > -1) {
          sorted.splice(index + 1, 0, item.id);
          delete cache[id];
        }
      }
    });
  }

  return sorted;
}

export {
  sort
}
