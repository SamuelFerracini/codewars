const { treeByLevels, Node } = require("./main");

const chai = require("chai");
chai.config.truncateThreshold = 0;
const deepEqual = chai.assert.deepEqual;

function stringifyTree(tree) {
  if (tree === null) return "null";

  let string = "";

  function printNode(node = tree, depth = 0) {
    if (node === null) return;
    string += "----".repeat(depth) + node.value + "\n";
    printNode(node.left, depth + 1);
    printNode(node.right, depth + 1);
  }
  printNode();
  return string;
}

function doTest(tree, expected) {
  const log = stringifyTree(tree);
  const actual = treeByLevels(tree);
  deepEqual(actual, expected, `for tree:\n${log}\n`);
}

describe("Tests suite", function () {
  it("sample tests", function () {
    doTest(null, []);

    const treeTwo = {
      value: 43,
      left: null,
      right: {
        value: 33,
        left: {
          value: 9,
          left: {
            value: 6,
            left: {
              value: 19,
              left: {
                value: 43,
                left: {
                  value: 44,
                  left: null,
                  right: { value: 3, left: null, right: null },
                },
                right: {
                  value: 25,
                  left: { value: 46, left: null, right: null },
                  right: null,
                },
              },
              right: { value: 48, left: null, right: null },
            },
            right: { value: 45, left: null, right: null },
          },
          right: null,
        },
        right: {
          value: 24,
          left: {
            value: 15,
            left: {
              value: 5,
              left: null,
              right: { value: 42, left: null, right: null },
            },
            right: null,
          },
          right: {
            value: 14,
            left: null,
            right: {
              value: 19,
              left: null,
              right: {
                value: 36,
                left: { value: 7, left: null, right: null },
                right: {
                  value: 2,
                  left: { value: 12, left: null, right: null },
                  right: { value: 31, left: null, right: null },
                },
              },
            },
          },
        },
      },
    };

    doTest(
      treeTwo,
      [
        43, 33, 9, 24, 6, 15, 14, 19, 45, 5, 19, 43, 48, 42, 36, 44, 25, 7, 2,
        3, 46, 12, 31,
      ]
    );
  });
});
