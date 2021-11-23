import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react'
import { BinTreeNodeT } from '../types'
import getSmallestSubtree from '../utilities/smallestSubtree/recursive/getSmallestSubtree'
import getSmallestSubtreeWithQueue from '../utilities/smallestSubtree/iterative/getSmallestSubtreeWithQueue'

type AppStateContextProviderT = { children?: React.ReactNode }

type AppStateContextT = {
    treeNode: BinTreeNodeT
    smallestSubtree: BinTreeNodeT | null
    setTreeNode: Dispatch<SetStateAction<BinTreeNodeT>>
}

const contextDefaultValues: AppStateContextT = {
    treeNode: {
        id: 'root',
        left: null,
        right: null
    },
    smallestSubtree: null,
    setTreeNode: () => {}
}

export const AppStateContext = createContext(contextDefaultValues)

const defaultTreeNode = {
    id: 'root',
    left: null,
    right: null
}

const AppStateContextProvider = ({ children }: AppStateContextProviderT): JSX.Element => {
    const [treeNode, setTreeNode] = useState<BinTreeNodeT>(defaultTreeNode)
    const [smallestSubtree, setSmallestSubtree] = useState<BinTreeNodeT>({
        id: null,
        left: null,
        right: null
    })

    useEffect(() => {
        setSmallestSubtree(getSmallestSubtreeWithQueue(treeNode))
    }, [treeNode])

    return (
        <AppStateContext.Provider value={{ treeNode, setTreeNode, smallestSubtree }}>
            {children}
        </AppStateContext.Provider>
    )
}

export default AppStateContextProvider
