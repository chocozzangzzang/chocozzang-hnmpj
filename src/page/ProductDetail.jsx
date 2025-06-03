import { useEffect, useState } from 'react'
import { Button, Col, Container, Dropdown, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetail } from '../redux/reducers/productSlice';

const ProductDetail = () => {

    let { id } = useParams();
    // const [product, setProduct] = useState(null);?
    const product = useSelector(state=>state.product.productDetail);
    const dispatch = useDispatch();
    const productDetail = () => {
        // dispatch(productAction.getProductDetail(id));
        dispatch(getProductDetail(id));
    }

    useEffect(() => {
        productDetail();
    }, []);

    return (
        <Container className='detail-page'>
            <Row>
                <Col className='product-img'>
                    <img src={product?.img} width={300}/>
                </Col>
                <Col className='product-detail'>
                    <h5>{product?.title}</h5>
                    <p>₩{product?.price}</p>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            SIZE
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                product?.size.map(sz => (<Dropdown.Item>{sz}</Dropdown.Item>))
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button variant="dark" className='cart-add-btn'>장바구니 추가</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetail