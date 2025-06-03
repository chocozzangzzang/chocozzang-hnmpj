import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/reducers/authSlice';


const Navbar = () => {
    const menuList = [
        '여성', 
        'Divided',
        '남성',
        '신생아/유아',
        '아동',
        'H&M Home',
        'Sale',
        '지속가능성'
    ];

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authenticate = useSelector(state=>state.auth.auth);
    const goToLoginPage = () => {
        navigate('/login');
    }
    const logoutUser = () => {
        // dispatch(authAction.logout());
        dispatch(logout());
        navigate('/');
    }

    const search = (event) => {
        if(event.key === "Enter") {
            // 입력한 검색어를 읽어와서 url을 바꿈 //
            let keyword = event.target.value;
            // console.log('keyword : ', keyword);
            navigate(`/?q=${keyword}`);
        }
    }

    return (
        <div>
            <div>
                {
                    !authenticate?
                    <div className='login-button' onClick={goToLoginPage}>
                        <FontAwesomeIcon icon={faUser}/>
                        <div>로그인</div>
                    </div> :
                    <div className='login-button' onClick={logoutUser}>
                        <FontAwesomeIcon icon={faUser}/>
                        <div>로그아웃</div>
                    </div>
                }
                
            </div>
            <div className='nav-section'>
                <img width={100} 
                src="https://images.seeklogo.com/logo-png/23/2/hm-logo-png_seeklogo-234240.png" alt="h&m" />
            </div>
            <div className='menu-section'>
                <ul className='menu-list'>
                    {
                        menuList.map(menu => (
                            <li>{menu}</li>
                        ))
                    }
                </ul>
                <div className='search-section'>
                    <FontAwesomeIcon icon={faSearch}/>
                    <input className="input-design" type="text" onKeyUp={(event) => search(event)}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar