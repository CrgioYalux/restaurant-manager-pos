function getSystemTheme() {
    if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
    ) return 'dark'
    return 'light'
}

function applyTheme(theme) {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
}

export { getSystemTheme, applyTheme }
