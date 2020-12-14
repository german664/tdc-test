import { $Text, CustomField, Valid, Invalid } from '@tdc-cl/x-form';

export const $ValidEmail = CustomField.extends($Text).with({
    validate(value) {
        if (!/\S+@\S+\.\S+/.test(value)) {
            return Invalid("Por favor, ingresa un email válido")
        }
        return Valid(value);
    }
});