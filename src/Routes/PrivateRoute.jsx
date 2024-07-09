
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import swal from 'sweetalert';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(loading);

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(user){
        return children;
    }
    return (
        swal("You have to log in first to view details"),
        <Navigate state={location?.pathname} to="/login"></Navigate>
    );
};

export default PrivateRoute;