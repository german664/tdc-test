import { useForm, $Form, $Text, $Checkbox, $Button, $Password, } from '@tdc-cl/x-form';
import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha'

function LoginForm({ setResponse }) {

    const [msg, setMsg] = useState("")
    const [error, setError] = useState(false)

    const accounts = [{
        user: "luis",
        password: "tdc123"
    },
    {
        user: "robinson",
        password: "tdc123"
    },
    {
        user: "javier",
        password: "tdc123"
    }]

    const recaptchaRef = useRef()

    const form = useForm($Form({
        fields: {
            user: $Text('Usuario').with({
                render: {
                    FieldContainer({ field, children }) {
                        return (
                            <div ref={field.containerRef}>
                                {children}
                            </div>
                        );
                    },

                    Input({ field }) {
                        return <input {...field.inputProps} placeholder="Solo usuario, no funcionará tu correo electrónico" ref={field.inputRef} />;
                    }
                }
            }),
            password: $Password('Contraseña'),
            remember: $Checkbox('Recordar'),
        },
        submit: $Button('Log in', {
            async onValid(values) {

                const { user, password } = values
                const correctLogin = accounts.some(account => account.user === user && account.password === password)

                if (recaptchaRef.current.getValue()) {
                    if (correctLogin) {
                        setError(false)
                        const result = () => {
                            return (
                                <h3>¡Hola {user}, bienvenido a tu cuenta!</h3>
                            )
                        }
                        setResponse(result)
                    } else {
                        setError(true)
                        setMsg('Hay un error con el usuario o la contraseña')
                    }
                }
                else {
                    alert('Por favor, validar el captcha')
                }
            },
            onInvalid: 'disable',
        }),
    }));

    const { user, password, remember } = form.fields;
    return (
        <form {...form.props} >
            {error && <h4>{msg}</h4>}
            {user.render()}
            {password.render()}
            {<ReCAPTCHA ref={recaptchaRef} sitekey={process.env.REACT_APP_SITE_KEY} />}
            {remember.render()}
            <div className="d-flex justify-content-center">
                {form.renderSubmit()}
            </div>
        </form>
    )

}

export default LoginForm;