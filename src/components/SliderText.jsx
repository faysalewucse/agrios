import React, { useState } from "react";
import Button from "./Button";
import { Modal } from "../shared/Modal";

const SliderText = () => {
  const [isOpen,setIsOpen]=useState(true)

  return (
    <div className="w-full absolute top-1/2 md:left-1/2 left-5 transform md:-translate-x-1/2 md:px-10 -translate-y-1/2 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <p className="text-lg">Welcome to FARMS Systems</p>
          <h1 className="md:text-6xl md:w-1/2 text-4xl my-2 font-cursive leading-snug">
          Revolutionize Your Agri-Business with FARMS Systems
          </h1>
          <p className="text-[12px] my-5 md:w-3/4 w-[90%]">
            FARMS Systems is a holistic Farm And Ranch Management Software designed to streamline operations and maximize profitability in modern agriculture. With features ranging from comprehensive asset management and labor handling to intelligent accounting and automated Purchase Orders, FARMS Systems offers everything you need to run your farm or ranch efficiently. Exciting News: We're launching discounted beta subscriptions in Fall 2025! Take control of your agriculture business and seize this limited opportunity to watch your profits soar with FARMS Systems.
          </p>
          <button 
          className="btn" 
          onClick={()=>{
            setIsOpen(true)
            if(isOpen){
              document.getElementById('my_modal_1').showModal()
            }
          }}><Button>Sign Up for Beta News</Button>
          </button>
        </div>
      </div>
      {
        isOpen && <Modal setIsOpen={setIsOpen} />
      }
    </div>
  );
};

export default SliderText;
