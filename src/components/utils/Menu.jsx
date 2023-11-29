import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.min.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import "font-awesome/css/font-awesome.css";
import Cliente from "../cadastros/Cliente.jsx";
import Funcionario from "../cadastros/funcionario.jsx";
import Fornecedor from "../cadastros/fornecedor.jsx";
import Estoque from "../cadastros/estoque.jsx";
import "./style.css";

function Menu() {
  const history = useNavigate();
  return (
    <>
      <SideNav
        onSelect={(selected) => {
          history(selected);
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <i
                className="fa fa-fw fa-address-book"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>Cadastro</NavText>
            <NavItem eventKey="/cliente">
              <NavText>Cliente</NavText>
            </NavItem>
            <NavItem eventKey="/funcionario">
              <NavText>Funcionario</NavText>
            </NavItem>
            <NavItem eventKey="/estoque">
              <NavText>Estoque</NavText>
            </NavItem>
            <NavItem eventKey="/fornecedor">
              <NavText>Fornecedor</NavText>
            </NavItem>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
      <Routes>
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/funcionario" element={<Funcionario />} />
        <Route path="/estoque" element={<Estoque />} />
        <Route path="/fornecedor" element={<Fornecedor/>} />
      </Routes>
    </>
  );
}

export default Menu;
