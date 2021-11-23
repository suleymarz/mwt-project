import getTreeHeight from './getTreeHeight'
import { BinTreeNodeT } from '../types'

/**
 * Function that will find and return the root of the smallest subtree consisting of all deepest nodes
 * @param BinTreeNode
 * @returns BinTreeNode
 * */

const getSmallestSubtree = (root: BinTreeNodeT) => {
    if (!root) return root

    const leftHeight = getTreeHeight(root.left)
    const rightHeight = getTreeHeight(root.right)

    if (rightHeight === leftHeight) {
        return root
    } else if (leftHeight < rightHeight) {
        return getSmallestSubtree(root.right)
    } else {
        return getSmallestSubtree(root.left)
    }
}

export default getSmallestSubtree
