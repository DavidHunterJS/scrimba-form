import { useState } from "react";
import { motion } from "framer-motion";
export default function ScrimbaForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("** Submited **");
  };
  const containterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
  };
  const itemVariants = {
    hidden: { x: -1150, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.9 } },
  };
  return (
    <motion.div>
      <motion.form
        onSubmit={handleSubmit}
        className="formContainer"
        variants={containterVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.input
          type="text"
          className="inputs"
          placeholder="name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          aria-label="name"
          required
          variants={itemVariants}
        />
        <motion.input
          type="email"
          className="inputs"
          placeholder="email"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          aria-label="email"
          required
          variants={itemVariants}
        />
        <motion.button
          className="inputs"
          type="submit"
          id="theButton"
          variants={itemVariants}
        >
          Sign Up
        </motion.button>
      </motion.form>
    </motion.div>
  );
}
