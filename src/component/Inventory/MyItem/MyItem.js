import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const MyItem = () => {
    const [user] = useAuthState(auth);
    const email = user.email;
    const [Add, setAdd] = useState([]);
    const url = `https://hidden-waters-14181.herokuapp.com/products?email=${email}`;
    useEffect( ()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setAdd(data));
    }, []);
    


    return (
        <div>
            <h1>My Item {0}</h1>
        </div>
    );
};

export default MyItem;