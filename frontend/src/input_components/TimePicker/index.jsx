import { useId } from 'react'
import { getCurrentTimeToJSON } from '../../utils'

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
	label: 'flex items-center gap-2',
	span: `flex-none grow-0 min-w-max ${colorsByVariant[variant]?.span}`,
	input: `flex-none rounded p-1 ${colorsByVariant[variant]?.input}`,
	button: `w-max ${colorsByVariant[variant]?.button} underline cursor-pointer`,
})

const TimePicker = ({ 
	classNames = {},
	label = 'Time',
	variant = 'initial',
    setToCurrentButton = true,
    setToCurrentButtonText = 'Now',
	setTime = () => {},
	time = undefined,
	includeSeconds = false,
	...inputProps 
}) => {
	const id = useId()

	const labelClassName = classNames.overwriteLabel ?? `${defaultClassNames(variant)?.label} ${classNames.label ?? ''}`
	const spanClassName = classNames.overwriteSpan ?? `${defaultClassNames(variant)?.span} ${classNames.span ?? ''}`
	const inputClassName = classNames.overwriteInput ?? `${defaultClassNames(variant)?.input} ${classNames.input ?? ''}`
	const buttonClassName = classNames.overwriteButton ?? `${defaultClassNames(variant)?.button} ${classNames.button ?? ''}`

    const setTimeToCurrent = () => {
        setTime(() => getCurrentTimeToJSON(includeSeconds))
    }

	return (
		<label className={labelClassName} htmlFor={id}>
			<span className={spanClassName}>
				{label}
			</span>
			<input 
				step={includeSeconds ? 1 : 0}
				{...inputProps}
				className={inputClassName}
				type='time'
				id={id}
				value={time ?? ''}
				onChange={(event) => {
                    if (!event.target['validity'].valid) return
					const attemptedTime = event.target['value']
					setTime(attemptedTime)
					if (inputProps.onChange) inputProps.onChange(event)
				}}
			/>
			    {setToCurrentButton ? (
				<button 
				className={buttonClassName}
				onClick={setTimeToCurrent}
				>{setToCurrentButtonText}</button>
			    ) : ''}
		</label>
	)
}

export default TimePicker
