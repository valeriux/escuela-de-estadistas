import React from "react";
import axios from "axios";

class InicioContent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="background_main" className="hero is-dark is-bold">
        <div className="hero-body hero-padding" id="section_background">
          <div className="container" id="container_main">
            <div id="div_main" className="columns is-centred">
              <div className="column is-two-thirds-desktop">
                <div class="columns flex">
                  <div class="column is-three-quarters-desktop logo-escuela">
                    <figure class="image">
                      <img
                        class="profilepic"
                        src="media/logo_escuela_estadistas.jpeg"
                        alt="A photo of me"
                      />
                    </figure>
                  </div>
                  <div class="column is-three-quarters-desktop">
                    <hr className="divider" />
                    <p class="subtitle is-6">
                      <b>
                        Aquí va una description de la escuela bla bla bla bla
                        bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                        bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                        bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                        bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                        bla bla bla bla bla bla bla bla bla bla bla bla bla bla.
                      </b>
                    </p>
                    <p class="subtitle is-6">
                      <b>
                        Aquí va una description de la escuela bla bla bla bla
                        bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                        bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                        bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                        bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                        bla bla bla bla bla bla bla bla bla bla bla bla bla bla.
                      </b>
                    </p>
                    <p class="subtitle is-6">
                      <b>
                        Aquí va una description de la escuela bla bla bla bla
                        bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                        bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                        bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                        bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                        bla bla bla bla bla bla bla bla bla bla bla bla bla bla.
                      </b>
                    </p>
                    <hr className="divider" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InicioContent;
