import { Container, Nav, Navbar } from 'react-bootstrap'

const MyNavbar = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="fixed-top">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
