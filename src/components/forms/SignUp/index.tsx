import { FC, FormEvent, useState } from "react"
import { Row, Col, Form, Button } from "react-bootstrap"
import { signup } from "./api";
import "./styless.css"

const defaultValues = {
    name: "",
    lastname: "",
    email: "",
    password: "",
    birthdate: "",
}


const SignUpForm: FC = () => {

    const [inputs, setInputs] = useState(defaultValues);

    const handleSubmit = (e: FormEvent<HTMLElement>) => {
        e.preventDefault();
        signup({ ...inputs, birthdate: new Date(inputs.birthdate) });
    }

    return (
        <div className="container">
            <div className="login-form">
                <Form className="p-3 form" onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" name="name" value={inputs.name} onChange={(e) => setInputs({ ...inputs, name: e.target.value })} placeholder="Ej. Ayelén" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" name="lastname" value={inputs.lastname} onChange={(e) => setInputs({ ...inputs, lastname: e.target.value })} placeholder="Ej. Cristi" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} placeholder="aye@ada.com" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" name="password" value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} placeholder="Contraseña" />
                        </Form.Group>
                    </Row>


                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Fecha de nacimiento</Form.Label>
                        <Form.Control type="date" name="birthdate" value={inputs.birthdate} onChange={(e) => setInputs({ ...inputs, birthdate: e.target.value })} />
                    </Form.Group>

                    <Button className="btn-secondary mt-3" type="submit">
                        CREAR CUENTA
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export { SignUpForm }