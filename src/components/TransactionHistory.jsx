import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { Transaction } from "./Transaction";
import styled from "styled-components";
const UnorderList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 40px;
  li.minus {
    border-right: 5px solid #953064;
    color: #953064;
    font-weight: bold;
  }
  li.plus {
    border-right: 5px solid #1e705a;
    color: #1e705a;
    font-weight: bold;
  }
`;
export const TransactionHistory = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3 className="text-center">Transaction History</h3>
      <UnorderList>
        {transactions.map((transactions) => (
          <Transaction key={transactions.id} transactions={transactions} />
        ))}
      </UnorderList>
    </>
  );
};
