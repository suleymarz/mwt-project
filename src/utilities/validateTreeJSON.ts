import { BinTreeNodeT } from '../types'

export const hasObjectBinTreeStructure = (obj: BinTreeNodeT) => {
    let hasBinTreeStructure = true

    const { id = null, left = null, right = null } = obj
    if (!id || (typeof id !== 'string' && typeof id !== 'number')) return false
    if (left && typeof left !== 'object') return false
    if (right && typeof right !== 'object') return false

    if (left) {
        const leftResult = hasObjectBinTreeStructure(left)
        hasBinTreeStructure = hasBinTreeStructure && leftResult
    }

    if (right) {
        const rightResult = hasObjectBinTreeStructure(right)
        hasBinTreeStructure = hasBinTreeStructure && rightResult
    }

    return hasBinTreeStructure
}

export default hasObjectBinTreeStructure
