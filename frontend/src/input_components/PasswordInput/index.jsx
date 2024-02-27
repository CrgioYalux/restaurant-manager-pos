import { useState, useId } from 'react'

import OpenEye from '../Icons/OpenEye'
import ClosedEye from '../Icons/ClosedEye'

const PasswordInput = ({ className = '', label = 'Password', color = 'blue', ...inputProps }) => {
	const [inputType, setInputType] = useState('password')
	const id = useId()

	const switchInputType = () => {
		setInputType((prev) => prev === 'password' ? 'text' : 'password')
	}

	return (
		<label className='flex flex-row items-center gap-2 w-96' htmlFor={id}>
			<span className='grow-0 shrink-0 min-w-[8ch]'>{label}</span>
			<div className='grow shrink basis-full flex flex-row gap-2 ml-auto'>
				<input 
				{...inputProps}
				className={`${className} flex-none basis-full rounded bg-${color}-900 dark:bg-${color}-200 text-${color}-200 dark:text-${color}-900 p-1`}
				type={inputType}
				id={id}
				/> 
				<button 
				className={`grow-0 shrink-0 basis-8 grid place-items-center text-${color}-900 dark:text-${color}-200 fill-current`}
				type='button'
				onClick={switchInputType}>
					{inputType === 'password' ? <OpenEye /> : <ClosedEye />}
				</button>
		</div>
		</label>
	)
}

export default PasswordInput
