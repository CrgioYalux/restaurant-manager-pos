import { createContext, useContext, useState, useEffect } from 'react'
import { getSystemTheme, applyTheme } from './helpers'

const Context = createContext({})

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        const lastPreferredTheme = localStorage.getItem('theme')

        if (lastPreferredTheme === null) {
            const systemTheme = getSystemTheme()
            setTheme(systemTheme)
            applyTheme(systemTheme)
            return
        } 

        setTheme(lastPreferredTheme)
        applyTheme(lastPreferredTheme)
    }, [])

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        applyTheme(newTheme)
    }

    const value = [{ current: theme, opposite: theme === 'dark' ? 'light' : 'dark' }, switchTheme]

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default ThemeContextProvider
export const useTheme = () => useContext(Context)
