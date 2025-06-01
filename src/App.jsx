import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ProductAll from './page/ProductAll'
import Login from './page/Login'
import ProductDetail from './page/ProductDetail'
import Navbar from './component/Navbar'
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

// 1. 전체 상품 페이지, 로그인, 상품 상세 페이지
// 1-1. Navigation Bar
// 2. 전체 상품 페이지 -> 전체 상품을 볼 수 있음
// 3. 로그인 버튼 -> 로그인 페이지
// 4. 상품 디테일을 눌러도 
// - 로그인이 되어있지 않으면 로그인 페이지가 나옴 
// - 로그인이 되어 있다면 상품 디테일을 볼 수 있음
//   -> PrivateRoute를 사용함 조건에 따라서 상품디테일 or Navigate로 redirect
// 5. 로그아웃 버튼을 클릭하면 로그아웃 기능
// 6. 로그아웃이 되면 상품 디테일은 볼 수 없음
// 7. 로그인 시 - 로그아웃 / 로그아웃 시 - 로그인 버튼
// 8. 상품 검색
function App() {
  const [authenticate, setAuthenticate] = useState(false); // true - 로그인 , false - 로그아웃
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll />}/>
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />}/>
      </Routes>
    </div>
  )
}

export default App
