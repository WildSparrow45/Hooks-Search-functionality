"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

import "../../Scss/Searchbar.scss";
import { BiSearch } from "react-icons/bi";

import "@/Scss/useeffect.scss";
// import

function UseEffect() {
  const [data, setdata] = useState([]);
  const [data2, setdata2] = useState([]);
  const [filterdata, filtersetdata] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          console.log(res.data.products);
          setdata(res.data.products);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchdata();
  }, []);
  function displayProducts(data3) {
    const displayData = data3.slice(0, 100).map((item) => {
      return (
        <div key={item.id} className="custom-product-item">
          <img src={item.thumbnail} alt="" />
          <h4>
            <span>{item.id}.</span>
            {item.title}
          </h4>
          <p>{item.description}</p>
          <details>
            <summary>Price: &#8377; {item.price}</summary>
            <label>Stock: {item.stock}Left </label>

            <label> Discount: {item.discountPercentage}%</label>
          </details>
        </div>
      );
    });

    return displayData;
  }
  const filterword = (event) => {
    setdata2(event.target.value);
  };
  const filterHandler = () => {
    const value = data2.toLowerCase().trim();
    if (value) {
      filtersetdata(
        data.filter(
          (product) => product.title.toLowerCase().indexOf(value) !== -1
        )
      );
    } else {
      filtersetdata(data);
    }
  };

  return (
    <div className="custom-use-effect">
      <div className="custom-heading ">
        <div>
          <h1>useEffect</h1>
        </div>

        <div className=" custom-Searchbar ">
          <input type="text" name="" id="" className="" onChange={filterword} />
          <button className="" onClick={filterHandler}>
            <BiSearch size={20} />
          </button>
        </div>
      </div>
      {/* <div className="custom-product">{displayProducts(filterdata)}</div>
      <div className="custom-product"> {displayProducts(data)}</div> */}
      <div className="custom-product">
        {filterdata ? displayProducts(filterdata) : displayProducts(data)}
      </div>
    </div>
  );
}

export default UseEffect;
