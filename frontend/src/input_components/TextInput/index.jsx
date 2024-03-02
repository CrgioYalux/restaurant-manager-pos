import { useId } from 'react'

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

const isIncludedIn = (list = []) => (v) => list.includes(v)

const defaultClassNames = (variant) => ({
	label: 'flex items-center gap-2',
	span: `flex-none grow-0 min-w-max ${colorsByVariant[variant]?.span}`,
	input: `flex-none rounded p-1 ${colorsByVariant[variant]?.input}`,
	button: `w-max ${colorsByVariant[variant]?.button} underline cursor-pointer`,
})

const letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = '"¡!#$%&\'()*+,-./:;<=>¿?@[\\]^_`{|}~'
const spaces = ' '

const TextInput = ({ 
	classNames = {},
	label = 'Text',
	variant = 'initial',
    onlyLetters = false,
    onlyNumbers = false,
    onlySymbols = false,
    onlySpaces = false,
    onlyAllow,
    allowLetters = true && (!onlyNumbers && !onlySymbols && !onlySpaces),
    allowNumbers = true && (!onlyLetters && !onlySymbols && !onlySpaces),
    allowSymbols = true && (!onlyLetters && !onlyNumbers && !onlySpaces),
    allowSpaces = true && (!onlyLetters && !onlyNumbers && !onlySymbols),
    allow = '',
	setText = () => {},
	text = '',
	...inputProps 
}) => {
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
				{...inputProps}
				className={inputClassName}
				type='text'
				id={id}
				value={text}
				onChange={(event) => {
                    const value = event.target.value

                    if (value === '') setText('')

                    const isIncludedInOnlyAllow = isIncludedIn(onlyAllow)
                    
                    if (typeof onlyAllow === 'string') {
                        if (
                            Array
                            .from(value)
                            .map(isIncludedInOnlyAllow)
                            .filter(Boolean)
                            .length === value.length
                        ) setText(value)
                        return
                    }
                    else if (typeof onlyAllow === 'object') {
                        if (
                            (onlyAllow.exec(value) ?? [])
                            .pop() === value
                        ) setText(value)
                        return
                    }

                    const whitelist = []
                    allowLetters && whitelist.push(...letters)
                    allowNumbers && whitelist.push(...numbers)
                    allowSymbols && whitelist.push(...symbols)
                    allowSpaces && whitelist.push(...spaces)
                    !!allow && whitelist.push(...allow)

                    const isIncludedInWhitelist = isIncludedIn(whitelist)

                    if (
                        (typeof allow === 'object' &&
                        (onlyAllow.exec(value) ?? [])
                        .pop() === value)
                        ||
                        Array
                        .from(value)
                        .map(isIncludedInWhitelist)
                        .filter(Boolean)
                        .length === value.length
                    ) setText(value)
                    return
                }}
			/>
		</label>
	)
}

export default TextInput
