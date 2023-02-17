import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext()

export function ThemeContextProvider({ children }) {

    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const rootElement = window.document.documentElement
        const currentTheme = theme

        const prevTheme = currentTheme ? 'dark' : 'light'
        rootElement.classList.remove(prevTheme)

        const nextTheme = currentTheme ? 'light' : 'dark'
        rootElement.classList.add(nextTheme)

        // console.log(currentTheme);

    }, [theme])


    return (
        <ThemeContext.Provider value={{ theme, setTheme }} >
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)