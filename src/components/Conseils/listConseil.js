import React, { Component } from "react";

import Itembien from "./../itemBien/ItemBien";
import FormulaireConseil from "./formulaireConseil";
var myList = [
  {
    nom: "Nom & prénom :",
    tel: "Téléphone :",
    email: "Email :",
    agent: "Non d'agent :",
    message: "Message"
  }
];
class ListConseil extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {myList.map((el, index) => (
          <FormulaireConseil key={index} item={el} />
        ))}
      </div>
    );
  }
}

export default ListConseil;
