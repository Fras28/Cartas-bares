import React, { useEffect } from "react";
import { Cards } from "../Cards/Cards.jsx";
import "./Cafeteria.css";
import { Nav } from "../Nav/Nav.jsx";
import { useDispatch, useSelector } from "react-redux";
import { asyncallProducts } from "../redux/slice.jsx";


export const Cafeteria = (id) => {


  let dispatch = useDispatch();

  let { allProduct } = useSelector((state) => state.alldata);

  useEffect(() => {
    if (allProduct.length === 0) dispatch(asyncallProducts());
  }, [allProduct, dispatch]);

  const Cafex = allProduct?.filter((e) => e.section === "Cafe");
  const CafeEspecial = allProduct?.filter((e) => e.section === "Cafe Especial");
  const Infusionesx = allProduct?.filter((e) => e.section === "Infusiones");
  const ColdBrew = allProduct?.filter((e) => e.section === "Cold Brew");
  const CafeFrio = allProduct?.filter((e) => e.section === "Cafe Frio");
  const Desayunox = allProduct?.filter((e) => e.section === "DESAYUNO");

  return (
    <div className="containerL">
      <Nav id={id.match.params.id} />
      <div className="sectioner">
        <a href="#1">Cafe</a>
        <a href="#2">Cafe Especial</a>
        <a href="#3">Infusiones</a>
        <a href="#4">Cold Brew</a>
        <a href="#5">Cafe Frio</a>
        <a href="#6">Desayunos</a>
      </div>
      <div className="conteinerLC">
        <div className="conteinerLB2">
          <img
          id="1"
            src="https://cdn.shopify.com/s/files/1/0613/6342/1411/files/a_900x900.png?v=1669254768"
            alt="promo"
          />
          <Cards products={Cafex} />
      
          <img
          id="2"
            src="https://cdn.shopify.com/s/files/1/0613/6342/1411/files/a_900x900.png?v=1669254768"
            alt="promo"
          />
          <Cards products={CafeEspecial} />
          <div ></div>
          <img
          id="3"
            src="https://cdn.shopify.com/s/files/1/0613/6342/1411/files/a_900x900.png?v=1669254768"
            alt="promo"
          />
          <Cards products={Infusionesx} />
          <div ></div>
          <img
          id="4"
            src="https://cdn.shopify.com/s/files/1/0613/6342/1411/files/a_900x900.png?v=1669254768"
            alt="promo"
          />
          <Cards products={ColdBrew} />
          <div ></div>
          <img
          id="5"
            src="https://cdn.shopify.com/s/files/1/0613/6342/1411/files/a_900x900.png?v=1669254768"
            alt="promo"
          />
          <Cards products={CafeFrio} />
          <div ></div>
          <img
          id="6"
            src="https://cdn.shopify.com/s/files/1/0613/6342/1411/files/a_900x900.png?v=1669254768"
            alt="promo"
          />
          <Cards products={Desayunox} />
        </div>
      </div>
    </div>
  );
};
