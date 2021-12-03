import './sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle'
import TimelineIcon from '@mui/icons-material/Timeline'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import PeopleIcon from '@mui/icons-material/People'
import StorefrontIcon from '@mui/icons-material/Storefront'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import MailIcon from '@mui/icons-material/Mail'
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed'
import ForumIcon from '@mui/icons-material/Forum'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import ReportIcon from '@mui/icons-material/Report'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to='/' className='link'>
                            <li className="sidebarListItem active">
                                <LineStyleIcon className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <TimelineIcon className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoneyIcon className="sidebarIcon" /> 
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to='users' className='link'>
                            <li className="sidebarListItem ">
                                <PeopleIcon className="sidebarIcon" />
                                Users
                            </li>
                        </Link>
                        <Link to='products' className='link'>
                        <li className="sidebarListItem">
                            <StorefrontIcon className="sidebarIcon" />
                            Products
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <PointOfSaleIcon className="sidebarIcon" /> 
                            Transactions
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailIcon className="sidebarIcon" />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeedIcon className="sidebarIcon" />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ForumIcon className="sidebarIcon" /> 
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <ManageAccountsIcon className="sidebarIcon" />
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <TimelineIcon className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <ReportIcon className="sidebarIcon" /> 
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
