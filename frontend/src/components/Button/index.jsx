const colorsByVariant = (modifier = {}) => {
    return {
        initial: {
            button: modifier.filled
                ? 'bg-indigo-800 text-indigo-200 dark:bg-indigo-200 dark:text-indigo-800 border-transparent'
                : 'bg-transparent text-indigo-800 dark:text-indigo-200 border-current',
        },
        success: {
            button: modifier.filled
                ? 'bg-green-800 text-green-200 dark:bg-green-200 dark:text-green-800 border-transparent'
                : 'bg-transparent text-green-800 dark:text-green-200 border-current',
        },
        error: {
            button: modifier.filled
                ? 'bg-red-800 text-red-200 dark:bg-red-200 dark:text-red-800 border-transparent'
                : 'bg-transparent text-red-800 dark:text-red-200 border-current',
        },
        warning: {
            button: modifier.filled
                ? 'bg-yellow-800 text-yellow-200 dark:bg-yellow-200 dark:text-yellow-800 border-transparent'
                : 'bg-transparent text-yellow-800 dark:text-yellow-200 border-current',
        },
    }
}

const defaultClassNames = (variant, modifier = {}) => ({
    button: `
        w-max px-4 py-2 border-2 rounded-full cursor-pointer
        ${colorsByVariant(modifier)[variant]?.button}
    `,
})

const Button = ({
	classNames = {},
	variant = 'initial',
    filled = false,
    children,
    ...buttonProps
}) => {
	const buttonClassName = classNames?.overwriteButton ?? `${defaultClassNames(variant, { filled })?.button} ${classNames.button ?? ''}`

    return (
        <button 
        {...buttonProps}
        className={buttonClassName}
        >
            {children}
        </button>
    )
}

export default Button
