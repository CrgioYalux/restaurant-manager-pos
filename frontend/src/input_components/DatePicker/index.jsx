import { useId } from 'react'

const colorsByVariant = {
	initial: {
		span: 'text-black dark:text-white',
		input: 'bg-indigo-800 dark:bg-indigo-200 text-indigo-200 dark:text-indigo-800',
	},
	success: {
		span: 'text-black dark:text-white',
		input: 'bg-green-800 dark:bg-green-200 text-green-200 dark:text-green-800',
	},
	error: {
		span: 'text-black dark:text-white ',
		input: 'bg-red-800 dark:bg-red-200 text-red-200 dark:text-red-800',
	},
	warning: {
		span: 'text-black dark:text-white',
		input: 'bg-yellow-800 dark:bg-yellow-200 text-yellow-200 dark:text-yellow-800',
	},
}

const defaultClassNames = (variant) => ({
	label: 'flex items-center gap-2',
	span: `flex-none grow-0 min-w-max ${colorsByVariant[variant]?.span}`,
	input: `flex-none w-[16ch] rounded p-1 ${colorsByVariant[variant]?.input}`,
})

const DatePicker = ({ classNames = {}, label = 'Date', variant = 'initial', ...inputProps }) => {
	const id = useId()

	const labelClassName = classNames.overwriteLabel ?? `${defaultClassNames(variant)?.label} ${classNames.label ?? ''}`
	const spanClassName = classNames.overwriteSpan ?? `${defaultClassNames(variant)?.span} ${classNames.span ?? ''}`
	const inputClassName = classNames.overwriteInput ?? `${defaultClassNames(variant)?.input} ${classNames.input ?? ''}`

	return (
		<label className={labelClassName} htmlFor={id}>
			<span className={spanClassName}>
				{label}
			</span>
			<input 
				className={inputClassName}
				type='date'
				id={id}
				{...inputProps}
			/>
		</label>
	)
}

export default DatePicker
