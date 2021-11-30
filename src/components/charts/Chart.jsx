import './chart.css'

import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({ title, data, dataKey, grid }) => {


    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey='name' stroke='#3727e9' />
                    <Line type='monotone' dataKey={dataKey} stroke='#3727e9' />
                    <Tooltip />
                    {grid && <CartesianGrid stroke='#e6e6e6' strokeDasharray='5 5' />}
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
