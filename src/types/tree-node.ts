export type LeafT = string | number

export interface NodeT extends Array<NodeT | LeafT> {}

export type TreeNodeT = {
    id: string | number
    leftNode?: TreeNodeT | null
    rightNode?: TreeNodeT | null
}
