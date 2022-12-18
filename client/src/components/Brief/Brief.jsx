import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Brief() {
  return (
    <>
      <div className="pura_content d-flex flex-row justify-content-evenly w3-panel w3-topbar w3-bottombar w3-border-purple m-0 p-4" style={{backgroundImage:'url(../../assets/img/cubes_abstract_4k_hd_purple.jpg)'}}>
        <div className="main d-flex flex-column">
          <div className="clicked_pic_heading w3-panel w3-bottombar w3-border-white w3-hover-border-purple w3-text-white" style={{ fontFamily: "Lobster", fontSize: "45px" }}>UNITY DAY JOGGING</div>
          <div className="clicked_pic "><div className="card" style={{ width: "47vw", height: "85vh" }}>
            <img src="../../assets/img/WhatsApp Image 2022-12-17 at 12.54.25 PM.jpeg" className="card-img-top" alt="..." style={{ height: "75vh", width: "46.8vw" ,border:"8px solid black"}} />
            <div className="card-body">
              <p className="card-text">"WHO SAID YOU HAVE TO RUN FOR MARATHON..MEET IIIT RANCHI MARATHON + JOGGING TEAM ONCE"</p>
            </div>
          </div>
          </div>
        </div>
        <div className="bagal_wala_content d-flex flex-column">
          <div className="previous w3-text-white p-3" style={{ fontFamily: "Sofia", fontSize: "20px" }}>PREVIOUS....<br />
            <div className="card" style={{ width: "20vw", height: "30vh" }}>
              <img src="../../assets/img/WhatsApp Image 2022-12-17 at 12.54.25 PM (1).jpeg" className="card-img-top" alt="..." style={{ width: "19.9vw", height: "30vh" ,border:"2px solid black"}} />
            </div>
          </div> 
          <div className="current w3-text-white p-3" style={{ fontFamily: "Lobster", fontSize: "25px" }}>YOU ARE WATCHING.. <br /><div className="card" style={{ width: "20vw", height: "30vh" }}>
              <img src="../../assets/img/WhatsApp Image 2022-12-17 at 12.54.25 PM.jpeg" className="card-img-top" alt="..." style={{ width: "19.9vw", height: "30vh" ,border:"2px solid black"}} />
            </div> </div>
          <div className="next w3-text-white p-3" style={{ fontFamily: "Sofia", fontSize: "20px" }}>NEXT....
          <br /><div className="card" style={{ width: "20vw", height: "30vh" }}>
              <img src="../../assets/img/WhatsApp Image 2022-12-17 at 12.54.28 PM.jpeg" className="card-img-top" alt="..." style={{ width: "19.9vw", height: "30vh" ,border:"2px solid black"}} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
