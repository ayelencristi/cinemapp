import { FC } from "react"
import { Navbar , Container, Nav, NavDropdown } from "react-bootstrap"

const NavBar: FC = () => {
    return (
        <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
            </Container>
        </Navbar>       
    )
}

export { NavBar }