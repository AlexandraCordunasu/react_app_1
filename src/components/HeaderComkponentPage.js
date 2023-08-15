import {Navbar,Nav,Container,NavDropdown, Badge,Form,Dropdown,DropdownButton,Button, InputGroup} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Link}  from "react-router-dom"

const HeaderComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="bg-body-tertiary">
            <Container>
                <LinkContainer to = "/">
                    <Navbar.Brand href="/">BEST ONLINE SHOP</Navbar.Brand>
                </LinkContainer>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <InputGroup>
                        <DropdownButton id="dropdown-basic-button" title="All">
                            <Dropdown.Item>Electronics</Dropdown.Item>
                            <Dropdown.Item>Books</Dropdown.Item>
                            <Dropdown.Item>Cars</Dropdown.Item>
                        </DropdownButton>
                        <Form.Control type="text" placeholder="Search in shop..." />
                    <Button variant="warning">
                        <i className="bi bi-search text-dark"></i>
                    </Button>
                    </InputGroup>
                    </Nav>
                    <Nav>
                        <LinkContainer to="/admin/orders">
                            <Nav.Link >
                                Admin
                            </Nav.Link>
                        </LinkContainer>
                    <NavDropdown title="John Doe" id="collasible-nav-dropdown">
                    <NavDropdown.Item eventKey="/user/my-orders" as={Link} to ="/user/my-orders">My orders</NavDropdown.Item>
                    <NavDropdown.Item eventKey="/user" as={Link} to ="/user">My profile</NavDropdown.Item>
                    <NavDropdown.Item>Log out</NavDropdown.Item>
                    </NavDropdown>
                    <LinkContainer to="/login">
                            <Nav.Link >
                                Login
                            </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/register">
                            <Nav.Link >
                                Register
                            </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/cart">
                        <Nav.Link >
                            <Badge pill bg="danger">
                                2
                            </Badge>
                            <i className="bi bi-cart-dash"></i>
                            <span className='ms-1'>CART</span>
                        </Nav.Link>
                    </LinkContainer>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HeaderComponent