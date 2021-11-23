import { BinTreeNodeT } from '../types'
import getTreeNode from './getTreeNode'

/**
 * Converts array format binary tree notation to BinTreeNode data structure
 * @param arrayFormat [id, leftChild, rightChild] for example [1, [2], [3, null, [5]]]
 * @returns TreeNode format
 * */

const parseArrayToTree = (inputArray: Array<any>): BinTreeNodeT => {
    const treeNode = getTreeNode(inputArray)

    const jsonFormatReplacer = (key, value) => {
        if (value !== null) return value
    }

    /*
     * Get a formatted JSON from the tree structure obtained in last step.
     * */
    const parsedTree = JSON.parse(JSON.stringify(treeNode, jsonFormatReplacer))

    return parsedTree
}
export default parseArrayToTree
