import { useForm, $Form, $Text, $Button, $TextArea, optional } from '@tdc-cl/x-form';
import { useEffect } from 'react';
import { $PhoneNumber } from '../../customFields/$PhoneNumber'
import { $ValidEmail } from '../../customFields/$ValidEmail'

function ContactForm({ setResponse }) {

    const preFill = new Promise((resolve) => setTimeout(() => {
        resolve(
            { name: "José Zambrano", email: "jzambrano@gmail.com", phone: "+56972994374", message: 'Me gustaría agendar una reunión para hacerte una propuesta laboral' },
        );
    }, 1500));

    const form = useForm($Form({
        fields: {
            name: $Text('Nombre'),
            email: $ValidEmail('Email'),
            phone: optional($PhoneNumber('Teléfono')),
            message: $TextArea('Mensaje').with({
                inputProps: {
                    rows: 8,
                }
            })
        },
        submit: $Button('Enviar Mensaje', {
            async onValid(values) {
                const { name, email, phone, message } = values
                const result = () => {
                    return (
                        <>
                            <h3>¡Hola {name}, gracias por tu mensaje!</h3>
                            <p>Te contactaremos a tu correo: {email} {phone && `o a tu número: ${phone}`}</p>
                            <p>Tu mensaje: {message}</p>
                        </>
                    )
                }
                setResponse(result)
            },
            onInvalid: 'disable',
        }),
    }));

    useEffect(() => {

        preFill.then(data => form.fillWith(data))

    }, []);

    return (
        <form {...form.props}>
            {form.renderFields()}
            <div className="d-flex justify-content-center">
                {form.renderSubmit()}
            </div>
        </form>

    )

}

export default ContactForm;