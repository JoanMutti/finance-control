import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/InOutMoneyView.css";
import { getTransactions } from "../utils/getTransactions";

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
          <p className="InOutView_for">
            {transaction.category} {transaction.subcategory}
          </p>
          <p className="InOutView_amount">${Number(transaction.amount).toLocaleString("es-AR")}</p>
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

  function getBalance() {
    if (transactions) {
      return transactions.reduce((prev, current) => {
        if (current.type === "in") {
          return prev + Number(current.amount);
        } else {
          return prev - Number(current.amount);
        }
      }, 0);
    } else {
      return 0;
    }
  }

  return (
    <div className="InOutMoneyView">
      <div className="InOutMoneyView_balance">
        <h3>Balance</h3>
        <p>${getBalance().toLocaleString("es-AR")}</p>
      </div>
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
