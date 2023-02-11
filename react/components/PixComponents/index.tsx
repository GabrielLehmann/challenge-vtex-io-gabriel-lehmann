import React, { useEffect, useState } from "react";
import { useProduct } from "vtex.product-context";
import PixImage from "./PixImage";
import Style from "./styles.css";
import "./globalStyles.css";

const PixComponents = () => {
  const [pixValue, setPixValue] = useState(0);
  const productInfo = useProduct();
  const productLowPrice =
    productInfo?.product?.priceRange.sellingPrice.lowPrice;
  useEffect(() => {
    if (productLowPrice) {
      setPixValue(productLowPrice * 0.9);
    }
  }, []);

  return (
    <div>
      <div className={Style.pixDiv}>
        <div className={Style.pixImgDiv}>
          <PixImage />
        </div>
        <div>
          <div className={Style.priceNormal}>
            R$ {pixValue.toFixed(2).replace(".", ",")}
          </div>
          <span className={Style.priceDiscount}>10 % de desconto</span>
        </div>
      </div>
    </div>
  );
};

export default PixComponents;
