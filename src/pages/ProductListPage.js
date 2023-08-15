import {Container,Row,Col, ListGroup,Button} from 'react-bootstrap'

import SortOptionsComponent from '../components/SortOptionsComponent'
import PriceFilterComponent from '../components/filterQueryResultsOptions/PriceFilterComponent'
import RatingFilterComponent from '../components/filterQueryResultsOptions/RatingFilterComponent'
import CategoryFilterComponent from '../components/filterQueryResultsOptions/CategoryFilterComponent'
import AttributesFilterComponent from '../components/filterQueryResultsOptions/AtributesFilterComponent'
import ProductForListComponent from '../components/ProductForListComponent'
import PaginationComponent from '../components/PaginationComponent'
const ProductListPage = () =>{
    return (
        <Container fluid>
            <Row>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item className='mb-3 mt-3'><SortOptionsComponent/></ListGroup.Item>
                        <ListGroup.Item>FILTER: <br></br><PriceFilterComponent/></ListGroup.Item>
                        <ListGroup.Item><RatingFilterComponent/></ListGroup.Item>
                        <ListGroup.Item><CategoryFilterComponent/></ListGroup.Item>
                        <ListGroup.Item><AttributesFilterComponent/></ListGroup.Item>
                    </ListGroup>
                    <ListGroup.Item>
                        <Button variant="primary">Filter</Button>
                        <Button variant='danger'>Reset Filter</Button>
                    </ListGroup.Item>
                </Col>
                <Col md={9}>
                    {Array.from({length:5}).map((_,idx)=>(
                       <ProductForListComponent key={idx} images=
                       {["games","monitors","tablets","games",
                        "monitors"]} idx={idx}/> 
                    ))}
                    
                    <PaginationComponent/>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductListPage