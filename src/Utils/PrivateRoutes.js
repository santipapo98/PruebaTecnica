import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
    let token = useSelector(state => state.user_info.auth_token)
    return (
        token ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoutes