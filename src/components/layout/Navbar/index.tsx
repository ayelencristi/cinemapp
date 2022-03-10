import { FC } from "react"
import { Navbar, Container, Nav, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useAuth } from "../../../hooks"
import "./styless.css"

const NavBar: FC = () => {

    const { logout, currentUser } = useAuth()

    return (
        <Navbar collapseOnSelect className="nav-bar" variant="dark" expand="lg" fixed="top" >
            <Container>
                <Navbar.Brand href="/">
                    <h1 className="logo col-8">Cinem<strong>APP</strong></h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto justify-content-end">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/movies">Películas</Nav.Link>
                        <Nav.Link href="/series">Series</Nav.Link>
                        {currentUser?.role === 'admin' && (
                            <>
                                <Nav.Link href="/admin">Admin</Nav.Link>
                                <Nav.Link href="/users">Usuarios</Nav.Link>
                            </>)}
                        <Button variant="link" onClick={logout}>Salir</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export { NavBar }