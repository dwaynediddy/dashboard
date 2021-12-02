import './user.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import PublishIcon from '@mui/icons-material/Publish'


const User = () => {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h2 className="userTitle">Edit User</h2>
                <button className="userAddButton">Create</button>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img 
                        src="https://images.unsplash.com/photo-1634896941598-b6b500a502a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
                        alt=""
                        className='userShowImg' 
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">add name</span>
                            <span className="userShowUserJobTitle">add job title</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowBottomTitle">Account Details</span>
                        <div className="userInfo">
                            <PermIdentityIcon className="userIcon" />
                            <span className="infoShowUserTitle">coolusername369</span>
                        </div>
                        <div className="userInfo">
                            <CalendarTodayIcon className="userIcon" />
                            <span className="infoShowUserTitle">D.O.B</span>
                        </div>
                        <span className="userShowBottomTitle">Contact Details</span>
                        <div className="userInfo">
                            <MailOutlineIcon className="userIcon" />
                            <span className="infoShowUserTitle">Email@email.com</span>
                        </div>
                        <div className="userInfo">
                            <PhoneIphoneIcon className="userIcon" />
                            <span className="infoShowUserTitle">123-456-789</span>
                        </div>
                        <div className="userInfo">
                            <LocationOnOutlinedIcon className="userIcon" />
                            <span className="infoShowUserTitle">New York | U.S.A</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                        <span className="userUpdateTitle">Edit</span>
                        <form className="userUpdateForm">
                            <div className="userUpdateLeft">
                                <div className="userUpdatesItem">
                                    <label>Username</label>
                                    <input 
                                        type="text" 
                                        className="userUpdateInput" 
                                        placeholder="Username"
                                    />
                                </div>
                                <div className="userUpdatesItem">
                                    <label>Full Name</label>
                                    <input 
                                        type="text" 
                                        className="userUpdateInput" 
                                        placeholder="Username"
                                    />
                                </div>
                                <div className="userUpdatesItem">
                                    <label>Email</label>
                                    <input 
                                        type="text" 
                                        className="userUpdateInput" 
                                        placeholder="Email@email.com"
                                    />
                                </div>
                                <div className="userUpdatesItem">
                                    <label>Phone</label>
                                    <input 
                                        type="text" 
                                        className="userUpdateInput" 
                                        placeholder="Username"
                                    />
                                </div>
                                <div className="userUpdatesItem">
                                    <label>Address</label>
                                    <input 
                                        type="text" 
                                        className="userUpdateInput" 
                                        placeholder="Username"
                                    />
                                </div>
                            </div>
                            <div className="userUpdateRight">
                                <div className="userUpdateUpload">
                                     <img src="https://images.unsplash.com/photo-1634896941598-b6b500a502a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
                                     alt="" 
                                     className="userUpdateimg" />
                                     <label htmlFor="file"><PublishIcon className="userEditIcon" /></label>
                                     <input type='file' id='file' style={{ display: 'none'}} />
                                </div>
                                <button className="userUpdateBtn">Update</button>
                            </div>
                        </form>
                </div>
            </div>
        </div>
    )
}

export default User
