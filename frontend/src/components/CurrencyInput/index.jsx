import TextInput from "../TextInput"
import DollarSign from "../Icons/DollarSign"

const CurrencyInput = ({ ...textInputProps }) => {
    return (
        <TextInput
        {...textInputProps}
        label={<DollarSign className='text-current fill-current' />}
        classNames={{ span: 'basis-full max-w-[1.25ch]' }}
        onlyNumbers
        allow='.,-+'
        />
    )
}

export default CurrencyInput
