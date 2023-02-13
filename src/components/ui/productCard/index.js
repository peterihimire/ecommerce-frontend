import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import prodImg from "../../../assets/images/product8.png";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCart } from "@fortawesome/free-solid-svg-icons";
import {
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
  Search,
} from "@mui/icons-material";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import "./styles.scss";

const ProductCard = ({ id, image, title, content, icon }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);

  return (
    <div
      // data-aos="zoom-in"
      className={`product-card`}
      key={id}
    >
      <div className={`circle-div`}></div>
      <div className={`product-div`}>
        <img src={prodImg} alt="" />
      </div>
      <ul className={`product-actions`}>
        <li className={`product-act`}>
          <Link>
            <ShoppingCartOutlined className={`shop-icon`} />
          </Link>
        </li>
        <li className={`product-act`}>
          <Link>
            {/* <FontAwesomeIcon icon={faSearch} /> */}
            <Search className={`shop-icon`} />
          </Link>
        </li>
        <li className={`product-act`}>
          <Link>
            <FavoriteBorderOutlined className={`shop-icon`} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProductCard;
