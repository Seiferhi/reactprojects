import React, { Component } from "react";
import FormulaireReclamation from "./formulaireReclamation";

var myList = [
  {
    titre: "Titre de réclamation :",
    message: "Message :"
  }
];
class ListReclamation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {myList.map((el, index) => (
          <FormulaireReclamation key={index} item={el} />
        ))}
      </div>
    );
  }
}

export default ListReclamation;
