import React from 'react';
import { Link } from 'react-router-dom';

const Bannar = () => {
    return (
        <div className="m-2 p-2">
      <div 
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://i.ibb.co/SrWkN3G/5.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-warning">Best Quality Chocolate Hare</h5>
              
              <Link to="../manageinventory" className="btn btn-primary">Manager Inventory</Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://i.ibb.co/qNgRh3p/6.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-warning">Best Quality Toiletris Product Here</h5>
              
              <Link to="../manageinventory" className="btn btn-primary">Manager Inventory</Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://i.ibb.co/8bSNBf2/7.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            <h5 className="text-warning">Best Quality Toiletris Product Here</h5>
              <Link to="../manageinventory" className="btn btn-primary">Manager Inventory</Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://i.ibb.co/wQbM3BF/8.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            <h5 >Top International Brand</h5>
              
              <Link to="../manageinventory" className="btn btn-primary">Manager Inventory</Link>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    );
};

export default Bannar;