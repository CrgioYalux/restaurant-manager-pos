import DatePicker from "./input_components/DatePicker"
import DateTimePicker from "./input_components/DateTimePicker"
import PasswordInput from "./input_components/PasswordInput"
import TextInput from "./input_components/TextInput"
import TimePicker from "./input_components/TimePicker"
import { useTheme } from "./providers/Theme"
import { useState } from 'react'

const App = () => {
    const [state, switchTheme] = useTheme()
    const [dateTime, setDatetime] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [text, setText] = useState()

    return (
        <div className='min-h-screen dark:bg-gray-900 flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-bold text-blue-500'>Hello there</h1>
            <h2 className='text-2xl font-bold text-blue-500'>Under construction</h2>

            <div className='flex flex-col gap-y-4 items-start'>
                <h3 className='text-xl text-black dark:text-white'>An example form</h3>
                <PasswordInput label='Enter your password:' />
                <DatePicker 
                date={date}
                setDate={setDate}
                label='Choose your birthdate:'
                variant='warning'
                classNames={{
                    overwriteLabel: 'flex gap-10 items-center border-2 p-2 rounded-xl cursor-pointer' 
                }} />
                <DateTimePicker label="Some datetime:" setDateTime={setDatetime} dateTime={dateTime} setToCurrentButton={true} />
                <button onClick={switchTheme} className='text-black dark:text-white'>Go {state.opposite}</button>
                <TimePicker time={time} setTime={setTime} includeSeconds />
                <TimePicker variant='error' time={time} setTime={setTime} />
                <TimePicker variant='success' label='some time' />       
                <TextInput 
                text={text}
                setText={setText}
                onlyAllow={/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/igm}
                placeholder='e.g. john_lock30'
                label={'An instagram-like username:'}
                />
                <TextInput 
                text={text}
                setText={setText}
                allowSymbols={false}
                allowLetters={false}
                allowNumbers={false}
                allowSpaces
                allow={'-.'}
                placeholder='e.g. ... --- ...'
                variant='warning'
                label='Some morse code:'
                />
            </div>
        </div>
    )
}

export default App
