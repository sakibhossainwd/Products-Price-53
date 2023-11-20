// eslint-disable-next-line no-unused-vars
import React from "react";
import Features from "../Features/Features";

const PriceCart = ({ price }) => {
//   console.log(price);
  return (
    <div className="bg-indigo-200 rounded-md p-5">
      <h2 className="text-center">
        <samp className="text-3xl font-bold text-purple-700">
          {price.price}
        </samp>
        <samp>/Mon</samp>
      </h2>
      <h4 className="text-2xl mt-2 font-semibold text-purple-900 text-center">
        {price.name}
      </h4>
      <p className="font-semibold my-2">Features:-</p>
      {price.features.map((feature, idx) => (
        <Features
        key={idx}
        feature={feature}
        ></Features>
      ))}
      <button className="w-full bg-indigo-700 text-white py-2 rounded-md mt-5 hover:bg-indigo-600">Buy Now</button>
    </div>
  );
};

export default PriceCart;
