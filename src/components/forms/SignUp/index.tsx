import { Row, Col, FloatingLabel, Form } from "react-bootstrap"


const SignUpForm = () => {
    return (
        <Row className="g-2 login">
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Email address">
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
            </Col>
            <Col md>
                <FloatingLabel controlId="floatingSelectGrid" label="Works with selects">
                    <Form.Control type="name" placeholder="Nombre y apellido" />
                </FloatingLabel>
            </Col>
        </Row>
    )
}

export { SignUpForm }