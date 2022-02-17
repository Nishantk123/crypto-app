import React from "react";
import { useHistory } from "react-router-dom";

const Footer = () => {
  const history = useHistory();
  const handleNews = ()=>{
    history.push("/news")
  }
  const handleMarket = () =>{
    history.push('/market')
  }
  return (
    <nav className="navbar fixed-bottom">
      <div className="container-fluid">
        <div className="btn-group w-100" role="group" aria-label="Basic example">
          <button type="button" className="btn text-light">
            <img src="https://cdn-icons-png.flaticon.com/512/1946/1946433.png"></img>
            Home
          </button>
          <button type="button" className="btn text-light">
            <img src="https://cdn-icons-png.flaticon.com/512/578/578196.png"></img>
            Sign
          </button>
          <button type="button" className="btn">
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"></img>
          </button>
          <button type="button" className="btn text-light" onClick={handleMarket}>
            <img src="https://img.icons8.com/dusk/344/medium-connection.png"></img>
            Mar
          </button>
          <button type="button" className="btn text-light" onClick={handleNews}>
            <img src="https://cdn-icons-png.flaticon.com/512/237/237014.png"></img>
            News
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Footer;