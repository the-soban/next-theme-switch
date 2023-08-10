'use client'

import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

const ThemeBtn = () => {
    const { theme, setTheme } = useTheme()

    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    if (!mounted) {
        return null
    }

    return (
        <button
            className="flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {theme === 'dark' ? (
                <SunIcon className="h-5 w-5 text-orange-300" />
            ) : (
                <MoonIcon className="h-5 w-5 text-blue-700" />
            )}
        </button>
    )
}

export default ThemeBtn
