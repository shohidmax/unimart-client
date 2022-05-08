import React from 'react';
import { Link, Routes } from 'react-router-dom';
import notFoundImg from './404-error-template-10.webp';
import './Notfound.css';


const Notfound = () => {
   return <Link to="Home"><img style={{width:'100%', height:'100%'}} src={notFoundImg} alt="404-error-template-10.webp" /></Link>
 
    
};

export default Notfound;