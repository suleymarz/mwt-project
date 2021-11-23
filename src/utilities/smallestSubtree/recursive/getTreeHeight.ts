import { BinTreeNodeT } from '../../../types'

/**
 * Function that returns the tree height
 * @param BinTreeNodeT
 * @returns number
 * */

const getTreeHeight = (tree: BinTreeNodeT): number => {
    if (!tree) return 0

    // Check if current tree is a leaf
    if (!tree.left && !tree.right) return 1

    // Get the max number between each child tree
    return Math.max(getTreeHeight(tree.left), getTreeHeight(tree.right)) + 1
}

export default getTreeHeight
