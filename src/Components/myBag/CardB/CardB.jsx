import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { asyncCancelFav, asyncfavProducts } from "../../redux/slice";
import "./CardB.css";

export const CardBag = ({producto}) => {
console.log(producto.name)
  
    const dispatch = useDispatch()
    const [articles, setArticles] = useState({
        name:[],
    });

   let cancelFav = function cancelBagArticle(e){
        setArticles({
            ...articles,
            name: producto.name,
            price:producto.price
        })
        dispatch(asyncCancelFav(producto))
        Swal.fire({
          position: 'bottom-end',
          icon: '',
          title: 'Eliminado',
          showConfirmButton: false,
          timer: 350
        })
    }

  return (
    <div className="contCard">
      <div className="leftInfo">
        <h2 className="nameProd">{producto.name}</h2>
        <p className="detProd">{producto.detail}</p>
      </div>
      <div className="rightInfo">
      <p className="priceProd">{producto.price}</p>
      <div className="divBtnProd">
        <button className="btnPlus" onClick={cancelFav} >
        <svg  width="30"
            height="30" viewBox="0 0 568 568" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className="efCancel"  fill-rule="evenodd" clip-rule="evenodd" d="M281.099 217.731L236.225 172.851C233.308 169.935 228.579 169.935 225.662 172.851L172.865 225.649C169.948 228.565 169.948 233.295 172.865 236.211L217.745 281.086C219.203 282.544 219.203 284.909 217.745 286.367L172.865 331.242C169.948 334.158 169.948 338.888 172.865 341.804L225.662 394.602C228.579 397.518 233.308 397.518 236.225 394.602L281.099 349.722C282.558 348.263 284.922 348.263 286.381 349.722L331.255 394.602C334.172 397.518 338.901 397.518 341.818 394.602L394.615 341.804C397.532 338.888 397.532 334.158 394.615 331.242L349.735 286.367C348.277 284.909 348.277 282.544 349.735 281.086L394.615 236.211C397.532 233.295 397.532 228.565 394.615 225.649L341.818 172.851C338.901 169.935 334.172 169.935 331.255 172.851L286.381 217.731C284.922 219.19 282.558 219.19 281.099 217.731V217.731Z" fill="black"/>
<path className="efCancel" d="M135.899 431.571C217.545 513.217 349.926 513.217 431.566 431.571C513.206 349.926 513.211 217.545 431.566 135.905C349.921 54.2647 217.539 54.2593 135.899 135.905C54.2593 217.55 54.254 349.931 135.899 431.571ZM83.102 484.369C-27.7007 373.562 -27.7007 193.915 83.102 83.102C193.909 -27.7007 373.555 -27.7007 484.369 83.102C595.171 193.909 595.171 373.555 484.369 484.369C373.562 595.171 193.915 595.171 83.102 484.369Z" fill="black"/>
</svg> 
</button>
      </div>
      </div>
    </div>
  );
};
