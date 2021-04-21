import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.6 } },
  exit: { y: "-100vh", transition: { duration: 1, type: "tween" } },
};
const itemVariants = {
  hidden: { x: -1150, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.9, type: "tween" } },
};
export default function ScrimbaForm() {
  const [showForm, setShowForm] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("** You Got Submited **");
    setTimeout(() => {
      setShowForm(false);
      setFirstName("");
      setEmail("");
      setTimeout(() => {
        setShowForm(true);
      }, 1000);
    }, 600);
  };

  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        {showForm && (
          <motion.form
            novalidate
            onSubmit={handleSubmit}
            className="formContainer"
            variants={containterVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.input
              variants={itemVariants}
              type="text"
              className="inputs"
              placeholder="name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              aria-label="name"
              required
            />

            <motion.input
              variants={itemVariants}
              type="email"
              className="inputs"
              placeholder="email"
              value={lastName}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
            />

            <motion.button
              className="inputs"
              type="submit"
              id="theButton"
              variants={itemVariants}
              whileHover={{ rotate: 4 }}
            >
              Sign Up
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
