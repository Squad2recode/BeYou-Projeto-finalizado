import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../components/css/layout.css";
import "./styles.css";
import abrigo from "../../assets/img/abrigo.jpeg";
import indiqueUmaCasa from "../../assets/img/indiqueUmaCasa.jpg";

class Acolhimento extends Component {
  render() {
    return (
      <>
        <main>
          <section>
            <div className="opcoes">
              <div>
                <Link to="/acolhimento/encontre-uma-casa">
                  <img
                    src={abrigo}
                    alt="Acolhimento"
                    width="295px"
                    height="281px"
                    id="img-1"
                  />
                </Link>
                <Link to="/acolhimento/encontre-uma-casa">
                  <button type="button" className="btn btn-secondary btn__acolimento__opcao">
                    Casas
                  </button>
                </Link>
              </div>

              <div>
                <Link to="/acolhimento/indique-uma-casa">
                  <img
                    src={indiqueUmaCasa}
                    alt="Projetos"
                    width="295px"
                    height="281px"
                    id="img-2"
                  />
                </Link>
                <Link to="/acolhimento/indique-uma-casa">
                  <button type="button" className="btn btn-secondary btn__acolimento__opcao">
                    Indique
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Acolhimento;
