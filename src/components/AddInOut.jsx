import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Input from "./Input";
import "../styles/AddInOut.css";
import { toDateInputValue } from "../utils/toDateInputValue";

const variants = {
  open: {
    width: "300px",
    minHeight: "450px",
    right: "auto",
    borderRadius: "0px",
    left: "calc(50% - 150px)",
    backgroundColor: "var(--card-color)",
    bottom: "24px",
  },
  closed: {
    bottom: "24px",
    right: "24px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "var(--green)",
    fontSize: "32px",
  },
};

const AddInOut = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("in");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(toDateInputValue(new Date()));
  const [method, setMethod] = useState("");
  const [reason, setReason] = useState("");

  useEffect(() => {
    open && document.body.classList.add("blur");
    return () => document.body.classList.remove("blur");
  }, [open]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ type, amount, date: new Date(date).getTime(), method, reason });
  };

  return (
    <motion.div transition={{ duration: 0.3 }} className="AddInOut" variants={variants} animate={open ? "open" : "closed"}>
      <motion.button
        variants={{
          open: { transform: "rotate(45deg)", margin: "16px 16px auto auto", color: "var(--primary-text)" },
        }}
        className="btn_add"
        onClick={handleOpen}
      >
        +
      </motion.button>
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
        <Input value={date} handleChange={setDate} type="date" placeholder="Monto" title="Monto" />
        <Input value={amount} handleChange={setAmount} type="number" placeholder="Monto" title="Monto" />
        <Input value={method} handleChange={setMethod} type="text" placeholder="Metodo" title="Metodo" />
        <Input value={reason} handleChange={setReason} type="text" placeholder="Motivo" title="Motivo" />
        <input type="submit" value="Cargar" />
      </motion.form>
      {/* )} */}
    </motion.div>
  );
};

export default AddInOut;
