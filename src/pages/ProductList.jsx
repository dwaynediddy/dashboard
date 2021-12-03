import './productList.css'
import { useState } from 'react'

import { DataGrid } from '@mui/x-data-grid'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { productRows } from '../dummyData'
import { Link } from "react-router-dom"

const ProductList = () => {
    const [product, setProduct] = useState(productRows)

    const handleDelete = (id) => {
        setProduct(product.filter(item => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'Product', headerName: 'Product', width: 200, renderCell: (params) => { 
            return (
                  <div className="productListProduct">
                      <img src={params.row.image} alt='' className="productListImg" />    
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
                      <Link to={'/products/'+params.row.id}>
                          <button className="productListEdit">Edit</button>
                      </Link>
                      <DeleteForeverIcon className="productListDelete" onClick={() => handleDelete(params.row.id)} />
                 </>
              )
          }
        },
      ]

    return (
        <div className="productList">
            <DataGrid
                rows={product}
                disableSelectionOnClick
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    )
}

export default ProductList
