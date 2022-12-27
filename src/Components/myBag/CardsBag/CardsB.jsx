import React from "react";
import { Card } from "../../Cards/Card/Card";


import { CardBag } from "../CardB/CardB";

import "./CardsB.css";

export const CardsBag = ({ products }) => {
  const valores = products.map((e) => parseInt(e.price, 10));
  let total = valores.reduce((a, b) => a + b, 0);
  const filtrado = products.filter((item,index)=>{
    return products.indexOf(item) === index;
  })

  return (
    <div className="cartaB">
      <div className="montoTotal">
        <span className="aPagar">Total :${total} </span>
      </div>
      <div className="rowsCardBag">
        {filtrado?.map((e) => (
          <Card producto={e} />
        ))}
      </div>
    </div>
  );
};

// {products?.map((e)=><Card  nombre={e.name} detalle={e.detail} precio={e.price}/> )}
