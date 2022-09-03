import React, { useState } from "react";
import { motion } from "framer-motion";
import { toDateInputValue } from "../utils/toDateInputValue";
import { addTransaction } from "../utils/addTransaction";
import Input from "./Input";

const AddTransactionForm = () => {
  const [type, setType] = useState("in");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(toDateInputValue(new Date()));
  const [method, setMethod] = useState("cash");
  const [reason, setReason] = useState("");

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleMethodChange = (e) => {
    setMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateSplited = date.split("-");
    addTransaction({
      type: type.toLowerCase(),
      amount,
      day: parseInt(dateSplited[2]),
      month: parseInt(dateSplited[1]),
      year: dateSplited[0],
      method: method.toLowerCase(),
      reason: reason.toLowerCase(),
    }).then((res) => {
      console.log(res);
    });
  };
  return (
    <motion.form
      variants={{
        open: { opacity: 1, transition: { delay: 0.25 }, display: "block" },
        closed: { opacity: 0, transition: { duration: 0.01 }, display: "none" },
      }}
      onSubmit={handleSubmit}
    >
      <select name="type" id="type" onChange={handleTypeChange}>
        <option value="in">Ingreso</option>
        <option value="out">Gasto</option>
      </select>
      <Input value={date} handleChange={setDate} type="date" placeholder="Fecha" title="Fecha" />
      <Input value={amount} handleChange={setAmount} type="number" placeholder="Monto" title="Monto" />
      <select name="method" id="method" onChange={handleMethodChange}>
        <option value="cash">Efectivo</option>
        <option value="credit">Credito</option>
        <option value="debit">Debito</option>
      </select>
      <Input value={reason} handleChange={setReason} type="text" placeholder="Motivo" title="Motivo" />
      <input type="submit" value="Cargar" />
    </motion.form>
  );
};

export default AddTransactionForm;
