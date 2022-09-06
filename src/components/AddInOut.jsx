import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/AddInOut.css";

import AddTransactionForm from "./AddTransactionForm";

const variants = {
  open: {
    width: "calc(100% - 48px)",
    height: "85vh",
    borderRadius: "8px",
    backgroundColor: "var(--card-color)",
    bottom: "24px",
  },
  closed: {
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "var(--green)",
  },
};

const AddInOut = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    open && document.body.classList.add("blur");
    return () => document.body.classList.remove("blur");
  }, [open]);

  const handleOpen = () => {
    setOpen(!open);
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
      <AddTransactionForm />
      {/* )} */}
    </motion.div>
  );
};

export default AddInOut;
