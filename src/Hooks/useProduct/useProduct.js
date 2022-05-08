import { useEffect, useState } from "react";

const useProduct = () =>{
    const [Product, setProduct] = useState([]);

    useEffect( ()=>{
        fetch('https://hidden-waters-14181.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProduct(data));
    }, []);
    return [Product, setProduct]
}

export default useProduct;