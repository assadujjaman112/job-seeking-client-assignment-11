
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import swal from 'sweetalert';
import PageLoader from '../components/PageLoader';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <PageLoader />;
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