import { $Number, CustomField, Valid, Invalid } from '@tdc-cl/x-form';

export const $PhoneNumber = CustomField.extends($Number).with({
    validate(value) {
        if (!/^\+?[0-9]{2}[0-9]{9}$/.test(value)) {
            return Invalid("No es un número válido")
        }
        return Valid(value);
    },
    inputProps:
    {
        placeholder: 'Ej: +56912345678'
    }
});