class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// [ 43, 33, 9, 24, 6, 15, 14, 19, 45, 5, 19, 43, 48, 42, 36, 44, 25, 7, 2, 3, 46, 12, 31 ]

function treeByLevels(rootNode) {
  if (!rootNode) return [];

  const result = [];

  const nodes = [rootNode];

  for (const node of nodes) {
    if (node.left) nodes.push(node.left);

    if (node.right) nodes.push(node.right);

    result.push(node.value);
  }

  return result;
}

module.exports = {
  treeByLevels,
  Node,
};
