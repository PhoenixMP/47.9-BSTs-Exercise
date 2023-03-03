class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val)
    let currentNode = this.root;
    if (!this.root) {
      this.root = newNode;
      return this
    }

    while (currentNode !== null) {
      if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          currentNode = null;
        }
        else currentNode = currentNode.left;

      } else if (val > currentNode.val) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          currentNode = null;
        }
        else currentNode = currentNode.left;
      }
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    let newNode = new Node(val);
    let currentNode = this.root;
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    function insertRecursivelyHelper(currentNode) {
      if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return
        }
        else return insertRecursivelyHelper(currentNode.left);

      } else if (val > currentNode.val) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        else return insertRecursivelyHelper(currentNode.right);
      }
    }


    insertRecursivelyHelper(currentNode)
    return this


  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;
    if (!this.root) {
      return undefined;
    }
    if (this.root.val === val) return this.root;

    while (true) {
      if (currentNode.val > val) {
        if (!currentNode.left) return undefined;
        if (currentNode.left.val === val) return currentNode.left;
        currentNode = currentNode.left;
      }
      if (currentNode.val < val) {
        if (!currentNode.right) return undefined;
        if (currentNode.right.val === val) return currentNode.right;
        currentNode = currentNode.right;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode = this.root) {
    if (!this.root) {
      return undefined;
    }
    if (currentNode.val > val) {
      if (!currentNode.left) return undefined;
      if (currentNode.left.val === val) return currentNode.left;
      return this.findRecursively(val, currentNode.left);
    }
    if (currentNode.val < val) {
      if (!currentNode.right) return undefined;
      if (currentNode.right.val === val) return currentNode.right;
      return this.findRecursively(val, currentNode.right);
    }


  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(currentNode = this.root, arr = []) {
    if (!this.root) {
      return undefined;
    }
    arr.push(currentNode.val);
    if (currentNode.left) this.dfsPreOrder(currentNode.left, arr);
    if (currentNode.right) this.dfsPreOrder(currentNode.right, arr);
    return arr;

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(currentNode = this.root, arr = []) {
    if (!this.root) {
      return undefined;
    }
    if (currentNode.left) this.dfsInOrder(currentNode.left, arr);
    arr.push(currentNode.val);
    if (currentNode.right) this.dfsInOrder(currentNode.right, arr);
    return arr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(currentNode = this.root, arr = []) {
    if (!this.root) {
      return undefined;
    }
    if (currentNode.left) this.dfsPostOrder(currentNode.left, arr);
    if (currentNode.right) this.dfsPostOrder(currentNode.right, arr);
    arr.push(currentNode.val);
    return arr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if (!this.root) {
      return undefined;
    }
    let arr = [];
    let queue = [];
    let current;
    queue.push(this.root)
    while (queue.length) {
      current = queue.shift()
      arr.push(current.val)
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return arr;
  }

}
module.exports = BinarySearchTree;
