import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import styled from "styled-components";

const ExpenseContainer = styled.div`
  background: #ffd5df;
  color: #953064;
  > h4 {
    color: #953064;
  }
`;

const IncomeContainer = styled.div`
  background: #bde9d5;
  color: #1e705a;
  > h4 {
    color: #1e705a;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  > div {
    flex: 1;
    text-align: center;
    margin: 0px 5px;
    padding: 10px 0px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const ParaGraphy = styled.p`
  margin: 0px !important;
`;
export const IncomeExpences = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(({ amount }) => amount);
  const incomeExpences = (
    amounts
      .filter((items) => items < 0)
      .reduce((acc, curr) => (acc += curr), 0) * -1
  ).toFixed(2);
  const income = amounts
    .filter((items) => items > 0)
    .reduce((acc, curr) => (acc += curr), 0)
    .toFixed(2);
  return (
    <Container className="inc-exp-container">
      <IncomeContainer>
        <h4>Income</h4>
        <ParaGraphy>{income}</ParaGraphy>
      </IncomeContainer>
      <ExpenseContainer>
        <h4>Expense</h4>
        <ParaGraphy>{incomeExpences}</ParaGraphy>
      </ExpenseContainer>
    </Container>
  );
};
