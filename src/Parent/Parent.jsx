import React from "react";
import Child from "../Child/Child";
import { useState } from "react";
export default function Parent() {
  const [Product, setProduct] = useState([
    {
      name: "Samsung",
      price: 12000,
      category: "TV",
      onSale: true,
      count: 5,
    },
    {
      name: "Iphone",
      price: 40000,
      category: "Mobile",
      onSale: false,
      count: 8,
    },
    {
      name: "Toshiba",
      price: 15000,
      category: "TV",
      onSale: true,
      count: 20,
    },
    {
      name: "Oppo",
      price: 18000,
      category: "Mobile",
      onSale: true,
      count: 0,
    },
  ]);
  function deletePro(i) {
    let newPro = structuredClone(Product);
    newPro.splice(i, 1);
    setProduct(newPro);
  }
  function increment(i) {
    let newPro = structuredClone(Product);
    newPro[i].count++
    setProduct(newPro)
  }
  function decrement(i) {
    let newPro = structuredClone(Product);
    newPro[i].count--;
    setProduct(newPro);
  }
  return (
    <div className="w-[90%] mx-auto row gap-2">
      {Product.map((item, i) => {
        return (
          <Child
            pro={item}
            index={i}
            del={deletePro}
            inc={increment}
            dec={decrement}
          />
        );
      })}
    </div>
  );
}
