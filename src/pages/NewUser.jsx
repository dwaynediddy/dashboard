import './newUser.css'

const NewUser = () => {
    return (
        <div className="newUser">
            <h2 className="newUserTitle">New User</h2>
            <form className="newUserForm">
                <div className="newUserFormItem">
                    <label>User Name</label>
                    <input 
                        type="text" 
                        placeholder="name" 
                    />
                </div>
                <div className="newUserFormItem">
                    <label>Full Name</label>
                    <input 
                        type="text" 
                        placeholder="name" 
                    />
                </div>
                <div className="newUserFormItem">
                    <label>Email</label>
                    <input 
                        type="email" 
                        placeholder="email" 
                    />
                </div>
                <div className="newUserFormItem">
                    <label>Password</label>
                    <input 
                        type="password" 
                        placeholder="password" 
                    />
                </div>
                <div className="newUserFormItem">
                    <label>Phone Number</label>
                    <input 
                        type="text" 
                        placeholder="+123 456 789" 
                    />
                </div>
                <div className="newUserFormItem">
                    <label>Address</label>
                    <input 
                        type="text" 
                        placeholder="city | country" 
                    />
                </div>
                <div className='newUserFormItem'>
                    <label>Active</label>
                    <select className='newUserSelect' name='active' id='active'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <button className="newUserBtn">Create</button>
            </form>
        </div>
    )
}

export default NewUser
