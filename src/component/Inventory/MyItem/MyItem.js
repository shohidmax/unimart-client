import React, { useEffect, useState } from 'react';


const myItem = () => {
    const [Add, setAdd] = useState([]);
    const url = `https://hidden-waters-14181.herokuapp.com/products?email=${email}`;
    useEffect( ()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, []);


    return (
        <div>
            <h1>My Item{Add.length}</h1>
        </div>
    );
};

export default myItem;