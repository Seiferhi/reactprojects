import React, { Component } from "react";
import FormulaireEtude from "./formulaireEtude";

var myList = [
  {
    nom: "Nom & prénom",
    email: "Adrresse Email",
    tel: "Téléphone",
    profession: "Proféssion & Description"
  },
  {
    tite: "Titre",
    localisation: "Localisation",
    budget: "Budget",
    description: " Description du projet"
  }
];
class ListEtude extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {myList.map((el, index) => (
          <FormulaireEtude key={index} item={el} />
        ))}
      </div>
    );
  }
}

export default ListEtude;
