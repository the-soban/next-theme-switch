'use client'

import { useTheme } from 'next-themes'
import React from 'react'

const ThemeBtn = () => {
    const { theme, setTheme } = useTheme()

    return (
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? 'light' : 'dark'}
        </button>
    )
}

export default ThemeBtn
