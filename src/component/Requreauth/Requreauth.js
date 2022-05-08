import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const Requireauth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if(loading){
        return <Spinner animation="border" variant="primary" />
    }
    if(!user){
        return <Navigate to="/Login" state ={{from: location}} replace></Navigate>
    }
    
    return children;
};

export default Requireauth;