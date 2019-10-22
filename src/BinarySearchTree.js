class BinarySearchTree {
  constructor(value) {
    this.left;
    this.right;
    this.value = value;
  }

  // insert(value) {
  //     const newChild = new BinarySearchTree(value);
  //     const addedValue = value;
  //     function recursiveCall(tree) {
  //       if (addedValue < tree.value) {
  //         if (tree.left) {
  //           recursiveCall(tree.left);
  //         } else {
  //           tree.left = newChild;
  //         }
  //       } else if (addedValue > tree.value) {
  //         if (tree.right) {
  //           recursiveCall(tree.right);
  //         } else {
  //           tree.right = newChild;
  //         }
  //       }
  //     }
  //     recursiveCall(this);
  //     return this;
  //   }

  insert(value) {
    const newTree = new BinarySearchTree(value);

    function _insert(node) {
      if (value < node.value) {
        if (node.left) _insert(node.left);
        else {
          node.left = newTree;
          return;
        }
      } else if (value > node.value) {
        if (node.right) _insert(node.right);
        else {
          node.right = newTree;
          return;
        }
      }
    }
    _insert(this);
    return this;
  }
}

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
module.exports = BinarySearchTree;
