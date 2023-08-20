import { Rate } from "antd";
import React, { useState } from "react";
import { BsCart, BsHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ItemCard = ({ item }) => {
  const { img, name, price, rating } = item;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/shop/category/productId")}
      className="cursor-pointer"
    >
      <div className="group/product relative overflow-hidden">
        <img
          className="rounded-lg mb-2 hover:scale-105 transition-300 hover:-rotate-6"
          src={img}
          alt="item_img"
        />
        <div className="group-hover/product:opacity-100 opacity-0 absolute flex top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <BsCart className="bg-dark/50 text-white text-4xl p-2 rounded-full hover:bg-primary" />
          <BsHeart className="bg-dark/50 text-white text-4xl p-2 rounded-full hover:bg-primary" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h6 className="font-semibold">{name}</h6>
        <Rate disabled={true} value={rating} />
      </div>
      <p className="text-primary">${price}</p>
    </div>
  );
};

export default ItemCard;
