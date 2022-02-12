import { FC } from "react"
import { Navbar, Container, Nav, Button } from "react-bootstrap"
import { useAuth } from "../../../hooks"
import "./styless.css"

const NavBar: FC = () => {

    const { logout, currentUser } = useAuth()

    return (
        <Navbar className="nav-bar" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <h1 className="logo">CinemApp</h1>
                </Navbar.Brand>
                <Nav className="mr-3">
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
            </Container>
        </Navbar>
    )
}

export { NavBar }