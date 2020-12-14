import { useForm, $Form, $Password, $Text, $Button, $Checklist, optional, $Radio, $Select, $Date, $Checkbox } from '@tdc-cl/x-form';
import { $PhoneNumber } from '../../customFields/$PhoneNumber';
import { $ValidEmail } from '../../customFields/$ValidEmail'


function RegisterForm({ setResponse }) {


    const areas = new Promise((resolve) => setTimeout(() => {
        resolve([
            { value: 'web', label: 'Desarrollo Web' },
            { value: 'science', label: 'Data Science' },
            { value: 'mobile', label: 'Desarrollo Móvil' },
            { value: 'ti', label: 'Soporte Técnico' },
            { value: 'ux/ui', label: 'Desarrollo UX/UI' },
        ]);
    }, 2000));

    const form = useForm($Form({
        fields: {
            name: $Text('Nombre'),
            lastName: $Text('Apellido'),
            birthday: $Date('Fecha de nacimiento'),
            email: $ValidEmail('Email'),
            userName: $Text('Usuario'),
            password: $Password('Contraseña'),
            area: $Select('Área de especialidad').with({
                async options() {
                    const response = await areas;
                    return response;
                }
            }),
            rol: $Select('Rol Preferido').with({
                options: [
                    { value: 'FE', label: 'Front-End' },
                    { value: 'BE', label: 'Back-End' },
                    { value: 'FS', label: 'Full-Stack' },
                ]
            }),
            hasJob: $Radio('Situación laboral').with({
                options: [
                    'Buscando Empleo',
                    'Empleado',
                    'Freelancer',
                ]
            }),
            phone: optional($PhoneNumber('Teléfono')),
            website: optional($Text('Página Web')),
            conditions: optional($Checklist().with({
                options: [
                    'Aparecer visible para las empresas',
                    'Enviarme correos con ofertas e información',
                ]
            })),
            agree: $Checkbox('Aseguro que la información suministrada es verdadera').readOnly().with({ inputProps: { checked: true } })

        },
        submit: $Button('Registrarse', {
            async onValid(values) {
                const result = () => {
                    const { name, lastName, birthday, email, userName, password, area, rol, hasJob, phone, website, conditions } = values
                    const preferences = [...conditions]
                    console.log(preferences)
                    return (<>
                        <h3>¡Hola {name}, gracias por registrarte!</h3>
                        <p>Esta es la información que ingresaste:</p>
                        <p><strong>Nombre:</strong> {name}</p>
                        <p><strong>Apellido:</strong> {lastName}</p>
                        <p><strong>Día de nacimiento:</strong> {birthday.toLocaleString()}</p>
                        <p><strong>Email:</strong> {email}</p>
                        <p><strong>Usuario:</strong> {userName}</p>
                        <p><strong>Contraseña:</strong> {password}</p>
                        <p><strong>Área:</strong> {area.label}</p>
                        <p><strong>Rol:</strong> {rol.label}</p>
                        <p><strong>Situación laboral:</strong> {hasJob.label}</p>
                        {phone && <p><strong>Teléfono:</strong> {phone}</p>}
                        {website && <p><strong>Website:</strong> {website}</p>}
                        {conditions && <><strong>Preferencias:</strong>       {preferences.map((pref, index) => <p key={index}>{pref}</p>)}</>
                        }
                    </>)
                }
                setResponse(result)
            },
        }),
    }));

    const fillForm = () => {
        form.fillWith({
            name: 'Ejemplo',
            email: 'ejemplo@ejemplo.com',
            userName: 'ejemplo123',
            phone: '+56972994374',
            website: 'https://german-mora.web.app/',
            hasJob: {
                value: "Buscando Empleo",
            },
            rol: { value: 'FE' },
            area: { value: 'web' },
            birthday: "1993-02-22",
            conditions: {
                'Aparecer visible para las empresas': true
            },
            password: "1234",
        })
    }

    return (

        <form {...form.props}>
            {form.renderFields()}
            <div className="d-flex justify-content-center">
                {form.renderSubmit()}
                <button onClick={fillForm} > Auto fill (tests) </button>
            </div>

        </form>

    )

}

export default RegisterForm;