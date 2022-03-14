import { FC, FormEvent, useEffect, useState } from "react"
import { Row, Col, Form, Button } from "react-bootstrap"
import { useForm } from "react-hook-form";
import { defaultValues } from './defaultValues'
import { validationSchema } from './validationSchema'
import { yupResolver } from "@hookform/resolvers/yup"
import { useUsers } from "../../../hooks";
import { AddUserType } from "../../../types/models";
import "./styless.css"
import { Link, useHistory } from "react-router-dom";



const AddUsers: FC = () => {

    const { addUser, getUsers } = useUsers()
    const { push } = useHistory();

    const { handleSubmit, register, formState } = useForm({
        defaultValues,
        resolver: yupResolver(validationSchema),

    });

    const onSubmit = async (data: AddUserType) => {
        try {
            await addUser(data);
            push("/login")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUsers();
    }, [])


    return (
        <div className="container">
            <div className='title'>
                <h1 className='title-font'>CinemAPP</h1>
            </div>
            <div className="login-form">
                <Form className="p-3 form" onSubmit={handleSubmit(onSubmit)}>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" {...register('name')} placeholder="Ej. Ayelén" />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" {...register('lastname')} placeholder="Ej. Cristi" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" {...register('email')} placeholder="aye@ada.com" />
                            <span className="text-danger">{formState.errors.email?.message}</span>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" {...register('password')} placeholder="Contraseña" />
                            <span className="text-danger">{formState.errors.password?.message}</span>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3">
                            <Form.Label>Fecha de nacimiento</Form.Label>
                            <Form.Control type="date" {...register('birthdate')} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Rol</Form.Label>
                            <Form.Select {...register('role')}>
                                <option>user</option>
                            </Form.Select>
                            <span className="text-danger">{formState.errors.role?.message}</span>
                        </Form.Group>
                    </Row>
                    <div className='d-flex justify-content-between'>
                        <Button className="btn-secondary mt-3" type="submit">
                            CREAR CUENTA
                        </Button>
                        <Link className="mt-3" to='/login'>Ya tengo cuenta</Link>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export { AddUsers }