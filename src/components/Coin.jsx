import React from "react";

export default function Coin({ name, price, priceChange, img, marketCap }) {
  return (
    <div className="coinDetails">
      <img src={img} alt={name} />
      <p style={{quotes: "'salam_' '_salam'"}}>{name}</p>
      <p>{price.toLocaleString()} $</p>
      <p style={{ color: priceChange > 0 ? "green" : "#FD5D5D" }}>
        {priceChange.toFixed(2)}
      </p>
      <p>{marketCap.toLocaleString()}</p>
    </div>
  );
}
