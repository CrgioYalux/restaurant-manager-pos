import { useTheme } from "../../providers/Theme"

import Switcher from "../Switcher"

const SwitchThemeButton = () => {
    const [theme, switchTheme] = useTheme()

    return (
        <Switcher
        checked={theme.current}
        options={['dark', 'light']}
        onClick={switchTheme}
        />
    )
}

export default SwitchThemeButton
