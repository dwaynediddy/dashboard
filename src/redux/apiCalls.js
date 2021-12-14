import { loginStart, loginFailure, loginSuccess } from './userRedux'
import { getProductStart, getProductSuccess, getProductFailure} from './productRedux'
import { publicRequest } from './requestMethods'

export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = await publicRequest.post('/auth/login', user)
        dispatch(loginSuccess(res.data))
    } catch (err) {
        dispatch(loginFailure())
    }
}

export const getProducts = async (dispatch) => {
    dispatch(getProductStart())
    try {
        const res = await publicRequest.get('/products')
        dispatch(getProductSuccess(res.data))
    } catch (err) {
        dispatch(getProductFailure())
    }
}