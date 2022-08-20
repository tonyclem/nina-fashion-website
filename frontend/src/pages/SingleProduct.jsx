import React from "react";
import { useParams } from "react-router-dom";

export const SingleProduct = () => {
  const params = useParams();
  const { slug } = params;
  return (
    <div>
      <h1>Single product page</h1>
      <p>{slug}</p>
    </div>
  );
};
