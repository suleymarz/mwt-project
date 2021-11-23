import React, { useContext, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { BinTreeNodeT } from '../../types'
import { AppStateContext } from '../../context/AppState'
import parseArrayToTree from '../../utilities/parseArrayToTree'
import { isValidJSON, hasObjectBinTreeStructure } from '../../utilities/validations'

export interface TreeInputProps {
    onChange: (newTreeNode: BinTreeNodeT) => void
}

const JSONParser = ({ onChange }: TreeInputProps) => {
    const { treeNode } = useContext(AppStateContext)

    const [treeText, setTreeText] = useState<string>('')
    const [error, setError] = useState<string | null>(null)
    const [fileInputText, setFileInputText] = useState<string>('Upload a .txt or .json file')

    const inputRef = useRef(null)
    const reader = new FileReader()

    /*
     * File input handlers
     * */

    const handleFileUpload = ev => {
        if (ev.target.files.length) {
            setError(null)
            setFileInputText(`Selected file: ${ev.target.files[0].name}`)
            reader.readAsText(ev.target.files[0])
        }
    }

    const onReaderLoad = ev => {
        //Parse text to JSON (will return an array) and get tree from parseArrayToTree function
        const treeArrayFormat: any[] = JSON.parse(ev.target.result)
        onChange(parseArrayToTree(treeArrayFormat))
    }

    const validateTextChange = (value: string) => {
        if (isValidJSON(value)) {
            setError(null)
            const treeObjFormat = JSON.parse(value)
            if (hasObjectBinTreeStructure(treeObjFormat)) {
                onChange(treeObjFormat)
            } else {
                setError('The JSON object does not meet BinNodeThree syntax')
            }
        } else {
            setError('JSON syntax error')
        }
    }

    /*
     * Text area change & error handlers
     * */

    const handleTextAreaChange = ev => {
        const textAreaValue = ev.target.value
        setTreeText(textAreaValue)
        validateTextChange(textAreaValue)
    }

    /*
     * Button handler
     * */
    const handleProcessFile = () => {
        reader.onload = onReaderLoad

        if (inputRef.current.files.length) {
            setError(null)
            reader.readAsText(inputRef.current.files[0])
        } else {
            setFileInputText('Upload a .txt or .json file')
            setError('There is no uploaded file, please upload a .txt or .json and try again')
        }
    }

    /*
     * Observe treeNode changes and set treeText new JSON formatted string value
     * */

    useEffect(() => {
        setTreeText(JSON.stringify(treeNode, null, 4))
    }, [treeNode])

    return (
        <div className='JsonParser'>
            <label>Tree source:</label>

            <div className={'JsonParser-input-container'}>
                <label htmlFor='inputFile' className='JsonParser-input-label'>
                    <input
                        type='file'
                        id='inputFile'
                        ref={inputRef}
                        accept='*.json,*.txt'
                        className='JsonParser-input'
                        onChange={handleFileUpload}
                    />
                    {fileInputText}
                </label>

                <button className='JsonParser-button' onClick={handleProcessFile}>
                    Fetch
                </button>
            </div>
            <div className='JsonParser-editor-box'>
                <label>Tree text:</label>
                <textarea
                    rows={30}
                    value={treeText}
                    onChange={handleTextAreaChange}
                    className={classNames('JsonParser-textarea', { 'error-box': error })}
                />
                {error && <p className='error-msg'>{error}</p>}
            </div>
        </div>
    )
}

export default JSONParser
