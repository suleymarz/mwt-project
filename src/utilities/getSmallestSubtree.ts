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

const getSmallestSubtree = (root: BinTreeNodeT) => {
    if (!root) return root

    const leftHeight = getTreeHeight(root['left'])
    const rightHeight = getTreeHeight(root['right'])

    if (rightHeight === leftHeight) {
        return root
    } else if (leftHeight < rightHeight) {
        return getSmallestSubtree(root['right'])
    } else {
        return getSmallestSubtree(root['left'])
    }
}

export default getSmallestSubtree
