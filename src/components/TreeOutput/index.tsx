import * as React from 'react'
import { BinTreeNodeT } from '../../types'
import './index.styles.scss'

export interface TreeOutputProps {
    treeNode: BinTreeNodeT | null
}

export const TreeOutput: React.FunctionComponent<TreeOutputProps> = props => {
    if (!props.treeNode || !props.treeNode.id) {
        return <div className='treeNode'></div>
    }
    return (
        <div className='treeNode'>
            <div className='nodeId'>{props.treeNode.id}</div>
            {props.treeNode.left || props.treeNode.right ? (
                <div className='nodeChildren'>
                    <TreeOutput treeNode={props.treeNode.left} />
                    <TreeOutput treeNode={props.treeNode.right} />
                </div>
            ) : null}
        </div>
    )
}
