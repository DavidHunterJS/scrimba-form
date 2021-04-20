import { useState } from "react";
export default function ScrimbaForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("** Submited **");
  };
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="inputs"
          placeholder="name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          aria-label="name"
          required
        />
        <input
          type="email"
          className="inputs"
          placeholder="email"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          aria-label="email"
          required
        />
        <button className="inputs" type="submit" id="theButton">
          Sign Up
        </button>
      </form>
    </div>
  );
}
