import { useState, useEffect } from 'react'
import './featuredInfo.css'
import { userRequest } from '.././redux/requestMethods'

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

const FeaturedInfo = () => {
    const [income, setIncome] = useState([])
    const [percentage, setPercentage] = useState(0)

useEffect(() => {
    const getIncome = async () => {
        try {
            const res = await userRequest.get('orders/income')
            setIncome(res.data)
            // not reading amount
            setPercentage((res.data[1].amount *100) / res.data[0].amount -100)
        } catch (err) {
            console.log(err)
        }
    }
        getIncome()
}, [])

console.log(income)
console.log(percentage) 

    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    {/* income not rendering */}
                    <span className="featuredMoney">${income[1]}</span>
                    <span className="featuredMoneyRate">
                        %{Math.floor(percentage)}{''}
                        {percentage < 0 ? (
                            <ArrowDownwardIcon className="featuredIcon negative" />
                            ) : (
                            <ArrowUpwardIcon className="featuredIcon" />
                         )}
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$52,596  </span>
                    <span className="featuredMoneyRate">
                        -217 <ArrowDownwardIcon className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$52,596  </span>
                    <span className="featuredMoneyRate">
                        +217 <ArrowUpwardIcon className="featuredIcon" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo
