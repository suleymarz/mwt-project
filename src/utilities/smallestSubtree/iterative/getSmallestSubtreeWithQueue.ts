import { BinTreeNodeT } from '../../../types'
import { Queue } from '../../../classes/Queue'
import getTreeHeightWithQueue from './getTreeNodeWithQueue'

/**
 * Function that will find and return the root of the smallest subtree consisting of all deepest nodes
 * @param BinTreeNode
 * @returns BinTreeNode
 * */

const getNodeWithGreaterHeight = (root: BinTreeNodeT) => {
    if (!root) return null

    /*
     * We need to look for both sides respective tree heights
     * */

    const leftHeight = getTreeHeightWithQueue(root.left)
    const rightHeight = getTreeHeightWithQueue(root.right)

    /*
     * We check for the case when both subtrees height are the same, this will mean that:
     * - The root has no left and right, that will mean that the root is a leaf and we have found
     * its deepest node.
     * - Or, the root has the same depth on each side, which would be equal to the smallest subtree
     * with the deepest nodes.
     *
     * In any of the upper cases, we'll return null because we don't have any further node to add
     * to queue and look for.
     * */

    if (rightHeight === leftHeight) {
        return null
    }

    /*
     * Otherwise, we'll return that node to be added to queue and be the next to be checked:
     * */

    if (leftHeight > rightHeight) {
        return root.left
    } else {
        return root.right
    }
}

const getSmallestSubtreeWithQueue = (root: BinTreeNodeT) => {
    if (!root) return root

    const queue = new Queue()

    let node = root
    queue.enqueue(root)

    // dequeue all elements
    while (!queue.isEmpty()) {
        node = queue.dequeue()
        let nodeWithGH = getNodeWithGreaterHeight(node)
        if (nodeWithGH) {
            queue.enqueue(nodeWithGH)
        }
    }

    return node
}

export default getSmallestSubtreeWithQueue
