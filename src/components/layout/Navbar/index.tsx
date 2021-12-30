import { FC } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"

const NavBar: FC = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">CinemApp</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/movies">Películas</Nav.Link>
                    <Nav.Link href="/series">Series</Nav.Link>
                    <Nav.Link href="/">Salir</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export { NavBar }