import { useState, useEffect } from 'react'
import './widgetsm.css'

import VisibilityIcon from '@mui/icons-material/Visibility';
import { userRequest } from '../../redux/requestMethods'

const Widgetsm = () => {
    const [users, setUsers] = useState([])

useEffect(() => {
    const getUsers = async(req, res) => {
        try {
            const res = await userRequest.get('users/?new=true')
            setUsers(res.data)
        } catch (err) {
            console.log('error with widget sm user res')
        }
    }
        getUsers()
    }, [])

    return (
        <div className="widgetsm">
            <h3 className="widgetSmTitle">New Members</h3>
            <ul className="widgetSmList">
                {users.map(user => (
                    <li className="widgetSmListItem" key={user._id}>
                    <img src={user.image || 'https://boznoslawoffice.com/wp-content/uploads/2015/09/no_avatar.jpg' } alt="users avatar" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">{user.username}</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                        <VisibilityIcon className="widgetSmIcon" />
                        Display
                    </button>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default Widgetsm
