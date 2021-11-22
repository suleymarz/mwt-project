// Function to find the root of the smallest
// subtree consisting of all deepest nodes

import getTreeHeight from './getTreeHeight'
import { BinTreeNodeT } from '../types'

/**
 *
 * @param BinTreeNodeT
 * @param BinTreeNodeT
 * @returns number
 * */

const getSmallestSubtree = (root: BinTreeNodeT, subtreeNode: BinTreeNodeT | null = null) => {
    if (!root) return root

    const leftHeight = getTreeHeight(root['left'])
    const rightHeight = getTreeHeight(root['right'])

    if (rightHeight === leftHeight) {
        return subtreeNode || root
    } else if (leftHeight < rightHeight) {
        return getSmallestSubtree(root['right'], root)
    } else {
        return getSmallestSubtree(root['left'], root)
    }
}

export default getSmallestSubtree
