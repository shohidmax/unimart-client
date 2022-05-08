import React from 'react';
import Bannar from '../Bannar/Bannar';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Products from '../Inventory/Products/Products';
import OurClient from '../OurClient/OurClient';
const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Products></Products>
            <OurClient></OurClient>
            <Contact></Contact>
            <Footer></Footer>
            
          
        </div>
    );
};

export default Home;