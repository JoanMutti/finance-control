import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/InOutMoneyView.css";

const dataList = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"];

const variants = {
  in: { left: "0px", right: "auto", borderRadius: "12px 0px 0px 12px" },
  out: { right: "0px", left: "auto", borderRadius: "0px 12px 12px 0px" },
};

const ChangeView = ({ view, handleChangeView }) => (
  <div className="ChangeView">
    <motion.div className="ChangeView_background" animate={view} variants={variants}></motion.div>
    <button style={view === "out" ? { border: "1px solid var(--primary-button-color)", borderRadius: "12px 0px 0px 12px" } : null} className="btn-active" onClick={() => handleChangeView("in")}>
      Ingresos
    </button>
    <button style={view === "in" ? { border: "1px solid var(--primary-button-color)", borderRadius: "0px 12px 12px 0px" } : null} className="btn-inactive" onClick={() => handleChangeView("out")}>
      Gastos
    </button>
  </div>
);

const InOutView = ({ data }) => (
  <div className="InOutView">
    {data.map((item, index) => (
      <div className="InOutView_item" key={index}>
        <p className="InOutView_date">5/6</p>
        <p className="InOutView_for">Colegio</p>
        <p className="InOutView_amount">$55.500</p>
      </div>
    ))}
  </div>
);

export const InOutMoneyView = () => {
  const [view, setView] = useState("in");

  const handleChangeView = (newView) => {
    setView(newView);
  };

  return (
    <div className="InOutMoneyView">
      <ChangeView view={view} handleChangeView={handleChangeView} />
      <div className="InOutView_item InOutView_item_titles ">
        <p className="InOutView_date">Fecha</p>
        <p className="InOutView_for">Motivo</p>
        <p className="InOutView_amount">Monto</p>
      </div>
      <InOutView data={dataList} />
    </div>
  );
};
