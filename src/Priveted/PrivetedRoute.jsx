
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivetedRoute = ({ children }) => {
    const { user, loding } = useContext(AuthContext)
    const loction = useLocation()
    if (loding) {
        return <span className="loading loading-dots loading-lg">Lodding</span>
    }

    if (!user) {
        return <Navigate to='/login' state={loction?.pathname || '/'}></Navigate>
    }
    return <div>
        {children}
    </div>
}

export default PrivetedRoute

PrivetedRoute.propTypes = {
    children: PropTypes.any
};

