import * as React from 'react'
import { BinTreeNodeT } from '../../types'
import './index.styles.scss'
import { useContext } from 'react'
import { AppStateContext } from '../../context/AppState'
import classNames from 'classnames'

export interface TreeOutputProps {
    treeNode: BinTreeNodeT | null
}

export const TreeOutput = ({ treeNode }: TreeOutputProps) => {
    const { smallestSubtree } = useContext(AppStateContext)
    const isSmallestSubtreeNode = smallestSubtree.id === treeNode.id

    if (!treeNode || !treeNode.id) {
        return <div className='treeNode' />
    }
    return (
        <div
            className={classNames('treeNode', {
                smallestTreeNode: isSmallestSubtreeNode
            })}
        >
            <div className='nodeId'>{treeNode.id}</div>
            {treeNode.left || treeNode.right ? (
                <div className='nodeChildren'>
                    <TreeOutput treeNode={treeNode.left} />
                    <TreeOutput treeNode={treeNode.right} />
                </div>
            ) : null}
        </div>
    )
}
