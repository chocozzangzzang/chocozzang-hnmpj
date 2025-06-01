import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {

    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();

    const getProducts = async () => {
        let searchQuery = query.get('q') || "";
        console.log("sq : ", searchQuery);
        let url = ` https://my-json-server.typicode.com/chocozzang/chocozzang-hnmpj/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }

    useEffect(() => {
        getProducts();
    }, [query]);

    return (
        <div className='wrapper'>
            <Container>
                <Row>
                    {productList.map((product) => (
                        <Col lg={3} key={product.id}>
                            <ProductCard item={product}/>
                        </Col>
                    ))}
                 </Row>
            </Container>
        </div>
    )
}

export default ProductAll