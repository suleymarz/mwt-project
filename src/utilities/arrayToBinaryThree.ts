import { LeafT, NodeT } from '../types'

type LeafOrNodeT = LeafT | NodeT
type NodeObjT = {
    id: LeafT
    left?: NodeT | null
    right?: NodeT
}
const isNodeLeaf = (node: LeafOrNodeT) => typeof node === 'string' || typeof node === 'number'

/*TODO: Fix typescript errors*/
const visitNode = (node: LeafOrNodeT) => {
    if (isNodeLeaf(node)) {
        return {
            id: node
        }
    }
    // @ts-ignore
    const [id, leftNode, rightNode] = node
    let nodeObj: NodeObjT = { id: id as LeafT }
    if (leftNode) {
        // @ts-ignore
        nodeObj.left = visitNode(leftNode)
    }
    if (!leftNode && rightNode) {
        nodeObj.left = null
    }

    if (rightNode) {
        // @ts-ignore
        nodeObj.right = visitNode(rightNode)
    }

    return nodeObj
}

const arrayToBinaryThree = (inputArray: NodeT) => visitNode(inputArray)

export default arrayToBinaryThree
