import { useState, useEffect, useMemo } from 'react'
import './home.css' 
import FeaturedInfo from '../components/FeaturedInfo'
import Chart from '../components/charts/Chart'

import Widgetsm from '../components/widgetsm/Widgetsm'
import Widgetlg from '../components/widgetlg/Widgetlg'
import { userRequest } from '../redux/requestMethods'

const Home = () => {
    const [userStats, setUserStats] = useState([])

    const MONTHS = useMemo(
        () => [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
      []
    )

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await userRequest.get('/users/stats')
                res.data.map(item => 
                    setUserStats(prev => [
                        ...prev,
                        {name: MONTHS[item._id -1], 'Active User': item.total },
                    ])
                )
            } catch (err) {
                console.log('error message')
            }
        }
        getStats()
    },[MONTHS])


    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userStats} title='User Analytics' grid dataKey='Active User' />
            <div className="homeWidgets">
                <Widgetsm />
                <Widgetlg />
            </div>
        </div>
    )
}

export default Home
