import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import styled from "styled-components";
const StyledList = styled.li`
  border: 1px solid #d7e1eb;
  box-sizing: border-box;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.15);
  color: #333;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 10px;
  margin: 10px 0;
  :hover .delete-btn {
    opacity: 1;
  }
  .delete-btn {
    cursor: pointer;
    background-color: #c0392b;
    border: 0;
    color: #fff;
    font-size: 20px;
    line-height: 20px;
    padding: 2px 10px;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-100%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`;
export const Transaction = ({ transactions }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  function deleteHandler() {
    deleteTransaction(transactions.id);
  }
  const sign = transactions.amount < 0 ? "-" : "+";
  return (
    <StyledList className={transactions.amount < 0 ? "minus" : "plus"}>
      {transactions.text}
      <span>
        {sign}${Math.abs(transactions.amount)}
      </span>
      <button className="delete-btn" onClick={deleteHandler}>
        x
      </button>
    </StyledList>
  );
};
