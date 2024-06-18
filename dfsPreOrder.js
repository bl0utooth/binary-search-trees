class TreeNode {
    constructor(key) {
        this.left = null;
        this.right = null;
        this.val = key
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insertRecursively(key) {
        const newNode = new TreeNode(key)

        if(this.root === null) {
            this.root = newNode
            return this
        }

        this.root = this._insertNode(this.root, newNode)
        return this
    }

    _insertNode(node, newNode) {
        if (node === null) {
            return newNode;
        }

        if (newNode.val < node.val) {
            node.left = this._insertNode(node.left, newNode)
        } else {
            node.right = this._insertNode(node.right, newNode)
        }
        return node;
    }

    dfsPreOrder(node, result) {
        if (node === null) {
            return
        }

        result.push(node.val)
        this._dfsPreOrderHelper(node.left, result)
        this._dfsPreOrderHelper(node.right, result)
    }
}