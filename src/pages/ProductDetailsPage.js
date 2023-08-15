import {Form,Row,Col, Container,Image,ListGroup, Button,Alert} from 'react-bootstrap'
import AddedToCartMessageComponent from '../components/AddedToCartMessageComponent'
import { Rating } from 'react-simple-star-rating'
import ImageZoom from "js-image-zoom"
import { useEffect } from 'react'
const ProductDetailsPage = () =>{
    var options={
        scale: 2,
        offset:{vertical: 0, horizontal: 0},
    }
    useEffect(()=>{
        new ImageZoom(document.getElementById("first"),options)
        new ImageZoom(document.getElementById("second"),options)
        new ImageZoom(document.getElementById("third"),options)
    
    }
    )
    return (
        <Container>
            <AddedToCartMessageComponent />
            <Row className="mt-5">
                <Col style={{zIndex: 1}} md={4}>
                        <div id='first' className='mt-3' >
                            <Image crossOrigin='anonymous' fluid src="/images/games-category.png"/>
                        </div> 
                        <div  id='second' className='mt-3' >
                            <Image crossOrigin='anonymous' fluid src="/images/games-category.png"/>
                        </div> 
                        <div id='third' className='mt-3' >
                            <Image crossOrigin='anonymous' fluid src="/images/games-category.png"/>
                        </div> 
                </Col>
                <Col md={8}>
                    <Row>
                        <Col md={8}>
                        <ListGroup variant = "flush">
                            <ListGroup.Item><h1>Product name</h1></ListGroup.Item>
                            <ListGroup.Item> <Rating readonly size={20} initialValue={5} ></Rating></ListGroup.Item>
                            <ListGroup.Item>Price <span className='fw-bold'>$345</span></ListGroup.Item>
                            <ListGroup.Item>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</ListGroup.Item>
                        </ListGroup>
                        </Col>
                        <Col md={4}>
                            <ListGroup>
                                <ListGroup.Item>Status: in stock</ListGroup.Item>
                                <ListGroup.Item>Price <span className='fw-bold'>$345</span></ListGroup.Item>
                                <ListGroup.Item> 
                                    Quantity:
                                <Form.Select size = "lg" aria-label="Default select example">
                                    <option>1</option>
                                    <option value="1">2</option>
                                    <option value="2">3</option>
                                    <option value="3">4</option>
                                </Form.Select>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button variant="danger">Add to cart</Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='mt-5'>
                            <h5>REVIEWS</h5>
                        <ListGroup variant = "flush">
                            {Array.from({length: 10}).map((item,idx)=>(
                                <ListGroup.Item key={idx}>
                                John Doe <br />
                                <Rating readonly size={20} initialValue={5} ></Rating>
                                <br/>
                                20-09-2001<br/>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                        </Col>
                    </Row>
                    <hr/>
                    <Alert variant="danger">Login first to write a review</Alert>
                    <Form>
                        
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Write a review</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Select aria-label="Default select example">
                            <option>Your Rating</option>
                            <option value="5">5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                        </Form.Select>
                        <Button className='mb-3 mt-3' variant='primary'>Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetailsPage