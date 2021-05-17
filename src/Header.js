import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HeaderOption from './HeaderOption'
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/userSlice';
function Header() {
    const dispatch = useDispatch()

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    }
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="logo" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption title="Home" Icon={HomeIcon} />
                <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
                <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
                <HeaderOption title="Messaging" Icon={ChatIcon} />
                <HeaderOption title="Notification" Icon={NotificationsIcon} />
                <HeaderOption
                    avatar={'https://i.pinimg.com/originals/29/24/89/292489e7d0bf8ce7d5ffd81be62d0800.png'}
                    title="Stairss"
                    onClick={logoutOfApp}
                />

            </div>
        </div>
    )
}

export default Header
