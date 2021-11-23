import React, { useContext } from 'react'
import JSONParser from '../JSONParser'
import { TreeOutput } from '../TreeOutput'
import { AppStateContext } from '../../context/AppState'
import { BinTreeNodeT } from '../../types'
import './index.styles.scss'

type BodyContainerT = { bodyMessage: string }

const BodyContainer = ({ bodyMessage }: BodyContainerT): JSX.Element => {
    const { setTreeNode, treeNode } = useContext(AppStateContext)

    const onInputChange = (newTreeNode: BinTreeNodeT) => {
        setTreeNode(newTreeNode)
    }

    return (
        <main className='App-body'>
            {bodyMessage}

            <div className='flex-container'>
                <JSONParser onChange={onInputChange} />
                <div className='OutputContainer'>
                    <TreeOutput treeNode={treeNode} />
                </div>
            </div>
        </main>
    )
}
export default BodyContainer
