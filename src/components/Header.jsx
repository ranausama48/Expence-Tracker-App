import React from "react";
import styled from "styled-components";
const Heading2 = styled.h2`
  color: #404e67;
  font-weight: 900;
  font-size: 33px;
  margin: 0px;
  line-height: 69px;
`;
export const Header = () => {
  return <Heading2 className="text-center">Expense Tracker</Heading2>;
};
