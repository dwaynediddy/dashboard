import './productList.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/apiCalls'

import { DataGrid } from '@mui/x-data-grid'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { productRows } from '../dummyData'
import { Link } from "react-router-dom"


const ProductList = () => {
    const [product, setProduct] = useState(productRows)
    const dispatch = useDispatch()
    const products = useSelector(state => state.product.products)
    
    useEffect(() => {
        getProducts(dispatch)
    }, [dispatch])

    const handleDelete = (id) => {
        setProduct(product.filter(item => item.id !== id))
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 220 },
        { field: 'Product', headerName: 'Product', width: 200, renderCell: (params) => { 
            return (
                  <div className="productListProduct">
                      <img src={params.row.img} alt='' className="productListImg" />    
                      {params.row.name}
                  </div>
            )}},
        { field: 'Stock', headerName: 'Stock', width: 260 },
        {
          field: 'status',
          headerName: 'status',
          width: 120,
        },
        {
          field: 'Price',
          headerName: 'Price',
          width: 160,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell: (params) => {
              return (
                  <>
                      <Link to={'/product/' + params.row._id}>
                          <button className="productListEdit">Edit</button>
                      </Link>
                      <DeleteForeverIcon className="productListDelete" onClick={() => handleDelete(params.row._id)} />
                 </>
              )
          }
        },
      ]

    return (
        <div className="productList">
            <DataGrid
                rows={products}
                disableSelectionOnClick
                columns={columns}
                getRowId={row => row._id }
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    )
}

export default ProductList
