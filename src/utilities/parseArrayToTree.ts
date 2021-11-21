import { LeafT, NodeT } from '../types'
import { BinTreeNode } from './BinTreeNode'

type LeafOrNodeT = LeafT | Array<any>

/*TODO: Fix typescript errors*/
const getTreeNode = (node: LeafOrNodeT) => {
    if (!node) return node
    console.log(node)
    // @ts-ignore
    const [id, leftNode, rightNode] = node || [null, null, null]
    const leftDefault = !leftNode && !rightNode ? undefined : null

    return new BinTreeNode(
        id,
        getTreeNode(leftNode || leftDefault),
        getTreeNode(rightNode || undefined)
    )
}

/**
 * Converts array format binary tree notation to BinTreeNode data structure
 * @param arrayFormat [id, leftChild, rightChild] for example [1, [2], [3, null, [5]]]
 * @returns TreeNode format
 * */

const parseArrayToTree = (inputArray: Array<any>) => {
    const treeNode = getTreeNode(inputArray)
    const parsedTree = JSON.parse(
        JSON.stringify(treeNode, (key, value) => {
            if (value !== null) return value
        })
    )

    return parsedTree
}
export default parseArrayToTree
