import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'




const PrivateRoutes = () => {
    const isAuth = useSelector((state) => state.AuthReducer.isAuth);

return (
    isAuth ? <Outlet/> : <Navigate to='/'/>
  )
}


export default PrivateRoutes