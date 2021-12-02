import { useState } from 'react'

import './userList.css'
import { DataGrid } from '@mui/x-data-grid'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Avatar from '../images/avatar.png'

import { rows } from '../dummyData'
import { Link } from "react-router-dom"

const UserList = () => {
    const [ data, setData ] = useState(rows)

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'user', headerName: 'user', width: 200, renderCell: (params) => { 
      return (
            <div className="userListUser">
                <img src={Avatar} alt='' className="userListImg" /> 
                {/* use below for http source */}
                {/* <img src={params.rows.avatar} alt='' />  */}
                {params.row.username}
            </div>
      )}},
  { field: 'email', headerName: 'email', width: 260 },
  {
    field: 'status',
    headerName: 'status',
    width: 120,
  },
  {
    field: 'transaction',
    headerName: 'Transaction Volume',
    width: 160,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 150,
    renderCell: (params) => {
        return (
            <>
                <Link to={'/users/'+params.row.id}>
                    <button className="userListEdit">Edit</button>
                </Link>
                <DeleteForeverIcon className="userListDelete" onClick={() => handleDelete(params.row.id)} />
           </>
        )
    }
  },
]
    return (
        <div className="userList">
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    )
}

export default UserList
