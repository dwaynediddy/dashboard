import React from 'react'
import './topbar.css'

import Avatar from '../../images/avatar.png'

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SettingsIcon from '@mui/icons-material/Settings'

const Topbar = () => {
    return (
        <div className='topbar'>
            <div className="topbar-wrapper">
                <div className="topbarLeft">
                    <span className='logo'>Kepac Admin</span>
                </div>
                <div className="topRight">
                    <div className='topbarIconContainer'>
                        <NotificationsNoneIcon />
                        <span className='topIconBag'>2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <SettingsIcon />
                    </div>
                    <img src={Avatar} alt='' className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar
