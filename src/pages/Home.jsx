import './home.css' 
import FeaturedInfo from '../components/FeaturedInfo'
import Chart from '../components/charts/Chart'

import { userData } from '../dummyData'
import Widgetsm from '../components/widgetsm/Widgetsm'
import Widgetlg from '../components/widgetlg/Widgetlg'

const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title='User Analytics' grid dataKey='Active User' />
            <div className="homeWidgets">
                <Widgetsm />
                <Widgetlg />
            </div>
        </div>
    )
}

export default Home
