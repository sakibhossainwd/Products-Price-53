// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import PriceCart from "../PriceCart/PriceCart";

const PriceList = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch("prices.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);

  return (
    <div className="mx-5">
      <h1 className="text-center bg-fuchsia-700 mt-3 p-3  font-bold text-white text-2xl">Here is all price list</h1>
      <div className="grid md:grid-cols-3 gap-3 mt-4">
        {prices?.map((price) => (
          <PriceCart key={price.id} price={price}></PriceCart>
        ))}
      </div>
    </div>
  );
};

export default PriceList;
