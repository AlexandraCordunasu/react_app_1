import {Col,Row,Container, Alert, ListGroup, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
const CartPage = () =>{
    return(
        <Container fluid>
            <Row className='mt-4'>
                <Col md={8}>
                    <h1>Shopping Cart</h1>
                    {Array.from({length:3}).map((item)=>(
                        <>
                        CartItemComponent<br/>
                        </>
                    ))}
                    <Alert variant='info'>Your cart is empty</Alert>
                </Col>
                <Col md={4}>
                    <ListGroup>
                        <ListGroup.Item>
                         <h3>Subtotal</h3>   
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: <span className='fw-bold'>$899</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <LinkContainer to="/user/order-details">
                            <Button type='buttom'>Proceed To Checkout</Button>
                            </LinkContainer>
                        </ListGroup.Item>
                    </ListGroup>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default CartPage