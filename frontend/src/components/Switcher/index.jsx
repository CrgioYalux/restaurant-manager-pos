import { useId } from 'react'

const colorsByVariant = (modifier = {}) => {
	return {
		initial: {
			list: `bg-indigo-800 dark:bg-indigo-200 divide-indigo-200 dark:divide-indigo-800`,
			label: `
				text-indigo-200 dark:text-indigo-800
			`,
			inputContainer: `
				${modifier.checked 
				? 'bg-indigo-950 dark:bg-indigo-400' 
				: ''}	
			`,
			inputLabel: `text-indigo-200 dark:text-indigo-800`,
		},
		success: {
			list: `bg-green-800 dark:bg-green-200 divide-green-200 dark:divide-green-800`,
			label: `text-green-200 dark:text-green-800`,
			inputContainer: `
				${modifier.checked
				? 'bg-green-950 dark:bg-green-400'
				: ''}
			`,
			inputLabel: `text-green-200 dark:text-green-800`,
		},
		error: {
			list: `bg-red-800 dark:bg-red-200 divide-red-200 dark:divide-red-800`,
			label: `text-red-200 dark:text-red-800`,
			inputContainer: `
				${modifier.checked 
				? 'bg-red-950 dark:bg-red-400'
				: ''}
			`,
			inputLabel: `text-red-200 dark:text-red-800`,
		},
		warning: {
			list: `bg-yellow-800 dark:bg-yellow-200 divide-yellow-200 dark:divide-yellow-800`,
			label: `text-yellow-200 dark:text-yellow-800`,
			inputContainer: `
				${modifier.checked
				? 'bg-yellow-950 dark:bg-yellow-400'
				: ''}
			`,
			inputLabel: `text-yellow-200 dark:text-yellow-800`,
		},
	}
}

const defaultClassNames = (variant, modifier = {}) => ({
	container: 'flex flex-col gap-2 items-center',
	label: `${colorsByVariant()[variant]?.label}`,
	list: `
		 flex rounded-full divide-x
		${colorsByVariant()[variant]?.list}
	`,
	inputContainer: `
		flex py-1 px-2 
		first:rounded-l-full last:rounded-r-full
		first:pl-3 last:pr-3
		${modifier.checked && modifier.atomic ? 'cursor-default' : 'cursor-pointer'}
		${colorsByVariant(modifier)[variant]?.inputContainer}
	`,
	inputLabel: `
		flex flex-none select-none
		${colorsByVariant()[variant]?.inputLabel}
	`, 
	input: `hidden`,
})

const RadioInput = ({
	classNames = {},
	variant = 'initial',
	switchOnAnyClick,
	checked,
	label,
	...inputProps 
}) => {
	const id = useId();

	const modifier = { checked, atomic: !switchOnAnyClick }

	const containerClassName = classNames.overwriteContainer ?? `${defaultClassNames(variant, modifier)?.inputContainer} ${classNames.label ?? ''}`
	const labelClassName = classNames.overwriteLabel ?? `${defaultClassNames(variant, modifier)?.inputLabel} ${classNames.label ?? ''}`
	const inputClassName = classNames.overwriteInput ?? `${defaultClassNames(variant)?.input} ${classNames.input ?? ''}`

	return (
		<label className={containerClassName} htmlFor={id}>
			<span className={labelClassName}>
				{label}
			</span>
			<input 
				{...inputProps}
				className={inputClassName}
				type='radio'
				id={id}
				checked={checked}
			/>
		</label>
	)
}

const Switcher = ({
	classNames = {},
	variant = 'initial',
	label = 'Pick an option:',
	options = [],
	onClick,
    checked,
    setChecked,
	switchOnAnyClick = true,
	switchDirection = 'right',
	...inputProps
}) => {
	const id = useId()

	const containerClassName = classNames.overwriteContainer ?? `${defaultClassNames(variant)?.container} ${classNames.container ?? ''}`
	const listClassName = classNames.overwriteList ?? `${defaultClassNames(variant)?.list} ${classNames.list ?? ''}`
	const labelClassName = classNames.overwriteLabel ?? `${defaultClassNames(variant)?.label} ${classNames.label ?? ''}`

	return (
		<div 
		className={containerClassName} 
		>
			{label ?? <span className={labelClassName}>{label}</span>}
			<div 
			className={listClassName}
			onClick={(event) => {
				if (switchOnAnyClick && setChecked) {
					event.preventDefault()
					const currentIndex = options.findIndex((opt) => opt === checked)
					const nextIndex = switchDirection === 'left'
						? currentIndex === 0 ? options.length - 1 : currentIndex - 1
						: currentIndex === options.length - 1 ? 0 : currentIndex + 1
					const nextValue = options[nextIndex]
					setChecked(nextValue)
				}
			
				if (event.currentTarget.tagName === 'DIV' && 
					event.type === 'click' &&
					onClick) {
					event.preventDefault()
					onClick?.(event)
				}
			}}
			>
				{options.map((opt, key) => (
					<RadioInput
					classNames={{
						container: classNames.inputContainer,
						overwriteContainer: classNames.overwriteInputContainer,
						label: classNames.inputLabel,
						overwriteLabel: classNames.overwriteInputLabel,
						input: classNames.input,
						overwriteInput: classNames.overwriteInput,
					}}
					name={id}
					key={key}
					label={opt}
					value={opt}
					variant={variant}
					checked={checked === opt}
					switchOnAnyClick={switchOnAnyClick}
					onChange={(event) => {
						if (!switchOnAnyClick && setChecked)
							setChecked(opt)
						inputProps.onChange?.(event)
					}}
					{...inputProps}
					/>
				))}
			</div>
		</div>
	)
}

export default Switcher
