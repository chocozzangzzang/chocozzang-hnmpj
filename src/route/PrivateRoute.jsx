import { useSelector } from 'react-redux'
import ProductDetail from '../page/ProductDetail'
import { Navigate } from 'react-router-dom'

const PrivateRoute = () => {
    const authenticate = useSelector(state=>state.auth.auth);
    return authenticate? <ProductDetail /> : <Navigate to="/login" />
}

export default PrivateRoute