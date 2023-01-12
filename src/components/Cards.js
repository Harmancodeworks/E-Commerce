import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Cardsdata from "./CardsData";
import "./style.css";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";

const Cards = () => {
  const [data, setData] = useState(Cardsdata);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  console.log(data);

  const dispatch = useDispatch();

  const send = (e) => {
    console.log(e);
    dispatch(ADD(e));
  };

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updateProduct = data.filter((x) => x.category === cat);
    setFilter(updateProduct);
    console.log( updateProduct);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="button text-center mt-4 mb-3">
          <button
            className="btn btn-outline-dark text-info fw-bold important"
            onClick={() => setFilter(data)}
            
          >
            All
          </button>
          <button
            className="btn btn-outline-dark text-info fw-bold ms-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>

          <button
            className="btn btn-outline-dark text-info fw-bold ms-2 "
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark text-info fw-bold ms-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery{" "}
          </button>
          <button
            className="btn btn-outline-dark text-info fw-bold ms-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </button>
        </div>

        {filter.map((element) => {
          console.log(element)
          return (
            <>
              <div className="col-md-3 p-2 text-center mt-2" key={element.id}>
                <div className="card border border-info pp ">
                  <img src={element.imgdata } className="card-img-top  " alt="..." />
                  <div className="card-body mt-2">
                    <h5 className="card-title title">{element.rname}</h5>
               
                    <p className="card-text fw-bold">${element.price}</p>
                    {/* <NavLink
                      to={`/Products/${product.id}`}
                      className="btn btn-outline-dark"
                    >
                      Buy Now
                    </NavLink> */}
                    <div className="button_div d-flex justify-content-center">
                      <button
                        onClick={() => send(element)}
                        className="btn btn-outline-info"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="Main">
        <div className="container-fluid">
          <h1 className="display-6 fw-bolder text-center mt-5">
            Our <span className="text-danger ">Lasted</span> Product
          </h1>
          <hr />

          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </div>
    </>
    // <div className="container-fluid mt-3">
    //   <h2 className="text-center">Lets make an Order</h2>
    //   <hr />
    //   <div className="row d-flex justify-content-center align-items-center">
    //     {data.map((element, id) => {
    //       return (
    //         <>
    //           <Card
    //             style={{ width: "22rem", border: "none" }}
    //             className="mx-2 mt-4 card_style border border-info"
    //           >
    //             <img variant="top" src={element.imgdata} className="mt-3 pp" />
    //             <Card.Body >
    //               <Card.Title>{element.rname}</Card.Title>
    //               <Card.Text>Price : ₹ {element.price}</Card.Text>
    //               <div className="button_div d-flex justify-content-center">
    //                 <button
    //                   onClick={() => send(element)}
    //                   className="btn btn-outline-info"
    //                 >
    //                   Add to Cart
    //                 </button>
    //               </div>
    //             </Card.Body>
    //           </Card>
    //         </>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default Cards;
