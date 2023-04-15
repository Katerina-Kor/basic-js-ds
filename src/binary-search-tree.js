const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {

  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.myRoot = null;
  }

  root() {
    return this.myRoot;
  }

  add(data) {
    this.myRoot = addInside(this.myRoot, data);

    function addInside(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (node.data > data) {
        node.left = addInside(node.left, data);
      } else {
        node.right = addInside(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return isExist(this.myRoot, data);

    function isExist(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (node.data > data) {
        return isExist(node.left, data);
      } else {
        return isExist(node.right, data);
      }
    }
  }

  find(data) {
    return findInside(this.myRoot, data);

    function findInside(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (node.data > data) {
        return findInside(node.left, data);
      } else {
        return findInside(node.right, data);
      }
    }
  }

  remove(data) {
    this.myRoot = deleteNode(this.myRoot, data);

    function deleteNode(node, data) {
      if (!node) {
        return null;
      }

      if (node.data > data) {
        node.left = deleteNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = deleteNode(node.right, data);
        return node;
      } else {

        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }

        node.data = maxFromLeft.data;

        node.left = deleteNode(node.left, maxFromLeft.data);

        return node;
      }
    }
  }

  min() {
    if (!this.myRoot) {
      return null;
    }

    let node = this.myRoot;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.myRoot) {
      return null;
    }

    let node = this.myRoot;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};