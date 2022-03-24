import React, { useEffect, useState } from "react";
import { getCoins } from "../services/api";
import useSearch from "./useSearch";
import "./style.scss";
import Coin from "./Coin";

export default function Demo() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      const data = await getCoins();
      setData(data);
    })();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const [res] = useSearch(data, search);

  return (
    <div className="coinContainer">
      <input className="input" onChange={handleChange} />
      <div>
        {res?.map((i) => (
          <Coin
            name={i.name}
            price={i.current_price}
            img={i.image}
            priceChange={i.price_change_percentage_24h}
            key={i.id}
            marketCap={i.market_cap}
          />
        ))}
      </div>
    </div>
  );
}
