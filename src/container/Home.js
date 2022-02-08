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
      This is home page
      {allKeys.map((d, n) => {
        let dataset = cryptoData.DISPLAY[d];
        console.log(d, dataset);
        console.log(d);
        return <div>{d}</div>;
      })}
    </div>
  );
};

export default Home;
