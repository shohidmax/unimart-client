import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../../firebase.init';

const AddItem = () => {
    const exp = {
        "BarCode": "1136176",
        "Group": "TOILETRIES",
        "Product": "HAIR OIL",
        "Brand": "PARACHUTE",
        "Style": " COCONUT OIL 200ML",
        "Stock_Qty": 0,
        "CPU": 128,
        "CPU_Value": 0,
        "RPU": 140,
        "RPU_Value": 0,
        "Product_img_url": "https:\/\/pourobazar.com\/wp-content\/uploads\/2021\/09\/Parachute-Coconut-Oil-340ml.webp",
        "long_discription": "PARACHUTE COCONUT OIL 200ML is the original Product of PARACHUTE. It is a TOILETRIES item . It is HAIR OIL. To chaque it online by this barcode - 1136176 ."
       };
    const [user] = useAuthState(auth);
    const handleAddUser = event =>{
        
        event.preventDefault();
        const BarCode = event.target.BarCode.value;
        const Product = event.target.Group.value;
        const Brand = event.target.Brand.value;
        const Style = event.target.Style.value;
        const Stock_Qty = event.target.Stock_Qty.value;
        const CPU = event.target.CPU.value;
        const RPU = event.target.RPU.value;
        const Product_img_url = event.target.Product_img_url.value;
        const long_discription = event.target.long_discription.value;
        const email = event.target.email.value;

        const Productdata = {BarCode, Product, Brand, Style, Style, Stock_Qty, CPU, RPU, Product_img_url, long_discription, email};

        // send data to the server
        fetch('https://hidden-waters-14181.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Productdata)
        })
        .then(res => res.json())
        .then(data =>{
            alert('users added successfully!!!');
            event.target.reset();
        })
    }


    return (
        <div className='container'>
            
            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4 border border-primary rounded mt-2 mb-2'>
                <h2>Add Product</h2>
                <form onSubmit={handleAddUser}>
                <input  className="form-text form-control mb-2"   type="text" name="BarCode" placeholder='Product Barcode' required />    
                <input  className="form-text form-control mb-2"   type="text" name="Group" placeholder='Group like "BAby food / Chocolate"' required />    
                <input  className="form-text form-control mb-2"   type="text" name="Product" placeholder='Product like "Soap / Oil"' required />    
                <input  className="form-text form-control mb-2"   type="text" name="Brand" placeholder='Product Brand' required />    
                <input  className="form-text form-control mb-2"   type="text" name="Style" placeholder='Product Name' required />    
                <input  className="form-text form-control mb-2"   type="text" name="Stock_Qty" placeholder='Product Stock Quntity' required />    
                <input  className="form-text form-control mb-2"   type="text" name="CPU" placeholder='Cost Per Product' required />    
                <input  className="form-text form-control mb-2"   type="text" name="RPU" placeholder='Sale Per Product' required />    
                <input  className="form-text form-control mb-2"   type="text" name="Product_img_url" placeholder='Product Image Url' required />    
                <input  className="form-text form-control mb-2"   type="email" name="email" value={user?.email} readOnly  required />    
                <textarea  className="form-text form-control mb-2"   type="text" name="long_discription" required />    
                
                  <button type="submit" className="btn mb-2 btn-primary">Submit</button>
                </form>

                </div>
                <div className='col-md-4'></div>

            </div>
            
        </div>
    );
};

export default AddItem;