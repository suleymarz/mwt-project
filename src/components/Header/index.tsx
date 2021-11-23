import * as React from 'react'

interface HeaderPropsT {
    title: string
    subtitle?: string
}

const Header = ({ title, subtitle }: HeaderPropsT) => (
    <header className='App-header'>
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
    </header>
)

export default Header
