import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton onClick={onShowCart} />
        {/* onClick f-on is up to us */}
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="meals-img" />
      </div>
    </>
  );
};

export default Header;
