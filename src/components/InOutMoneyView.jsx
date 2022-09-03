import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/InOutMoneyView.css";
import { getTransactions } from "../utils/getTransactions";

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

const InOutView = ({ transactions }) => {
  return (
    <div className="InOutView">
      {transactions.map((transaction) => (
        <div className="InOutView_item" key={`Transaction-${transaction.id}`}>
          <p className="InOutView_date">
            {transaction.day}/{transaction.month}
          </p>
          <p className="InOutView_for">{transaction.reason}</p>
          <p className="InOutView_amount">${transaction.amount}</p>
        </div>
      ))}
    </div>
  );
};

export const InOutMoneyView = () => {
  const [view, setView] = useState("in");
  const [transactions, setTransactions] = useState([]);

  const handleChangeView = (newView) => {
    setView(newView);
  };

  useEffect(() => {
    getTransactions().then((transactions) => setTransactions(transactions));
  }, []);

  return (
    <div className="InOutMoneyView">
      <ChangeView view={view} handleChangeView={handleChangeView} />
      <div className="InOutView_item InOutView_item_titles ">
        <p className="InOutView_date">Fecha</p>
        <p className="InOutView_for">Motivo</p>
        <p className="InOutView_amount">Monto</p>
      </div>
      <InOutView transactions={transactions.filter((transaction) => transaction.type === view)} />
    </div>
  );
};
