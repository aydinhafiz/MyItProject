import React, { useState } from "react";

import "../components/select-product-components/select-product.css";
import einkaufswagen from "../assets/einkaufswagen-picture.png";

import SelectHeader from "../components/select-product-components/select-header/select-header";

import plus from "../assets/plus-img.svg";
import minus from "../assets/minus-img.png";
import wakeygumMinze from "../assets/wakeygum-minze.png";
import wakeygumWassermelone from "../assets/wakeygum-wassermeloneNEW.png";

function SelectProduct() {
  ////////////////////////USESTATE SİDE//////////////////////////////////////////////////////////////////////////////////
  const [productNumber, setProductNumber] = useState(0);
  const [price, setPrice] = useState(0); // Yeni eklediğimiz fiyat değişkeni

  const handleclick = () => {
    setProductNumber(productNumber + 1);
    setPrice(price + 10); // Adet arttıkça fiyatı 10 birim artırıyoruz (bu değeri ihtiyaçlarınıza göre değiştirebilirsiniz)
  };

  const minusclick = () => {
    if (productNumber > 0) {
      setProductNumber(productNumber - 1);
      setPrice(price - 10); // Adet azaldıkça fiyatı 10 birim azaltıyoruz
    }
  };
  ///////////////////////////USESTATE FOR ORDER 2////////////////////////////////////////////////////////////////
  const [productNumberOrder, setProductNumberOrder] = useState(0);
  const [priceOrder, setPriceOrder] = useState(0); // Yeni eklediğimiz fiyat değişkeni

  const handleclickOrder = () => {
    setProductNumberOrder(productNumberOrder + 1);
    setPriceOrder(priceOrder + 10); // Adet arttıkça fiyatı 10 birim artırıyoruz (bu değeri ihtiyaçlarınıza göre değiştirebilirsiniz)
  };

  const minusclickOrder = () => {
    if (productNumberOrder > 0) {
      setProductNumberOrder(productNumberOrder - 1);
      setPriceOrder(priceOrder - 10); // Adet azaldıkça fiyatı 10 birim azaltıyoruz
    }
  };
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className="select-product-container">
      <SelectHeader />
      <div className="order-content">
        <div className="order-product">
          <div className="product-picture-description">
            <img src={wakeygumMinze} alt="" className="product-show-img" />
          </div>

          <div className="product-describle-information">
            <h3 className="company-name">Wakey</h3>
            <h2 className="product-name">Wakeygum Minze</h2>
            <p className="product-description">minz USW</p>
            <div className="product-sale">
              <div className="product-sale-info">
                <span className="product-price">€1.25</span>
                <button className="sale-in-procent">50%</button>
              </div>
              <span className="old-price">€2.50</span>
            </div>

            <div className="payment-method">
              <div className="product-number">
                <img
                  onClick={minusclick}
                  src={minus}
                  alt=""
                  className="minus"
                />
                <span className="product-numbers">{productNumber}</span>
                <img onClick={handleclick} src={plus} alt="" className="plus" />
              </div>
              <button className="gesamt-summe">Summe {price}€</button>{" "}
              {/* Fiyatı ekrana yazdırıyoruz */}
              <div className="delivery-button-bar">
                <img src={einkaufswagen} alt="" className="einkaufswagen" />
                <button className="delivery-button">Zur Kasse</button>
              </div>
            </div>
          </div>
        </div>

        <div className="order-product">
          <div className="product-picture-description">
            <img src={wakeygumWassermelone} alt="" className="product-show-img" />
          </div>

          <div className="product-describle-information">
            <h3 className="company-name">Wakey</h3>
            <h2 className="product-name">Wakeygum Minze</h2>
            <p className="product-description">minz USW</p>
            <div className="product-sale">
              <div className="product-sale-info">
                <span className="product-price">€1.25</span>
                <button className="sale-in-procent">50%</button>
              </div>
              <span className="old-price">€2.50</span>
            </div>

            <div className="payment-method">
              <div className="product-number">
                <img
                  onClick={minusclickOrder}
                  src={minus}
                  alt=""
                  className="minus"
                />
                <span className="product-numbers">{productNumberOrder}</span>
                <img
                  onClick={handleclickOrder}
                  src={plus}
                  alt=""
                  className="plus"
                />
              </div>
              <button className="gesamt-summe">Summe {priceOrder}€</button>{" "}
              {/* Fiyatı ekrana yazdırıyoruz */}
              <div className="delivery-button-bar">
                <img src={einkaufswagen} alt="" className="einkaufswagen" />
                <button className="delivery-button">Zur Kasse</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SelectProduct;
