import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import styled from "styled-components";

const StyledForm = styled.form`
  label {
    font-weight: bold;
    font-size: 22px;
    line-height: 36px;
    color: #404e67;
    display: inline-block;
    text-align: center;
    display: block;
    margin: 10px 0;
  }
  input {
    background: #ffffff;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    border: none;
    height: 50px;
    width: 100%;
    text-align: center;
    color: #3d5166;
    font-size: 20px;
  }
  input:focus {
    outline: none;
    border: 2px solid #3d5166;
  }
  button {
    background: #3d5166;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 15px;
    width: 100%;
    border: none;
    color: white;
    font-size: 20px;
    margin: 20px 0px;
  }
`;

export const TransactionForm = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: parseInt(amount),
    };
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  };
  return (
    <>
      <StyledForm onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <div>
            <input
              required
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text..."
            />
          </div>
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <div>
            <input
              required
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount..."
            />
          </div>
        </div>
        <button className="btn">Add transaction</button>
      </StyledForm>
    </>
  );
};
