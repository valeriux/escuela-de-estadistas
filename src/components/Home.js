import React from "react";
import InicioContent from "./InicioContent";

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section>
        <InicioContent />
        <div className="container"></div>
      </section>
    );
  }
}

export default Home;
