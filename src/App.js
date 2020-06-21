import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpences } from "./components/IncomeExpences";
import { TransactionHistory } from "./components/TransactionHistory";
import { TransactionForm } from "./components/TransactionForm";
import { GlobalProvider } from "./Context/GlobalState";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 0px 10px;
`;
const Wraper = styled.div`
  padding: 0px 10px;
  background: #ffffff;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.15);
  border-radius: 23px;
  > div {
    max-width: 500px;
    margin: auto;
  }
`;
function App() {
  return (
    <GlobalProvider>
      <Container>
        <Wraper>
          <div>
            <Header />
            <Balance />
            <IncomeExpences />
            <TransactionHistory />
            <TransactionForm />
          </div>
        </Wraper>
      </Container>
    </GlobalProvider>
  );
}

export default App;
