import { FC } from "react";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import theme from "./theme";
import Sidebar from "./components/Sidebar";
import "./App.css";

import BankPage from "./pages/Bank";
import PaymentCardsPage from "./pages/PaymentCards";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr 360px;
  height: 100%;
`;

const AppProvider: FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Container>
          <Sidebar />
          <Routes>
            <Route path="/payment-cards" element={<PaymentCardsPage />} />
            <Route path="/bank" element={<BankPage />} />

            <Route path="/" element={<Navigate to="/payment-cards" />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default AppProvider;
