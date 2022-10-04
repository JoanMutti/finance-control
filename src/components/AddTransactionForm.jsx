import React, { useState } from "react";
import { motion } from "framer-motion";
import { toDateInputValue } from "../utils/toDateInputValue";
import { addTransaction } from "../utils/addTransaction";
import Input from "./Input";
import OptionsInput from "./OptionsInput";
import { outTypes } from "../assets/data";

const AddTransactionForm = () => {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(toDateInputValue(new Date()));
  const [method, setMethod] = useState("cash");
  const [category, setCategory] = useState("comida");
  const [subcategory, setSubcategory] = useState("carniceria");
  const [currency, setCurrency] = useState("peso");
  const [comments, setComments] = useState("");

  const handleMethodChange = (e) => {
    setMethod(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleSubcategoryChange = (e) => {
    const value = e.target.value;
    setSubcategory(value);
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory(value);
    setSubcategory(outTypes[value][0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateSplited = date.split("-");
    addTransaction({
      type: "out",
      amount,
      day: parseInt(dateSplited[2]),
      month: parseInt(dateSplited[1]),
      year: dateSplited[0],
      method: method.toLowerCase(),
      category,
      subcategory,
      currency,
      comments,
    }).then((res) => {
      console.log(res);
    });
  };
  return (
    <motion.form
      variants={{
        open: { opacity: 1, transition: { delay: 0.1 }, display: "block" },
        closed: { opacity: 0, transition: { duration: 0.01 }, display: "none" },
      }}
      onSubmit={handleSubmit}
    >
      <Input value={date} handleChange={setDate} type="date" placeholder="Fecha" title="Fecha" />
      <select name="currency" id="currency" onChange={handleCurrencyChange}>
        <option value="$">Pesos</option>
        <option value="USD">Dolares</option>
        <option value="CRI">Criptomonedas</option>
      </select>
      <Input value={amount} handleChange={setAmount} type="number" placeholder="Monto" title="Monto" />
      <select name="method" id="method" onChange={handleMethodChange}>
        <option value="credit">Credito</option>
        <option value="debit">Debito</option>
      </select>
      <OptionsInput title="categories" handleChange={handleCategoryChange} options={Object.keys(outTypes)} />
      <OptionsInput needRestart title="subcategories" handleChange={handleSubcategoryChange} options={outTypes[category]} />
      <Input value={comments} handleChange={setComments} type="text" placeholder="Comentarios" title="Comentarios" />
      <input type="submit" value="Cargar" />
    </motion.form>
  );
};

export default AddTransactionForm;
