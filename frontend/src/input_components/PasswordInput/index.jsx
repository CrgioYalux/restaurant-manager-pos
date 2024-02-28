import { useState, useId } from 'react'

import OpenEye from '../Icons/OpenEye'
import ClosedEye from '../Icons/ClosedEye'

const colorsByVariant = {
	initial: {
		span: 'text-black dark:text-white',
		input: 'bg-indigo-800 dark:bg-indigo-200 text-indigo-200 dark:text-indigo-800',
		button: 'text-indigo-800 dark:text-indigo-200',
	},
	success: {
		span: 'text-black dark:text-white',
		input: 'bg-green-800 dark:bg-green-200 text-green-200 dark:text-green-800',
		button: 'text-green-800 dark:text-green-200',
	},
	error: {
		span: 'text-black dark:text-white ',
		input: 'bg-red-800 dark:bg-red-200 text-red-200 dark:text-red-800',
		button: 'text-red-800 dark:text-red-200',
	},
	warning: {
		span: 'text-black dark:text-white',
		input: 'bg-yellow-800 dark:bg-yellow-200 text-yellow-200 dark:text-yellow-800',
		button: 'text-yellow-800 dark:text-yellow-200',
	},
}

const defaultClassNames = (variant) => ({
	label: 'flex items-center gap-2 w-96',
	span: `flex-none grow-0 min-w-max ${colorsByVariant[variant]?.span}`,
	div: 'grow shrink basis-full flex gap-1 ml-auto',
	input: `flex-none w-[24ch] rounded p-1 ${colorsByVariant[variant]?.input}`,
	button: `grow-0 shrink-0 basis-8 grid place-items-center fill-current ${colorsByVariant[variant]?.button}`,
})

const PasswordInput = ({
	classNames = {},
	label = 'Password',
	variant = 'initial',
	...inputProps
}) => {
	const [inputType, setInputType] = useState('password')
	const id = useId()

	const switchInputType = () => {
		setInputType((prev) => prev === 'password' ? 'text' : 'password')
	}

	const labelClassName = classNames.overwriteLabel ?? `${defaultClassNames(variant)?.label} ${classNames.label ?? ''}`
	const spanClassName = classNames.overwriteSpan ?? `${defaultClassNames(variant)?.span} ${classNames.span ?? ''}`
	const inputClassName = classNames.overwriteInput ?? `${defaultClassNames(variant)?.input} ${classNames.input ?? ''}`
	const divClassName = classNames.overwriteDiv ?? `${defaultClassNames(variant)?.div} ${classNames.div ?? ''}`
	const buttonClassName = classNames.overwriteButton ?? `${defaultClassNames(variant)?.button} ${classNames.button ?? ''}`

	return (
		<label className={labelClassName} htmlFor={id}>
			<span className={spanClassName}>
				{label}
			</span>
			<div className={divClassName}>
				<input 
					className={inputClassName}
					{...inputProps}
					type={inputType}
					id={id}
				/> 
				<button 
					className={buttonClassName}
					type='button'
					onClick={switchInputType}
				>
					{inputType === 'password' ? <OpenEye /> : <ClosedEye />}
				</button>
			</div>
		</label>
	)
}

export default PasswordInput
