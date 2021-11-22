import * as React from 'react'
import JSONParser from '../JSONParser'
import { TreeOutput } from '../TreeOutput'
import './index.styles.scss'
import { useContext } from 'react'
import { AppStateContext } from '../../context/AppState'
import { BinTreeNodeT } from '../../types'

/*const BodyRenderer: React.FunctionComponent<> = observer(props => {
    return (
        <main className='App-body'>
            {props.appState!.bodyMessage}
            <TreeInput
                onChange={newVal => {
                    props.appState.setState({
                        ...props.appState,
                        treeNode: newVal
                    })
                }}
            />
            <div className='OutputContainer'>
                <TreeOutput treeNode={props.appState.treeNode} />
            </div>
        </main>
    )
})*/

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
