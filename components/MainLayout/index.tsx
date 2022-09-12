import React, { ReactNode } from "react";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";

interface IProps{
  children: ReactNode
}

const MainLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="wrapper">
      <HeaderComponent />
      { children }
      <FooterComponent />
    </div>
  )
}

export default MainLayout;
