import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import axios from "axios";
const Home = () => {
  const [cryptoData, setCryptoData] = useState({});
  useEffect(() => {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,EOS,BCH&tsyms=USD,EUR,INR"
      )
      .then((res) => {
        setCryptoData(res.data);
      });
  }, []);

  let allKeys = [];

  if (cryptoData.DISPLAY) {
    allKeys = Object.keys(cryptoData.DISPLAY);
  }

  console.log(allKeys);
  return (
    <div>
      <Header />
      <div className="container">
        <div className="d-flex justify-content-between border-bottom p-3 ">
          <div>Coin</div>
          <div>Price</div>
          <div> Market cap</div>
          <div>High per day</div>
          <div>Low per day</div>

        </div>
      {allKeys.map((d, n) => {
        let dataset = cryptoData.DISPLAY[d];
        console.log(d, dataset);
        console.log(d);
        var baseURL = `https://www.cryptocompare.com${dataset.INR.IMAGEURL}`;
        return (
          <div className="d-flex justify-content-between border-bottom p-3">
                <div>
                  <img src={baseURL} className="coin-image" />
                </div>
                <div className="coin-value">{dataset.INR.PRICE}</div>
                <div className="coin-value">{dataset.INR.MKTCAP}</div>
                <div className="coin-value">{dataset.INR.HIGHDAY}</div>
                <div className="coin-value">{dataset.INR.LOWDAY}</div>


          </div>
        )
      })}
      </div>
    </div>
  );
};

export default Home;
