import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import styled from "styled-components";
export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(({ amount }) => amount);
  const total = amounts.reduce((acc, curr) => (acc = acc + curr), 0);

  const Heading1 = styled.h1`
    && {
      background: #4f6285;
      border-radius: 10px;
      padding: 10px;
      margin: 10px 0px;
      color: white;
    }
  `;
  return (
    <>
      <h4>Your Balance</h4>
      <Heading1>${total}</Heading1>
    </>
  );
};
