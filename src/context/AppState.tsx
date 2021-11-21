import React, { createContext, Dispatch, SetStateAction, useState } from 'react'
import { BinTreeNodeT } from '../types'

type AppStateContextProviderT = { children?: React.ReactNode }

type AppStateContextT = {
    treeNode: BinTreeNodeT
    setTreeNode: Dispatch<SetStateAction<BinTreeNodeT>>
}

const contextDefaultValues: AppStateContextT = {
    treeNode: {
        id: 'root',
        left: null,
        right: null
    },
    setTreeNode: () => {}
}

export const AppStateContext = createContext(contextDefaultValues)

const AppStateContextProvider = ({ children }: AppStateContextProviderT): JSX.Element => {
    const [treeNode, setTreeNode] = useState<BinTreeNodeT>({
        id: 'root',
        left: null,
        right: null
    })

    const context = { treeNode, setTreeNode }

    return <AppStateContext.Provider value={context}>{children}</AppStateContext.Provider>
}

export default AppStateContextProvider
