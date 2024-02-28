import ThemeContextProvider from "../Theme"

const Wrapper = ({ children }) => {
    return (
        <ThemeContextProvider>
            {children}
        </ThemeContextProvider>
    )
}

export default Wrapper
