
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { useEffect } from 'react'
import { loginUserThunk } from './store/slice/user/user.thunk'


function App() {
const {isAuthentication}= useSelector(state => state.userReducer)
const dispatch = useDispatch()

useEffect(()=>{
  dispatch(loginUserThunk())
},[])
 
  return (
    <>
    {/* <Toaster position='top-center' reverseOrder={false}/> */}
    </>
  )
}

export default App
