import './product.css'
import { Link } from 'react-router-dom'
import { productData } from '../dummyData'
import PublishIcon from '@mui/icons-material/Publish'

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
                                <span className="productInfoValue">123</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey">Sales</span>
                                <span className="productInfoValue">132</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey">Active</span>
                                <span className="productInfoValue">Yes</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey">In Stock:</span>
                                <span className="productInfoValue">No</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <input type='text' placeholder='product name' />
                        <label>In Stock</label>
                        <select name='inStock' id='idStock'>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <label>Active</label>
                        <select name='active' id='idactive'>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img 
                            src="https://images.unsplash.com/photo-1605711599412-775918dbe770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwYmFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60" 
                            alt="" 
                            className="productUploadImage" 
                        />
                        <label for="file" id='file'>
                            <PublishIcon />
                        </label>
                        <input type="file" id="file" style={{display: "none"}} />
                        </div>
                        <button className="productSubmitBtn">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product
