import { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
// import { productAction }  from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/reducers/productSlice';

const ProductAll = () => {

    // const [productList, setProductList] = useState([]);
    const productList = useSelector(state=>state.product.productList);
    // console.log(productList);
    const [query, setQuery] = useSearchParams();
    const dispatch = useDispatch();

    const getAllProducts = () => {
        let searchQuery = query.get('q') || "";
        // console.log("sq : ", searchQuery);
        // dispatch(productAction.getProducts(searchQuery));
        dispatch(getProducts(searchQuery));
    }

    useEffect(() => {
        getAllProducts();
    }, [query]);

    return (
        <div className='wrapper'>
            <Container>
                <Row>
                    {productList?.map((product) => (
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