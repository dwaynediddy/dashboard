import './home.css' 
import FeaturedInfo from '../components/FeaturedInfo'
import Chart from '../components/charts/Chart'

import { userData } from '../dummyData'

const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title='User Analytics' grid dataKey='Active User' />
        </div>
    )
}

export default Home
