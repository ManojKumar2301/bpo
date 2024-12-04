import React from "react";
import AppRoutes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/global.css";

const App = () => (
  <>
    <Header />
    <AppRoutes />
    <Footer />
  </>
);

export default App;
