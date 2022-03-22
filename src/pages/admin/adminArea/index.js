import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

import Vagas from "../../../assets/img/CADASTRAR-VAGAS.png";
import Cursos from "../../../assets/img/CADASTRAR-CURSOS.png";
import Casas from "../../../assets/img/VER-CASAS-INDICADAS.png";
import Voluntarios from "../../../assets/img/VER-CANDIDATOS-VOLUNTARIOS.png";
import CursosIndicados from "../../../assets/img/VER-CURSOS-INDICADOS.png";
import VagasCadastradas from "../../../assets/img/VER-VAGAS.png"

class Admin extends Component {
  render() {
    return (
      <>
        <main className="principal-main primeiro__bloco__login-area">
          <Link to="/admin/cadastrar-vagas-de-emprego">
            <img src={Vagas} alt="Cadastrar Vagas" className="cadastrar-vagas" />
          </Link>

          <Link to="/admin/cadastrar-cursos">
            <img src={Cursos} alt="Cadastrar Curso" className="cadastrar-curso" />
          </Link>

          <Link to="/admin/ver-casas-indicadas">
            <img src={Casas} alt="Ver Casas Indicadas" className="ver-casas" />
          </Link>

          <Link to="/admin/ver-candidatos-voluntarios">
            <img
              src={Voluntarios}
              alt="Ver Voluntários Cadastrados"
              className="ver-voluntarios"
            />
          </Link>

          <Link to="/admin/ver-vagas-indicadas">
            <img
              src={VagasCadastradas}
              alt="Ver Vagas Cadastradas"
              className="ver-parceiros"
            />
          </Link>

          <Link to="/admin/ver-cursos-indicados">
            <img
              src={CursosIndicados}
              alt="Ver Cursos Indicados"
              className="ver-parceiros"
            />
          </Link>
        </main>
      </>
    );
  }
}

export default Admin;
