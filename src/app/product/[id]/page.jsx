// "use client";

import React from "react";

function Product({ params }) {
  console.log(params.id);
  return (
    <div>
      <h1>product one</h1>
    </div>
  );
}

export default Product;
