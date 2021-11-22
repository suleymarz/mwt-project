import * as React from 'react'
import { useContext, useEffect, useRef, useState } from 'react'
import { BinTreeNodeT } from '../../types'
import { AppStateContext } from '../../context/AppState'
import parseArrayToTree from '../../utilities/parseArrayToTree'
import { isValidJSON, hasObjectBinTreeStructure } from '../../utilities/validations'
import './index.styles.scss'
import getSmallestSubtree from '../../utilities/getSmallestSubtree'
import classNames from 'classnames'

export interface TreeInputProps {
    onChange: (newTreeNode: BinTreeNodeT) => void
}

type ErrorT = {
    type: string
    msg: string
}

const JSONParser = ({ onChange }: TreeInputProps) => {
    const [treeText, setTreeText] = useState<string>('')
    const [error, setError] = useState<ErrorT | null>(null)

    const { treeNode } = useContext(AppStateContext)

    const inputRef = useRef(null)
    const reader = new FileReader()

    const onReaderLoad = ev => {
        handleParseToTree(ev.target.result)
    }

    const handleProcess = ev => {
        reader.onload = onReaderLoad
        reader.readAsText(inputRef.current.files[0])
    }

    const validateTextChange = (value: string) => {
        if (isValidJSON(value)) {
            setError(null)
            const treeObjFormat = JSON.parse(value)
            if (hasObjectBinTreeStructure(treeObjFormat)) {
                onChange(treeObjFormat)
            } else {
                setError({ type: 'json', msg: 'The JSON object does not meet BinNodeThree syntax' })
            }
        } else {
            setError({ type: 'json', msg: 'JSON syntax error' })
        }
    }

    const handleTextAreaChange = ev => {
        const textAreaValue = ev.target.value
        setTreeText(textAreaValue)
        validateTextChange(textAreaValue)
    }

    const handleFileUpload = ev => {
        setError(null)
        reader.readAsText(ev.target.files[0])
    }

    const handleParseToTree = (text: string) => {
        const treeArrayFormat: any[] = JSON.parse(text)
        onChange(parseArrayToTree(treeArrayFormat))
    }

    useEffect(() => {
        setTreeText(JSON.stringify(treeNode, null, 4))
        const smallestTree = getSmallestSubtree(treeNode)
        console.log(smallestTree)
    }, [treeNode])

    return (
        <div className='JsonParser'>
            <input type='file' onChange={handleFileUpload} accept='*.json,*.txt' ref={inputRef} />

            <button onClick={handleProcess}>Fetch</button>
            <br />
            <textarea
                rows={30}
                value={treeText}
                onChange={handleTextAreaChange}
                className={classNames('JsonParser-textarea', { 'error-box': error })}
            />
            {error && <p className='error-msg'>{error.msg}</p>}
        </div>
    )
}

export default JSONParser
