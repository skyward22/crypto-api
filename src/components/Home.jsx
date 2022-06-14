import React from 'react'
import { useEffect, useState } from "react";
import Axios from "axios";
import {Link, Route, Routes} from 'react-router-dom'
import Coin from "./Coin"

const Home = () => {
    const [listOfCoins, setListOfCoins] = useState([]);
    const [searchWord, setSearchWord] = useState("");
  
    useEffect(() => {
      Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=3").then(
        (response) => {
          console.log(response)
          setListOfCoins(response.data.coins);
        }
      );
    }, []);
  
    const filteredCoins = listOfCoins.filter((coin) => {
      return coin.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    console.log(filteredCoins)
  return (
   <div>   
    <div className="cryptoHeader">
    <input
      type="text"
      placeholder="Search Crypto..."
      onChange={(event) => {
        setSearchWord(event.target.value);
      }}
    />
    <Link to='/bitcoin'>Bitcoin</Link>
    <Link to='/ethereum'> Ethereum</Link>
    </div>

    <div className="cryptoDisplay">
        {filteredCoins.map((crypto) => {
          return (
            <Coin
              name={crypto.name}
              icon={crypto.icon}
              price={crypto.price}
              symbol={crypto.symbol}
            />
          );
        })}
      </div>
    </div>  
  )
}

export default Home