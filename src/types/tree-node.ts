export type LeafT = string | number

export interface NodeT extends Array<NodeT | LeafT> {}

export interface BinTreeNodeT {
    id: string | number
    left: BinTreeNodeT | null
    right: BinTreeNodeT | null
}
