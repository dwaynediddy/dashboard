import { useState, useEffect } from 'react'

import './widgetlg.css'
import { userRequest } from '../../redux/requestMethods'

import { format } from 'timeago.js'

const Widgetlg = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        const getOrders = async(res) => {
            try {
                const res = await userRequest.get('orders')
                setOrders(res.data)
            } catch (err) {
                console.log('error')
            }
        }
            getOrders()
        }, [])

    const Button = ({ type }) => {
        return <button className={"widgetLgBtn " + type}>{type}</button>
    }
    return (
        <div className="widgetlg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                {orders.map(order => (
                    <tr className="widgetLgTr" key={order._id}>
                    <td className="widgetLgUser">
                        <span className="widgetLgName">{order.userId}</span>
                    </td>
                    <td className="widgetLgDate">{format(order.createdAt)}</td>
                    <td className="widgetLgAmount">${order.amount}</td>
                    <td className="widgetLgStatus">
                        <Button type={order.status}/>
                    </td>
                </tr>
                    ))}
            </table>
        </div>
    )
}

export default Widgetlg
