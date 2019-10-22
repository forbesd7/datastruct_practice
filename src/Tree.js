class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    let childTree = new Tree(value);
    this.children.push(childTree);
  }

  contains(value) {
    let counter = false;
    const recursiveCall = (node) => {
      if (node.value === value) {
        counter = true;
        return;
      }
      if (node.children.length !== 0) {
        for (let child of node.children) {
          recursiveCall(child);
        }
      }
      return counter;
    };
    return recursiveCall(this);
  }

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.

*/
  traverseDepthFirst(fn) {}

  traverseBreadthFirst(fn) {}
}

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/

module.exports = Tree;
