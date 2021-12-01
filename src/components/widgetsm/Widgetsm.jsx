import './widgetsm.css'

import Avatar from '../../images/avatar.png'

import VisibilityIcon from '@mui/icons-material/Visibility';

const Widgetsm = () => {
    return (
        <div className="widgetsm">
            <h3 className="widgetSmTitle">New Members</h3>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src={Avatar} alt="users avatar" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">bob the builder</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                        <VisibilityIcon className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={Avatar} alt="users avatar" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">bob the builder</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                        <VisibilityIcon className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={Avatar} alt="users avatar" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">bob the builder</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                        <VisibilityIcon className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={Avatar} alt="users avatar" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">bob the builder</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                        <VisibilityIcon className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={Avatar} alt="users avatar" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">bob the builder</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                        <VisibilityIcon className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={Avatar} alt="users avatar" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">bob the builder</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                        <VisibilityIcon className="widgetSmIcon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Widgetsm
