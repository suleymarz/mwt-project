import { LeafT } from '../types'
import { BinTreeNode } from '../classes/BinTreeNode'

type LeafOrNodeT = LeafT | Array<any>

/**
 * Converts array format binary tree node
 * @param arrayFormat [id, leftChild, rightChild] for example [1, [2], [3, null, [5]]]
 * @returns BinTreeNode
 * */

const getTreeNode = (node: LeafOrNodeT) => {
    if (!node) return node

    // @ts-ignore
    const [id, leftNode, rightNode] = node || [null, null, null]
    const leftDefault = !leftNode && !rightNode ? undefined : null

    return new BinTreeNode(
        id,
        getTreeNode(leftNode || leftDefault),
        getTreeNode(rightNode || undefined)
    )
}

export default getTreeNode
