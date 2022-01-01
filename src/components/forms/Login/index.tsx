import { FC, FormEvent, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import { login } from './api';
import "./styless.css"


const defaultValues = {
    email: "",
    password: ""
};

const LoginForm: FC = () => {

    const [inputs, setInputs] = useState(defaultValues);

    const { push } = useHistory();


    const handleSubmit = async (e: FormEvent<HTMLElement>) => {
        e.preventDefault();

        try {
            const response = await login(inputs);
            localStorage.setItem("user", JSON.stringify(response));
            push("/");
        } catch (e) {
            console.log("error");
        }
    };

    return (
        <div className='container'>
            <div className='title'>
                <h1 className='title-font'>CinemApp</h1>
            </div>
            <div className="login-form">
                <Form className='p-3 form' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control id="email" type="email" name="email" value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} placeholder="Email" />
                        <Form.Text className="text-muted">
                            No compartiremos tu dirección de email con nadie.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control id="password" type="password" name="password" value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} placeholder="Contraseña" />
                    </Form.Group>
                    <Button className='btn-secondary mt-3' variant="primary" type="submit">
                        Iniciar sesión
                    </Button>
                </Form>
            </div>
        </div>
        // <div className="login">
        //     <div className="login-form">
        //         <h1>CinemaApp</h1>
        //         <h2>Acceder a tu cuenta</h2>
        //         <form action="" onSubmit={handleSubmit}>
        //             <div>
        //                 <label htmlFor="email">Email</label> <br />
        //                 <input
        //                     id="email"
        //                     type="email"
        //                     name="email"
        //                     value={inputs.email}
        //                     onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        //                 />
        //             </div>
        //             <div>
        //                 <label htmlFor="password">Contraseña</label> <br />
        //                 <input
        //                     id="password"
        //                     type="password"
        //                     name="password"
        //                     value={inputs.password}
        //                     onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        //                 />
        //             </div>
        //             <button type="submit">Iniciar sesión</button>
        //         </form>
        //     </div>
        // </div>
    )
}

export { LoginForm }
