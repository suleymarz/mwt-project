import * as React from 'react'

interface HeaderPropsT {
    title: string
}

const Header = ({ title }: HeaderPropsT) => <header className='App-header'>{title}</header>

export default Header
