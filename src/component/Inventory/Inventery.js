import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventery = () => {
    
    const {id} = useParams();
    const [Pdata, setPdata] = useState({});
    useEffect( () =>{
        const url = `https://hidden-waters-14181.herokuapp.com/products/${id}`;
        fetch(url)
        .then(r => r.json())
        .then(data => setPdata(data));
    }, []); 

     const handleDelever = () =>{
        const currentStock = parseFloat(Pdata.Stock_Qty);
        const value = 1;
        const reStock = currentStock - value;
        console.log(reStock);
        
        const updatedStock = {reStock};
        // update Quntity quntity to the server
        const url = `https://hidden-waters-14181.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStock)
        })
        .then(res => res.json())
        .then(data =>{
            // setPdata(data);
            console.log('success', data);
            alert('product quntity added successfully!!!');
            // event.target.reset();
            window.location.reload();
        })
     }
    // const handleDelever = () =>{
    //     const currentStock = parseFloat(Pdata.Stock_Qty);
    //     const value = 1;
    //     const decrise = currentStock - value;
    //     console.log(decrise);
    // //     // currentStock = reStock;
    //     const updatedStockq = {decrise};
    //     console.log(updatedStockq);
    // }

    const handleUpdateProduct = event =>{
        event.preventDefault();
        // const handleDelever = () =>{
        //         const currentStock = parseFloat(Pdata.Stock_Qty);
        //         const decrise = currentStock - 1;
        //     //     console.log(decrise);
        //     //     // currentStock = reStock;
        //         const updatedStockq = {decrise};
        // }
        
        const Stock_Qty = event.target.Stock_Qty.value;
        const reStock = parseFloat(Stock_Qty) + Pdata.Stock_Qty;
        console.log(reStock, 're stoked');
        const updatedStock = {reStock};
        // update Quntity quntity to the server
        const url = `https://hidden-waters-14181.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStock)
        })
        .then(res => res.json())
        .then(data =>{
            // setPdata(data);
            console.log('success', data);
            alert('product quntity added successfully!!!');
            event.target.reset();
            window.location.reload();
        })
    }
 //onClick={handleDelever}
    return (
        <div className='container'>
            <div className='row'>
            <div className=" col-md-12 border border-primary rounded m-2">
            <div >
            <img style={{width: '350px', height: '100%'}} src={Pdata.Product_img_url} alt="" />
            <h2>Name : {Pdata.Brand}{" "}{Pdata.Product}{" "} {Pdata.Style}</h2>
            <h2>Stock : {Pdata.Stock_Qty}</h2>
            <h2>Suppler : {Pdata.Brand} Ltd.</h2>
            <h1>Product Barcode : {Pdata.BarCode}</h1>
            <button onClick={handleDelever}  className='btn btn-danger w-25 mt-2'> Delevery</button>
            </div>
            <div className='border border-primary rounded m-3'>
                <form className='m-2' onSubmit={handleUpdateProduct}>
                <input  className="form-text form-control mb-2"   type="number" name="Stock_Qty" placeholder='Product Stock Quntity' required />
                <input className="form-submit  btn btn-primary w-100 mb-2" type="submit" value="Add Stock"/>
                
            </form>
            </div>
             </div>
            </div>
        </div>
    );
};

export default Inventery;