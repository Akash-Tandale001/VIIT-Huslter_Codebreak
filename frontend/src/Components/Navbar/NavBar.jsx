import React,{useState,useEffect} from 'react';
import { Button } from './Button';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import './NavBar.css';
import { deleteAuth } from '../../Reducer/authSlice';
function NavBar() {
  const[click , setClick] = useState(false);
  const [button, setButton]= useState(true); 

  const handleClick = ()=> setClick(!click);
  const closeMobileMenu = ()=> setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    }else{
      setButton(true);
    }
  }; 
  let check = sessionStorage.getItem("loginToken");


  useEffect(() => {
    showButton();
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout=()=>{
    dispatch(deleteAuth())
    navigate("/");
  }

  

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    VIIT-Hustler <i className='fab fa-typo3'/>  
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                {
                  check!==null ? (
                    <li className='nav-item'>
                    <Link to='/base/categories' className='nav-links' onClick={closeMobileMenu}>
                      Category
                    </Link>
                  </li>
                  ):null
                }
                  
                  <li className='nav-item'>
                    <Link to='#' className='nav-links' onClick={closeMobileMenu}>
                    About Us
                    </Link>
                  </li>
                  {
                    check==null ? (
                      <li className='nav-item'>
                      <Link to='/Signup' className='nav-links' onClick={closeMobileMenu}>
                      {button && <Button buttonStyle='btn--outline'> SIGN  UP </Button>}
                      </Link>
                    </li>
                    ):null
                  }
                 {
                  check===null ? (
                    <li className='nav-item'>
                    <Link to='/Login' className='nav-links' onClick={closeMobileMenu}>
                    {button && <Button buttonStyle='btn--outline'> LOGIN </Button>}
                    </Link>
                  </li>
                  ):(
                    <li className='nav-item'>
                    <Link to='/Login' className='nav-links' onClick={handleLogout}>
                    {button && <Button buttonStyle='btn--outline'> LOGOUT </Button>}
                    </Link>
                  </li>
                  )
                 }
                </ul>
            </div>
        </nav>
    </>
  );
}

export default NavBar