import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../redux/apiCalls'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const handleClick = (event) => {
        event.preventDefault()
        login(dispatch, { username, password })
    }

    return (
        <div style={{flex: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <input style={{padding: '10px 20px', marginBottom: '20px'}}
            type='text' placeholder='username' onChange={(event) => setUsername(event.target.value)} />
            <input style={{padding: '10px 20px', marginBottom: '20px'}}
            type='password' placeholder='password' onChange={(event) => setPassword(event.target.value)} />
            <button onClick={handleClick}style={{padding: '5px 20px', width: '100px'}}>Login</button>
        </div>
    )
}

export default Login
