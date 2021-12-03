import './product.css'
import { Link } from 'react-router-dom'
import { productData } from '../dummyData'

import Chart from '../components/charts/Chart'


const Product = () => {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <div className="productTitle">Product</div>
                <Link to="/newProduct">
                    <button className="productAddBtn">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey='Sales' title='Sales Performance' />
                </div>
                <div className="productTopRight">
                    <div className="productInfo">
                        <div className="productInfoTop">
                            <img 
                                src="https://images.unsplash.com/photo-1605711599412-775918dbe770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwYmFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60" 
                                alt="" 
                                className="productImage" 
                            />
                            <span className="productName">Coffee</span>
                        </div>
                        <div className="productInfoBottom">
                            <div className="productInfoItem">
                                <span className="productInfoKey">id:</span>
                                <span className="productInfoKey">123</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey">Sales</span>
                                <span className="productInfoKey">132</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey">Active</span>
                                <span className="productInfoKey">Yes</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey">In Stock:</span>
                                <span className="productInfoKey">No</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom"></div>
        </div>
    )
}

export default Product
