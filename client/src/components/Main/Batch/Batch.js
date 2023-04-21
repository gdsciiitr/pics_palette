import React from "react";
import "./Batch.css";
import first from "../../../assets/img/first.webp";
import second from "../../../assets/img/second.jpeg";
import third from "../../../assets/img/third.jpeg";
import fourth from "../../../assets/img/fourth.jpeg";
import { NavLink } from "react-router-dom";

const Batch = () => {
  const user = JSON.parse(localStorage.getItem("profiles"));
  const batches = [
    first, second, third, fourth
  ];

  return (
    <div className="mx-auto col-md-10 col-11 my-4 p-4 batch">
      <h1>Our Batches</h1>
      <div className="batchsubcont">
        {batches.map((img, index) => {
          return (
            <div
              className="d-flex justify-content-around align-items-center my-3"
              key={index}
            >
              <img src={img} alt="" className="batchimg" />
              <h3>2k{21 + index} Batch</h3>
              <NavLink
                to={`${!user ? "/signin" : `/batch/batch-2k${21 + index}`}`}
                className="btn btn-primary batchbtn"
              >
                See More
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Batch;
