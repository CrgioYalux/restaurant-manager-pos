import DatePicker from "./input_components/DatePicker"
import PasswordInput from "./input_components/PasswordInput"
import { useTheme } from "./providers/Theme"

const App = () => {
    const [state, switchTheme] = useTheme()

    return (
        <div className='min-h-screen dark:bg-gray-900 flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-bold text-blue-500'>Hello there</h1>
            <h2 className='text-2xl font-bold text-blue-500'>Under construction</h2>

            <div className='flex flex-col gap-y-4 items-start'>
                <h3 className='text-xl text-black dark:text-white'>An example form</h3>
                <PasswordInput label='Enter your password:' />
                <DatePicker 
                label='Choose your birthdate:'
                variant='warning'
                classNames={{
                    overwriteLabel: 'flex gap-10 items-center border-2 p-2 rounded-xl cursor-pointer' 
                }} />
                <button onClick={switchTheme} className='text-black dark:text-white'>Go {state.opposite}</button>
            </div>
        </div>
    )
}

export default App
