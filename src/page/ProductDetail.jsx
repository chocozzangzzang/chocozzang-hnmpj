import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Dropdown, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {

    let { id } = useParams();
    const [product, setProduct] = useState(null);
    const getProductDetail = async () => {
        let url = `https://my-json-server.typicode.com/chocozzang/chocozzang-hnmpj/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        setProduct(data);
    }

    useEffect(() => {
        getProductDetail();
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