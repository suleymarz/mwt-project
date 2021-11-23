import getTreeHeight from './getTreeHeight'
import { BinTreeNodeT } from '../../../types'

/**
 * Function that will find and return the root of the smallest subtree consisting of all deepest nodes
 * @param BinTreeNode
 * @returns BinTreeNode
 * */

const getSmallestSubtree = (root: BinTreeNodeT) => {
    if (!root) return root

    /*We need to look for both sides respective tree heights*/
    const leftHeight = getTreeHeight(root.left)
    const rightHeight = getTreeHeight(root.right)

    /*
     * We check for the case when both subtrees height are the same, this only could happen if:
     * - The root has no left and right, that will mean that the root is a leaf and we have found
     * its deepest node, so we return it
     * - Or, the root has the same depth on each side, which would be equal to the smallest subtree
     * with the deepest nodes, so we return it.
     * */

    if (rightHeight === leftHeight) {
        return root
    }

    /*
     * Otherwise, we'll go and check recursively for the side that has the greater height,
     * because that side contains the deepest node:
     * */

    if (leftHeight > rightHeight) {
        return getSmallestSubtree(root.left)
    } else {
        return getSmallestSubtree(root.right)
    }
}

export default getSmallestSubtree
