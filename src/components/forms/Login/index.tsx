import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../../hooks/useAuth';
import { defaultValues } from './defaultValues';
import { validationSchema } from './validationSchema';
import "./styless.css"
import { Link } from 'react-router-dom';

type Props = {
    id?: string;
    className?: string;
};



const LoginForm: FC<Props> = ({ id, className }) => {

    const { login } = useAuth();

    const {
        register,
        formState: { errors },
        handleSubmit,

    } = useForm<{ email: string, password: string }>({
        resolver: yupResolver(validationSchema),
        defaultValues,
    });

    const onSubmit = async (data: { email: string; password: string }) => {
        try {
            await login(data.email, data.password);
        } catch (e) {

        }
    }

    return (
        <div className='container'>
            <div className='title'>
                <h1 className='title-font'>CinemAPP</h1>
            </div>
            <div className="login-form">
                <Form className='p-3 form' id={id} onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control id="email" type="email" {...register("email")} placeholder="Email" />
                        {errors.email?.message}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control id="password" type="password" {...register("password")} placeholder="Contraseña" />
                        {errors.email?.message}
                    </Form.Group>
                    <Button className='btn-secondary mt-3 mb-3' variant="primary" type="submit">
                        Iniciar sesión
                    </Button>
                    <div className='d-flex justify-content-between'>
                        <Link className="" to="/sign-up">Aún no tengo cuenta</Link>
                        <Link className="" to="/sign-up">Olvidé mi cotraseña</Link>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export { LoginForm }
