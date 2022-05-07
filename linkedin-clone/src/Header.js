import React from 'react'
import './Header.css';
import { BusinessCenter, Chat, Home, Notifications, Search, SupervisorAccount } from '@material-ui/icons';
import HeaderOption from './HeaderOption';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';


function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutOfApp = () => {
      dispatch(logout())
      auth.signOut();
  }

  return (
    <div className='header'>
        
    <div className="header__left">
            <img src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1650745940~hmac=951d510cd411681368556903ddd0c1ac" alt="" />
            <div className="header__search">
               <Search/>
                <input placeholder='Search' type="text" />
            </div>
    </div>
    <div className="header__right">
        <HeaderOption Icon={Home} title='Home'/>
        <HeaderOption Icon={SupervisorAccount} title='My Network'/>
        <HeaderOption Icon={BusinessCenter} title='Jobs' />
        <HeaderOption Icon={Chat} title='Messaging' />
        <HeaderOption Icon={Notifications} title='Notifications' />
        <HeaderOption avatar={true} title='Arthur' 
         onClick={logoutOfApp}
        />
       
        </div>
    </div>
  )
}

export default Header