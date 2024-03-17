import Button from './components/Button'
import Switcher from './components/Switcher'
import SwitchThemeButton from './components/SwitchThemeButton'
import { useTheme } from './providers/Theme'
import { useState } from 'react'

const options = ['initial', 'success', 'error', 'warning']

const App = () => {
    const [theme, switchTheme] = useTheme()
    const [option, setOption] = useState(options[0])

    return (
        <div className='min-h-screen dark:bg-gray-900 flex flex-col items-center justify-center gap-4 dark:text-gray-100'>
            <SwitchThemeButton />
            <Switcher
            label='Pick a variant:'
            variant={option}
            checked={option}
            setChecked={setOption}
            options={options}
            switchOnAnyClick
            switchDirection='left'
            />
            <Switcher
            label='Pick a variant:'
            variant={option}
            checked={option}
            setChecked={setOption}
            options={options}
            switchOnAnyClick={false}
            />
            <div className='flex flex-col gap-2 items-center'>
                <h3 className=''>Initial Buttons</h3>
                <div className='flex gap-2'>
                    <Button 
                    filled 
                    onClick={switchTheme}
                    >Switch theme</Button>
                    <Button 
                    onClick={switchTheme}
                    >Switch theme</Button>
                </div>
            </div>
            <div className='flex flex-col gap-2 items-center'>
                <h3 className=''>Initial Buttons</h3>
                <div className='flex gap-2'>
                    <Button
                    variant='success'
                    filled 
                    onClick={switchTheme}
                    >Switch theme</Button>
                    <Button 
                    variant='success'
                    onClick={switchTheme}
                    >Switch theme</Button>
                </div>
            </div>
            <div className='flex flex-col gap-2 items-center'>
                <h3 className=''>Initial Buttons</h3>
                <div className='flex gap-2'>
                    <Button
                    variant='error'
                    filled 
                    onClick={switchTheme}
                    >Switch theme</Button>
                    <Button 
                    variant='error'
                    onClick={switchTheme}
                    >Switch theme</Button>
                </div>
            </div>
            <div className='flex flex-col gap-2 items-center'>
                <h3 className=''>Initial Buttons</h3>
                <div className='flex gap-2'>
                    <Button
                    variant='warning'
                    filled 
                    onClick={switchTheme}
                    >Switch theme</Button>
                    <Button 
                    variant='warning'
                    onClick={switchTheme}
                    >Switch theme</Button>
                </div>
            </div>
        </div>
    )
}

export default App
